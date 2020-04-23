import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet } from 'react-native'
import { Card, Text, View, CardItem, Body } from 'native-base'

import OrderStatusButton from './OrderStatusButton'

class CustomerCard extends Component {
    render() {

        const { order } = this.props
        return (
            <Card>
                <CardItem>
                    <Body>
                        <View>
                            <Text style={styles.order}> #{order.orderid}</Text>
                            <Text style={styles.name}> {order.customer.name}</Text>
                            <Text style={styles.phone}> {order.customer.address.phone}</Text>

                            <OrderStatusButton status={order.status} />
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
