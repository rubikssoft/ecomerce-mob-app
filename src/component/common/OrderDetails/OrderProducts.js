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

            <Card style={{ padding: 0, paddingBottom: 20 }}>
                <View style={{ flexDirection: 'row', backgroundColor: '#013d6f', height: 35, color: '#fff', padding: 10, justifyContent: 'space-between' }}>
                    <Text style={[{ color: '#fff', fontWeight: 'bold', textAlign: 'center', fontSize: 12 }, { textAlign: 'left', color: '#fff' }]}> Products </Text>
                    <Text style={[{ color: '#fff', fontWeight: 'bold', textAlign: 'center', fontSize: 12 }, { textAlign: 'left', color: '#fff' }]}> Price </Text>


                </View>
                <ScrollView style={{ flex: 1 }}>


                    <ProductList items={this.props.order.items} order={this.props.order} />

                </ScrollView>
            </Card>




        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(OrderProducts)
