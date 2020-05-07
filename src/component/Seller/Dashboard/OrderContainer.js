import React, { Component } from 'react';
import { connect } from 'react-redux';
import Item from './Order/Item'
import { loadOrders } from 'src/action/Seller/Dashboard'
import {
    Container,
    View,
    Text,
    Icon
} from 'native-base'
import { ScrollView, RefreshControl, StyleSheet, TouchableOpacity } from 'react-native'
import SkeletonContent from "react-native-skeleton-content";

function mapStateToProps(state) {
    return {
        sellerData: state.sellerData
    };
}

const styles = StyleSheet.create({
    no_data: {
        alignItems: 'center'
    },
    no_data_text: {
        fontSize: 18,
        color: 'grey',

    },
    refresh: {
        alignItems: 'center',
        marginTop: 30

    },
    center: {
        alignItems: 'center'
    }
})

class OrderContainer extends Component {


    render() {

        const { orders, loading } = this.props
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

                    {orders && orders.map((value, key) => (
                        <Item order={value} {...this.props} key={key} />
                    ))}

                    {!orders.length &&
                        <View style={styles.no_data}>
                            <Text style={styles.no_data_text}> No order found</Text>
                        </View>
                    }

                    <TouchableOpacity style={styles.refresh} onPress={() => this.props.fetchOrderData()}>
                        <SkeletonContent
                            containerStyle={{ flex: 1 }}
                            isLoading={loading}
                            layout={[
                                { key: "1", width: 600, height: 80, marginBottom: 6 },
                                { key: "2", width: 600, height: 80, marginBottom: 6 },
                                { key: "3", width: 600, height: 80, marginBottom: 6 },
                                { key: "4", width: 600, height: 80, marginBottom: 6 },
                                { key: "5", width: 600, height: 80, marginBottom: 6 },


                            ]}
                        >
                            <View style={[styles.center]}>
                                <Icon name="md-refresh" />
                                <Text>Refresh</Text>
                            </View>

                        </SkeletonContent>
                    </TouchableOpacity>


                </ScrollView>
            </Container >
        );
    }
}

export default connect(
    mapStateToProps, { loadOrders }
)(OrderContainer);