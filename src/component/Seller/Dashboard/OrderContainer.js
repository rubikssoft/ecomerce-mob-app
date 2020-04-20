import React, { Component } from 'react';
import { connect } from 'react-redux';
import Item from './Order/Item'
import { loadOrders } from 'src/action/Seller/Dashboard'
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



class OrderContainer extends Component {


    render() {
        const orders = this.props.sellerData.orders
        return (
            <Container>
                <ScrollView refreshControl={
                    <RefreshControl
                        refreshing={this.props.sellerData.orders.loading}
                        onRefresh={() => this.props.loadOrders()}
                        title="Loading..."
                    />
                }
                >

                    {orders.data && orders.data.map((value, key) => (
                        <Item order={value} {...this.props} key={key} />
                    ))}




                </ScrollView>
            </Container >
        );
    }
}

export default connect(
    mapStateToProps, { loadOrders }
)(OrderContainer);