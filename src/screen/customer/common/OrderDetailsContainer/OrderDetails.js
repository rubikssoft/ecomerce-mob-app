import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Dimensions, TouchableOpacity } from 'react-native'

import {
    Container,
    View,
    Card,
    CardItem,
    Text,
} from 'native-base'

import Headers from "../../../../component/common/CustomerHeader";

import CustomerCard from "../../../../component/common/OrderDetails/CustomerCard"
import OrderProducts from "../../../../component/common/OrderDetails/OrderProducts"


let { height } = Dimensions.get("window");

const order = {
    orderid: '111124',

    seller: {
        id: 34,
        name: 'Test Shop 2',
        place: 'Mukkam ',
        category: 'Grocery , Test Cate1 ',
        phone: '98765433455',
        img: 'http://www.shpanda.com/uploads/allimg/130723/1-130H3214S30-L.jpg'
    },
    items: [
        {
            id: 2,
            name: 'Rice 2',
            category: 'Raice',
            price: 20,
            unit: ['gm', 'kg'],

        },
        {
            id: 3,
            name: 'Rice 6',
            category: 'Raice',
            price: 20,
            unit: ['gm', 'kg'],

        }, {
            id: 77,
            name: 'Rice 46',
            category: 'Raice',
            price: 20,
            unit: ['gm', 'kg'],

        }, {
            id: 66,
            name: 'Rice 65',
            category: 'Raice',
            price: 20,
            unit: ['gm', 'kg'],

        }, {
            id: 23,
            name: 'Rice 64',
            category: 'Raice',
            price: 20,
            unit: ['gm', 'kg'],

        }, {
            id: 32,
            name: 'Rice 36',
            category: 'Raice',
            price: 20,
            unit: ['gm', 'kg'],

        }, {
            id: 44,
            name: 'Rice 62',
            category: 'Raice',
            price: 20,
            unit: ['gm', 'kg'],

        }, {
            id: 23,
            name: 'Rice 37',
            category: 'Raice',
            price: 20,
            unit: ['gm', 'kg'],

        }, {
            id: 23323,
            name: 'Rice 8',
            category: 'Raice',
            price: 20,
            unit: ['gm', 'kg'],

        }, {
            id: 221,
            name: 'Rice 9',
            category: 'Raice',
            price: 20,
            unit: ['gm', 'kg'],

        }, {
            id: 10,
            name: 'Rice 10',
            category: 'Raice',
            price: 20,
            unit: ['gm', 'kg'],

        },

    ],
    customer: {
        name: 'Sadu',
        address: {
            name: 'Sadu',
            mobile: '7293202425'
        }

    }
    ,
    total: {
        count: 10,
        amount: 400
    },
    payment: 'cod',
    status: 'ready',
    date: '11-10-2020 12:23 AM'




}




class OrderDetails extends Component {
    render() {
        return (

            <Container style={{ backgroundColor: "white" }}>
                <Headers routes={this.props.navigation} headername="OrderDetails" leftmenu={{ path: 'ScrollableDashboard', icon: 'md-arrow-dropleft' }} {...this.props} locationSelect={false} activeSellerView={false} />
                <CustomerCard order={order} />

                <OrderProducts order={order}  {...this.props} />






                <View style={{ position: 'absolute', left: 0, right: 0, bottom: 0, backgroundColor: '#7f1925', height: 70, justifyContent: 'space-between' }}>


                    <View style={{ height: 60, flexDirection: 'row', padding: 10, alignItems: 'center', justifyContent: 'space-between' }}>
                        <TouchableOpacity style={{ flex: 0.5, backgroundColor: '#fff', borderRadius: 5, alignItems: 'center', height: 40, paddingTop: 10, margin: 5 }}  >
                            <Text style={{ textAlign: 'center', fontWeight: 'bold', color: 'red' }}>Cancel</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ flex: 0.5, backgroundColor: '#fff', borderRadius: 5, alignItems: 'center', height: 40, paddingTop: 10, margin: 5 }}  >
                            <Text style={{ textAlign: 'center', fontWeight: 'bold', color: 'green' }}>Continue</Text>
                        </TouchableOpacity>

                    </View>


                </View>

            </Container>

        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetails)
