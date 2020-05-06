import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { View, Text, Card, CardItem, Body } from 'native-base'
import OrderStatusButton from './OrderStatusButton'

class Item extends Component {
    render() {
        const { order } = this.props;
        const customer_details = order.customer_details;

        return (
            <TouchableOpacity onPress={() => this.props.navigation.navigate('SellerOrderDetails', { order: order })}>
                <Card>
                    <CardItem>

                        <Body >

                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <View style={styles.itemBody}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={styles.name}>{order.order_id}</Text>
                                        <OrderStatusButton status={order.order_status} />

                                    </View>

                                    <Text style={styles.name}>{customer_details.name}</Text>
                                    <Text style={styles.name}>{customer_details.address}| {order.user_number}</Text>



                                </View>


                                <View style={styles.itemBody}>
                                    <View style={{ flex: 1, alignItems: 'center' }}>
                                        <Text style={styles.total}>{order.order_total} ₹</Text>
                                        <Text style={styles.total_count}>{order.order_products.length} Items</Text>
                                        <Text style={styles.date}>{order.created_at}</Text>
                                    </View>





                                </View>
                            </View>



                        </Body>

                    </CardItem>

                </Card>

            </TouchableOpacity >

        );
    }
}

const styles = StyleSheet.create({
    sellerItem: {
        flex: 0.5,
        borderColor: '#000',
        borderWidth: 0.3,
        padding: 3
    }, sellerImage: {
        width: 75,
        height: 75,
        flex: 0.4,
        borderRadius: 10
    },
    name: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    place: {
        fontSize: 13,
        color: '#000',
    }, category: {
        fontSize: 13,
        color: '#000',
    }, phone: {
        fontSize: 13,
        color: '#000',
    }, itemBody: {
        padding: 15,
        flex: 0.5
    },
    date: {
        fontSize: 12,

    },
    total: {
        fontSize: 22
    }

})

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Item)
