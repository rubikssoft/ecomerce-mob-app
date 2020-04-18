import React, { Component } from 'react'
import { connect } from 'react-redux'

import { View, Text, Card, CardItem } from 'native-base'
import { ScrollView, Dimensions } from 'react-native'
let { height } = Dimensions.get("window");
import ProductList from './ProductList';

class OrderProducts extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <ScrollView style={{ flex: 1, height: height - 150 }}>
                <Card style={{ padding: 0, paddingBottom: 20, flex: 2 }}>
                    <CardItem style={{ padding: 0 }}>

                        <ProductList items={this.props.order.items} order={this.props.order} />
                    </CardItem>
                </Card>
            </ScrollView>



        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(OrderProducts)
