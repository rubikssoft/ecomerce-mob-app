import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Image } from 'react-native'
import { Card, Text, View, CardItem, Body, Thumbnail } from 'native-base'

import OrderStatusButton from '../../Order/OrderStatusButton'

export default class ShopeCard extends Component {
    render() {

        const { order } = this.props
        return (
            <Card style={styles.card}>


                <View style={{ flexDirection: 'row', alignItems: 'center' }} >

                    <Thumbnail
                        source={{
                            uri: order.seller_details.img
                        }}

                    />
                    <View style={styles.itemBody}>
                        <Text style={styles.name}>{order.order_id}</Text>
                        <Text style={styles.name}>{order.shop_name} | {order.seller_details.city} | {order.seller_number} </Text>
                        <Text style={styles.date}>{order.created_at}</Text>

                        <OrderStatusButton status={order.order_status} />

                    </View>

                </View>
            </Card>


        )
    }
}

const styles = StyleSheet.create({
    sellerItem: {
        flex: 0.5,
        borderColor: '#000',
        borderWidth: 0.3,
        padding: 3
    }, sellerImage: {
        width: 100,
        height: 75,
        flex: 0.8,
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
        padding: 15
    },
    date: {
        fontSize: 12
    },
    card: {
        padding: 10
    }

})

