import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dimensions } from 'react-native'
import { getCustomerOrders } from 'src/action/OrderAction'
import { getVendors } from 'src/action/DashboardAction'
import { ScrollableTabView } from '@valdio/react-native-scrollable-tabview'
import {
    Container, View,
} from "native-base";

import axios from "axios";
import storeConfig from "src/store";




import SellerGrid from '../../../../component/common/SellerGrid'
import OrderGrid from '../../../../component/Order/OrderGrid'
import Headers from "../../../../component/common/CustomerHeader";


let { height } = Dimensions.get("window");
let storeDefaults = storeConfig();
let store = storeDefaults.store

function mapStateToProps(state) {
    return {
        location: state.location,
        category: state.category,
        auth: state.auth
    };
}

class SrollDashboard extends Component {

    willFocus = this.props.navigation.addListener(
        'willFocus',
        payload => {
            this._fetchOrderData();
            this._fetchSellerData();
            this.axiosConfig()
        }

    );

    constructor(props) {
        super(props)
        this.state = {
            orders: [],
            orders_loading: false,

            sellers: [],
            seller_loading: false

        }

        this.axiosConfig()

    }


    async _fetchOrderData() {
        const { orders } = this.state
        const data = {
            offset: 0,
            limit: orders.length + 8
        }
        this.setState({ orders_loading: true })
        await this.props.getCustomerOrders(data).then(orders => {
            if (orders != null)
                this.setState({ orders_loading: false, orders: orders })
        })
    }

    async _fetchSellerData() {
        const { sellers } = this.state
        const { location, category } = this.props
        const data = {
            offset: 0,
            limit: sellers.length + 5,
            location: location,
            category: category
        }
        this.setState({ seller_loading: true })
        await this.props.getVendors(data).then(sellers => {
            if (sellers != null)
                this.setState({ seller_loading: false, sellers: sellers })
        })
    }

    static getDerivedStateFromProps(props, state) {

        if (props.location !== state.location) {

            return { location: state.location };
        }
        if (props.category !== state.category) {

            return { category: state.category };
        }

        return null

    }

    componentDidUpdate(prevProps, prevState) {

        if ((this.props.location !== prevProps.location) || (this.props.category !== prevProps.category)) {

            this._fetchSellerData();
        }
    }


    axiosConfig() {
        let token = this.props.auth.token
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    }

    render() {

        const { orders, orders_loading } = this.state
        const { sellers, seller_loading } = this.state
        return (
            <Container style={{ backgroundColor: "white" }}>
                <Headers headername="ShopEazy" leftmenu={false} vendorFilter={true} routes={this.props.navigation} locationSelect={true} activeSellerView={false} />
                <View
                    style={{
                        height: height - 20,
                        marginBottom: 10,
                        marginTop: 10
                    }}
                >

                    <ScrollableTabView

                        ref={(tabView) => { this.tabView = tabView; }}
                    >


                        <View tabLabel='Shops' >
                            <View style={{
                                height: height - 150,
                                marginBottom: 10,

                            }}>

                                <SellerGrid {...this.props} sellers={sellers} loading={seller_loading}
                                    fetchSellerData={() => this._fetchSellerData()}
                                />
                            </View>

                        </View>



                        <View tabLabel='Orders'>
                            <View style={{
                                height: height - 150,
                                marginBottom: 10,
                            }}>
                                <OrderGrid {...this.props}
                                    orders={orders}
                                    loading={orders_loading}
                                    fetchOrderData={() => this._fetchOrderData()}
                                />
                            </View>

                        </View>




                    </ScrollableTabView>
                </View>

            </Container>

        );
    }
}

export default connect(
    mapStateToProps, { getCustomerOrders, getVendors }
)(SrollDashboard);