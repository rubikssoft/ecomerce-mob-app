import React, { Component } from 'react'
import { connect } from 'react-redux'

import { View, Text, Card, CardItem } from 'native-base'
import { ScrollView, Dimensions, StyleSheet } from 'react-native'
let { height } = Dimensions.get("window");
import ProductList from './ProductList';

class OrderProducts extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (

            <Card >
                <View style={styles.rowHead}>
                    <Text style={[styles.titleChange, { textAlign: 'left' }]}> Products   </Text>
                    <Text style={[styles.titleChange, { textAlign: 'right' }]}> </Text>

                </View>

                <ScrollView style={{ padding: 5 }}>
                    <ProductList OrderProducts={this.props.OrderProducts} />
                </ScrollView>
            </ Card>




        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

const styles = StyleSheet.create({
    rowHead: { flexDirection: 'row', backgroundColor: '#013d6f', height: 35, color: '#fff', padding: 10, justifyContent: 'space-between' },
    titleChange: {
        color: '#fff', fontWeight: 'bold', textAlign: 'center', fontSize: 12
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(OrderProducts)
