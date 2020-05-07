import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet } from 'react-native'
import { Card, Text, View, CardItem, Body, Thumbnail } from 'native-base'

import OrderStatusButton from './OrderStatusButton'

class CustomerCard extends Component {
    render() {

        const { order } = this.props
        const { customer_details } = order
        return (
            <Card>
                <CardItem>
                    <Body>
                        <View>
                            <Text style={styles.order}> #{order.order_id}</Text>


                            <Text style={styles.name}> {customer_details.name}</Text>
                            <Text style={styles.phone}> {customer_details.address} | {order.user_number}</Text>



                            <OrderStatusButton status={order.order_status} />
                        </View>
                    </Body>
                </CardItem>

            </Card>
        )
    }
}

const styles = StyleSheet.create({
    name: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#000'
    },
    phone: {
        fontSize: 12,
        color: '#000',
    },
    location: {
        fontSize: 12,
        color: '#000',
    }

})

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerCard)
