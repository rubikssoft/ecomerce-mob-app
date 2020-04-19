import React, { Component } from 'react';
import { connect } from 'react-redux';
import Item from './Products/Item'
import Header from './Products/Header'
import FloatingButton from './Products/FloatingButton'
import { loadProducts } from 'src/action/Seller/Dashboard'
import {
    Container,
    View,
    Text
} from 'native-base'
import { ScrollView, RefreshControl } from 'react-native'

function mapStateToProps(state) {
    return {
        sellerData: state.sellerData
    };
}



class ProductsContainer extends Component {
    render() {
        const products = this.props.sellerData.products

        return (
            <Container style={{ flex: 1 }}>
                <ScrollView refreshControl={
                    <RefreshControl
                        refreshing={this.props.sellerData.products.loading}
                        onRefresh={() => this.props.loadProducts()}
                        title="Loading..."
                    />
                }
                >
                    <Header />

                    {products.data && products.data.map((value, key) => (
                        <Item item={value} {...this.props} key={key} />
                    ))}






                </ScrollView>
            </Container >
        );
    }
}

export default connect(
    mapStateToProps, { loadProducts }
)(ProductsContainer);