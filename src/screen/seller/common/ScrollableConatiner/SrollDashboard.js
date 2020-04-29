import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dimensions, TouchableWithoutFeedback, Modal } from 'react-native'
import RBSheet from "react-native-raw-bottom-sheet";

import OrderContainer from '../../../../component/Seller/Dashboard/OrderContainer'
import ProductsContainer from '../../../../component/Seller/Dashboard/ProductsContainer'
import FloatingButton from '../../../../component/Seller/Dashboard/Products/FloatingButton'
import AddProduct from '../../../../component/Seller/Dashboard/Products/Add'


import Headers from "../../../../component/Seller/Header";
import {
    Container,
    View,
    Text, Content,
    Card,
    CardItem, Body
} from "native-base";
import { ScrollableTabView, DefaultTabBar, ScrollableTabBar, } from '@valdio/react-native-scrollable-tabview'
let { height } = Dimensions.get("window");

function mapStateToProps(state) {
    return {
        error: state.sellerError
    }
}

class SrollDashboard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            addProductModal: false
        }
    }

    componentDidUpdate(prevProps) {

        // const { error } = this.props;
        // if (error.error) {
        //     this.RBSheet.open()
        // }


    }

    addProductToggle() {
        console.log('modal toggled')
        this.setState({ addProductModal: !this.state.addProductModal })
    }
    render() {
        return (
            <Container style={{ backgroundColor: "white" }}>
                <Headers headername="AppName" leftmenu={false} routes={this.props.navigation} locationSelect={true} activeSellerView={false} />
                <Content

                >

                    <ScrollableTabView

                        ref={(tabView) => { this.tabView = tabView; }}
                    >


                        <View tabLabel='Orders'>
                            <View style={{ flex: 1 }}>

                                <OrderContainer {...this.props} />


                            </View>

                        </View>



                        <View tabLabel='Products'>
                            <View style={{ flex: 1 }}>

                                <ProductsContainer />
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
                                    marginTop: '50%',
                                    marginLeft: 20,
                                    marginRight: 20
                                }}
                            >
                                <CardItem header>
                                    <Body>

                                        <AddProduct />
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
    mapStateToProps,
)(SrollDashboard);