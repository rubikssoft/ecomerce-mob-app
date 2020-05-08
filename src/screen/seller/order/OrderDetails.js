import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Dimensions, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import SkeletonContent from "react-native-skeleton-content";
import { orderStatusChange } from "src/action/OrderAction";

import {
    Container,
    View,
    Card,
    CardItem,
    Text,
    Content,
    Toast
} from 'native-base'

import Headers from "../../../component/Seller/Header";

import CustomerCard from "./components/CustomerCard"
import OrderProducts from "./components/OrderProducts"

let { width } = Dimensions.get("window");


const styles = StyleSheet.create({
    normalText: {
        fontSize: 12,
        color: '#000'
    },
    bigText: {
        fontSize: 18,
        color: '#000'
    },
    button: {
        backgroundColor: '#fff', borderRadius: 5, alignItems: 'center', height: 40, paddingTop: 10,
        margin: 5,
        borderWidth: 0.4,
        borderColor: 'red',
        width: '80%'

    },
    buttonSection: {
        alignItems: 'center',
        marginTop: 100,
        marginBottom: 20,
        alignContent: 'flex-end'

    },
    readyButton: {
        borderColor: 'grey',
        backgroundColor: 'green'
    },
    cancelButton: {
        borderColor: 'grey',
        backgroundColor: 'red'
    },
    rowHead: { flexDirection: 'row', backgroundColor: '#013d6f', height: 35, color: '#fff', padding: 10, justifyContent: 'space-between' },
    titleChange: {
        color: '#fff', fontWeight: 'bold', textAlign: 'center', fontSize: 12
    },
})


class OrderDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            order: [],
            order_products: [],
            total_amount: 0
        }
    }

    componentDidMount() {
        this.setState({
            order: this.props.navigation.state.params.order,
            order_products: this.props.navigation.state.params.order.order_products,
            loading: false
        })
    }


    _changeOrderStatus(order_id, status) {
        var label = 'Cancel Order';
        var msg = 'Are you sure want to cancel this order';
        var toast = "Cancelled";
        if (status == 4) {
            label = 'Delete Order';
            msg = 'Are you sure want to delete this order';
            toast = 'Deleted';

        } else if (status == 2) {
            label = ' Order Ready';
            msg = 'Are you sure';
            toast = 'Updated';
        }
        Alert.alert(
            label,
            msg,
            [
                { text: 'no', style: 'cancel' },
                {
                    text: 'yes', onPress: async () => {
                        //order-status-change
                        await this.props.orderStatusChange({ order_id, status }).then(res => {
                            if (res != null) {
                                Toast.show({
                                    text: "Updated",
                                    textStyle: { color: "green" },
                                    duration: 3000
                                });

                                this.props.navigation.navigate('SellerDashboard')
                            }
                        }

                        )


                    }
                },

            ],
            { cancelable: true },
        );
    }
    render() {
        const { order, loading, order_products } = this.state

        return (



            <Container style={{ backgroundColor: "white" }}>
                <Headers routes={this.props.navigation} leftmenu={{ path: 'SellerDashboard', icon: 'md-arrow-dropleft' }} {...this.props} />





                <SkeletonContent
                    containerStyle={{ flex: 1 }}
                    isLoading={loading}
                    layout={[
                        { key: "id1", width: width, height: 100, marginBottom: 6 },
                        { key: "id2", width: width, height: 100, marginBottom: 6 },
                        { key: "id3", width: width, height: 100, marginBottom: 6 },
                        { key: "id4", width: width, height: 100, marginBottom: 6 },

                    ]}
                >


                    <CustomerCard order={order} />

                    <OrderProducts OrderProducts={order_products}  {...this.props} />


                    <Card>
                        <View style={styles.rowHead}>
                            <Text style={[styles.titleChange, { textAlign: 'left' }]}> Sub Total   </Text>
                            <Text style={[styles.titleChange, { textAlign: 'right' }]}> {order.order_subtotal}</Text>

                        </View>
                    </Card>

                    <Card>
                        <View style={styles.rowHead}>
                            <Text style={[styles.titleChange, { textAlign: 'left' }]}>  Total   </Text>
                            <Text style={[styles.titleChange, { textAlign: 'right' }]}>{order.order_total} </Text>

                        </View>
                    </Card>

                    <View style={styles.buttonSection}>
                        <TouchableOpacity style={[styles.button, styles.readyButton]} onPress={() => this._changeOrderStatus(order.order_id, 2)}>
                            <Text style={{ textAlign: 'center', fontWeight: 'bold', color: 'white' }}>Ready</Text>
                        </TouchableOpacity>
                        {order.order_status != 'cancelled' &&
                            <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={() => this._changeOrderStatus(order.order_id, 3)}>
                                <Text style={{ textAlign: 'center', fontWeight: 'bold', color: 'white' }}>Cancel</Text>
                            </TouchableOpacity>
                        }
                        {order.order_status === 'cancelled' &&
                            <TouchableOpacity style={styles.button} onPress={() => this._changeOrderStatus(order.order_id, 4)}>
                                <Text style={{ textAlign: 'center', fontWeight: 'bold', color: 'red' }}>Delete</Text>
                            </TouchableOpacity>
                        }

                    </View>



                </SkeletonContent>

            </Container>

        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
    orderStatusChange
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetails)
