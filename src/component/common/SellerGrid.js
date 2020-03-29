import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, StyleSheet } from 'react-native';

import SellerItem from './SellerItem';
import { Row } from 'native-base';


function mapStateToProps(state) {
    return {

    };
}
var items = [
    {
        name: 'Test Shop',
        place: 'Mukkam ',
        category: 'Grocery , Test Cate1 ',
        phone: '98765433455',
        img: 'http://www.shpanda.com/uploads/allimg/130723/1-130H3214S30-L.jpg'
    }, {
        name: 'Test Shop',
        place: 'Mukkam ',
        category: 'Grocery , Test Cate1 ',
        phone: '98765433455',
        img: 'http://www.shpanda.com/uploads/allimg/130723/1-130H3214S30-L.jpg'
    }, {
        name: 'Test Shop',
        place: 'Mukkam ',
        category: 'Grocery , Test Cate1 ',
        phone: '98765433455',
        img: 'http://www.shpanda.com/uploads/allimg/130723/1-130H3214S30-L.jpg'
    }, {
        name: 'Test Shop',
        place: 'Mukkam ',
        category: 'Grocery , Test Cate1 ',
        phone: '98765433455',
        img: 'http://www.shpanda.com/uploads/allimg/130723/1-130H3214S30-L.jpg'
    },
]


const styles = StyleSheet.create({
    sellerGrid: {
        margin: 10,
        flex: 1,
        flexDirection: 'column',
        alignContent: 'space-around'

    }
})


class SellerGrid extends Component {
    render() {
        return (
            <View style={styles.sellerGrid}>

                {items.map((item, key) =>
                    <SellerItem item={item} key={key} {...this.props} />
                )
                }
            </View>


        );
    }
}


export default connect(
    mapStateToProps,
)(SellerGrid);