import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, TouchableOpacity, Image } from 'react-native'
import { View, Text, Card, CardItem, Body } from 'native-base'
import OrderStatusButton from './OrderStatusButton'

class Item extends Component {
    render() {
        const { order } = this.props;
        const seller = order.seller;

        return (
            <TouchableOpacity onPress={() => this.props.navigation.navigate('SellerOrderDetails', { order: order })}>
                <Card>
                    <CardItem>

                        <Body>

                            <View style={{ flexDirection: 'row', alignItems: 'center' }} >

                                <Image
                                    source={{
                                        uri: seller.img
                                    }}
                                    style={styles.sellerImage}
                                />
                                <View style={styles.itemBody}>
                                    <Text style={styles.name}>{order.orderid}</Text>
                                    <Text style={styles.name}>{seller.name} | {seller.place}</Text>
                                    <Text style={styles.date}>{order.date}</Text>

                                    <OrderStatusButton status={order.status} />

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
        padding: 15
    },
    date: {
        fontSize: 12
    }

})

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Item)
