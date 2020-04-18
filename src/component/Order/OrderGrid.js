import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, Container } from 'native-base'
import Item from './OrderGridItems'
import { ScrollView } from 'react-native'

const data = [
    {
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
            count: 2,
            amount: 40
        },
        status: 'pending',
        date: '11-10-2020 12:23 AM'




    },
    {
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
            count: 2,
            amount: 40
        },
        status: 'cancelled',
        date: '11-10-2020 12:23 AM'




    }
    ,
    {
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
            count: 2,
            amount: 40
        },
        status: 'ready',
        date: '11-10-2020 12:23 AM'




    }

]
class OrderGrid extends Component {
    render() {
        return (
            <Container>
                <ScrollView>
                    {data.map((item, key) =>
                        <Item order={item}  {...this.props} key={key} />
                    )
                    }
                </ScrollView>



            </Container>


        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(OrderGrid)
