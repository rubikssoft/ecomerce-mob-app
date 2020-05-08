import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Dimensions, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native'
import { orderStatusChange } from "src/action/OrderAction";

import {
    Container,
    View,
    Card,
    CardItem,
    Text,
} from 'native-base'

import Headers from "../../../../component/common/CustomerHeader";

import ShopeCard from "../../../../component/common/OrderDetails/ShopeCard"
import OrderProducts from "../../../../component/common/OrderDetails/OrderProducts"
import CustomerCard from "../../../../component/common/OrderDetails/CustomerCard"

let { height } = Dimensions.get("window");





class OrderDetails extends Component {

    _changeOrderStatus(order_id, status) {
        var label = 'Cancel Order';
        var msg = 'Are you sure want to cancel this order';
        var toast = "Cancelled";
        if (status == 4) {
            label = 'Delete Order';
            msg = 'Are you sure want to delete this order';
            toast = 'Deleted';

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
                                //  Toast.show('This is a long toast.', Toast.LONG);
                                // Toast.show(toast, Toast.SHORT);
                                ToastAndroid.show(toast, ToastAndroid.SHORT);
                                this.props.navigation.navigate('ScrollableDashboard')
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

        const { order } = this.props.navigation.state.params
        return (

            <Container style={{ backgroundColor: "white" }}>
                <Headers routes={this.props.navigation} headername="OrderDetails" leftmenu={{ path: 'ScrollableDashboard', icon: 'md-arrow-dropleft' }} {...this.props} locationSelect={false} activeSellerView={false} />

                <ScrollView>


                    <ShopeCard order={order} />

                    <CustomerCard order={order} />

                    <OrderProducts order={order}  {...this.props} />


                    <Card>
                        <View style={styles.rowHead}>
                            <Text style={[styles.titleChange, { textAlign: 'left' }]}> SubTotal ({order.order_products.length})  </Text>
                            <Text style={[styles.titleChange, { textAlign: 'right' }]}> {order.order_subtotal} </Text>

                        </View>

                        <View style={styles.rowHead}>
                            <Text style={[styles.titleChange, { textAlign: 'left' }]}> Total   </Text>
                            <Text style={[styles.titleChange, { textAlign: 'right' }]}> {order.order_total} </Text>

                        </View>


                        <View style={styles.rowHead}>
                            <Text style={[styles.titleChange, { textAlign: 'left' }]}> Payment Options </Text>
                            <Text style={[styles.titleChange, { textAlign: 'right' }]}> Cash on delivery (COD) </Text>

                        </View>
                    </Card>



                    <View style={styles.buttonSection}>
                        {order.order_status != 'cancelled' &&
                            <TouchableOpacity style={styles.button} onPress={() => this._changeOrderStatus(order.order_id, 3)}>
                                <Text style={{ textAlign: 'center', fontWeight: 'bold', color: 'red' }}>Cancel</Text>
                            </TouchableOpacity>
                        }
                        {order.order_status === 'cancelled' &&
                            <TouchableOpacity style={styles.button} onPress={() => this._changeOrderStatus(order.order_id, 4)}>
                                <Text style={{ textAlign: 'center', fontWeight: 'bold', color: 'red' }}>Delete</Text>
                            </TouchableOpacity>
                        }

                    </View>
                </ScrollView>
            </Container>

        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
    orderStatusChange
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: '#fff', borderRadius: 5, alignItems: 'center', height: 40, paddingTop: 10,
        margin: 5,
        borderWidth: 0.4,
        borderColor: 'red',
        width: '80%'

    },
    buttonSection: {
        alignItems: 'center',
        marginTop: 50,
        marginBottom: 20,
        alignContent: 'flex-end'

    },
    titleChange: {
        color: '#fff', fontWeight: 'bold', textAlign: 'center', fontSize: 12
    },
    rowHead: { flexDirection: 'row', backgroundColor: '#013d6f', height: 35, color: '#fff', padding: 10, marginTop: 30, justifyContent: 'space-between' }
})
export default connect(mapStateToProps, mapDispatchToProps)(OrderDetails)
