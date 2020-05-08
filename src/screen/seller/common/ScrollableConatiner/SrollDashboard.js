import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TouchableWithoutFeedback, Modal } from 'react-native'
import { ScrollableTabView } from '@valdio/react-native-scrollable-tabview'
import { getSellerOrders, getSellerProducts } from 'src/action/Seller/DashboardAction'
import {
    Container,
    View,
    Text, Content,
    Card,
    CardItem, Body
} from "native-base";


import OrderContainer from '../../../../component/Seller/Dashboard/OrderContainer'
import ProductsContainer from '../../../../component/Seller/Dashboard/ProductsContainer'
import FloatingButton from '../../../../component/Seller/Dashboard/Products/FloatingButton'
import AddProduct from '../../../../component/Seller/Dashboard/Products/Add'
import Headers from "../../../../component/Seller/Header";

//redux
import axios from "axios";
import storeConfig from "src/store";
let storeDefaults = storeConfig();
let store = storeDefaults.store



function mapStateToProps(state) {
    return {
        error: state.sellerError,
        auth: state.auth
    }
}

class SrollDashboard extends Component {

    willFocus = this.props.navigation.addListener(
        'willFocus',
        payload => {
            this._fetchOrderData()
            this._fetchProductData()
        }
    );

    constructor(props) {
        super(props)
        this.state = {
            addProductModal: false,
            orders: [],
            orderLoading: false,

            products: [],
            productsLoading: false
        }
        this._fetchOrderData()
        this._fetchProductData()
        this._axiosConfig()
    }



    async _fetchOrderData() {

        const { orders } = this.state
        const { auth } = this.props
        this.setState({ orderLoading: true });

        const data = {
            offset: 0,
            limit: orders.length + 10,
            token: auth.token
        }
        await this.props.getSellerOrders(data).then(orders => {
            if (orders != null) {
                this.setState({ orders: orders, orderLoading: false })
            }
        })

    }

    async _fetchProductData() {
        const { products } = this.state
        const { auth } = this.props;

        this.setState({ productsLoading: true });
        const data = {
            seller_id: auth.user.id,
            offset: 0,
            limit: products.length + 10,
            token: auth.token
        }
        await this.props.getSellerProducts(data).then(res => {
            if (res != null) {
                this.setState({ products: res, productsLoading: false })
            }
        })
    }






    _axiosConfig() {
        let token = this.props.auth.token
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    }


    addProductToggle() {
        this.setState({ addProductModal: !this.state.addProductModal })
    }
    render() {

        const { orders, orderLoading, products, productsLoading } = this.state

        return (
            <Container >
                <Headers headername="ShopEazy" leftmenu={false} routes={this.props.navigation} locationSelect={true} activeSellerView={false} />
                <Content

                >

                    <ScrollableTabView

                        ref={(tabView) => { this.tabView = tabView; }}
                    >


                        <View tabLabel='Orders'>
                            <View style={{ flex: 1 }}>

                                <OrderContainer {...this.props} orders={orders} loading={orderLoading} fetchOrderData={() => this._fetchOrderData()} />


                            </View>

                        </View>



                        <View tabLabel='Products'>
                            <View style={{ flex: 1 }}>

                                <ProductsContainer  {...this.props} products={products} loading={productsLoading} loadProducts={() => this._fetchProductData()} />
                                <FloatingButton {...this.props} addProductToggle={() => this.addProductToggle()} />
                            </View>

                        </View>


                    </ScrollableTabView>

                </Content>
                <View>{this.addProductModal()}
                </View>
            </Container>

        );
    }


    addProductModal() {
        return (
            <Modal
                style={{
                    alignItems: "center",
                    justifyContent: "center",
                    flex: 1
                }}
                visible={this.state.addProductModal}
                transparent={true}
                onRequestClose={() => this.addProductToggle()}
            >
                <TouchableWithoutFeedback
                    style={{ flex: 1 }}
                    onPress={() => {
                        this.addProductToggle();
                    }}
                >

                    <View style={{ flex: 1, backgroundColor: "#0007" }}>
                        <View

                            onStartShouldSetResponder={() => {
                                return true;
                            }}
                        >
                            <Card
                                style={{
                                    marginTop: '20%',
                                    marginLeft: 20,
                                    marginRight: 20
                                }}
                            >
                                <CardItem header>
                                    <Body>

                                        <AddProduct categories={[]} closeAddModal={() => {
                                            this.setState({ addProductModal: false })
                                            this._fetchProductData()
                                        }} />
                                    </Body>
                                </CardItem>
                            </Card>
                        </View>
                    </View>

                </TouchableWithoutFeedback>
            </Modal>
        );
    }
}




export default connect(
    mapStateToProps, { getSellerOrders, getSellerProducts }
)(SrollDashboard);