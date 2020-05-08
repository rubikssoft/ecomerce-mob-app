import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Image } from 'react-native'
import { Card, Text, View, CardItem, Body } from 'native-base'

import OrderStatusButton from '../../Order/OrderStatusButton'

export default class CustomerCard extends Component {
    render() {

        const { order } = this.props
        const customer_details = order.customer_details
        return (
            <Card style={styles.card}>
                <View style={{ flexDirection: 'row', backgroundColor: '#013d6f', height: 35, color: '#fff', padding: 10 }}>
                    <Text style={[styles.titleChange, { textAlign: 'left', color: '#fff' }]}> Customer </Text>


                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }} >

                    <View style={styles.itemBody}>

                        <Text style={styles.name}>{customer_details.name}  </Text>
                        <Text style={styles.name}>{customer_details.address} | {customer_details.city}   </Text>
                        <Text style={styles.name}>{customer_details.zip} | {order.user_number} </Text>


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
        padding: 15
    },
    date: {
        fontSize: 12
    },
    card: {
        padding: 0
    }, titleChange: {
        color: '#fff', fontWeight: 'bold', textAlign: 'center', fontSize: 12
    }

})

