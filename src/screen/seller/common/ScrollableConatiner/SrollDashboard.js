import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dimensions, TouchableOpacit } from 'react-native'

import CustomLabel from '../../../../component/common/CustomLabel'
import SellerGrid from '../../../../component/common/SellerGrid'
import OrderGrid from '../../../../component/Order/OrderGrid'


import OrderContainer from '../../../../component/Seller/Dashboard/OrderContainer'
import ProductsContainer from '../../../../component/Seller/Dashboard/ProductsContainer'
import FloatingButton from '../../../../component/Seller/Dashboard/Products/FloatingButton'


import Headers from "../../../../component/Seller/Header";
import {
    Container,
    View,
} from "native-base";
import { ScrollableTabView, DefaultTabBar, ScrollableTabBar, } from '@valdio/react-native-scrollable-tabview'
let { height } = Dimensions.get("window");

function mapStateToProps(state) {
    return {

    };
}

class SrollDashboard extends Component {

    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Container style={{ backgroundColor: "white" }}>
                <Headers headername="AppName" leftmenu={false} routes={this.props.navigation} locationSelect={true} activeSellerView={false} />
                <View
                    style={{
                        height: height - 150,
                        marginBottom: 10,
                        marginTop: 10
                    }}
                >

                    <ScrollableTabView

                        ref={(tabView) => { this.tabView = tabView; }}
                    >


                        <View tabLabel='Orders'>
                            <View style={{
                                height: height - 150,
                                marginBottom: 10,

                            }}>

                                <OrderContainer />


                            </View>

                        </View>



                        <View tabLabel='Products'>
                            <View style={{
                                height: height - 150,
                                marginBottom: 10,
                            }}>

                                <ProductsContainer />
                                <FloatingButton />
                            </View>

                        </View>



                        {/* <Text tabLabel='Tab #2'>favorite</Text>
                        <Text tabLabel='Tab #3'>project</Text> */}
                        {/* <TouchableOpacity tabLabel='Back' onPress={() => this.tabView.goToPage(0)}>
                            <Text>Lets go back!</Text>
                        </TouchableOpacity> */}
                    </ScrollableTabView>
                </View>

            </Container>

        );
    }
}

export default connect(
    mapStateToProps,
)(SrollDashboard);