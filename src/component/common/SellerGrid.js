import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, StyleSheet } from 'react-native';

import SellerItem from './SellerItem';
import { Row } from 'native-base';


function mapStateToProps(state) {
    console.log('seller grid')
    console.log(state);
    return {
        sellers: state.seller.sellers,
        loading: state.seller.sellerLoading,
    };
}



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
        if (this.props.loading)
            return (
                <View style={styles.sellerGrid}>
                    <Text>Loading</Text>
                </View>
            )
        return (
            <View style={styles.sellerGrid}>

                {this.props.sellers.map((item, key) =>
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