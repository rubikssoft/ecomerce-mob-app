import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dimensions } from 'react-native'
import RBSheet from "react-native-raw-bottom-sheet";

import OrderContainer from '../../../../component/Seller/Dashboard/OrderContainer'
import ProductsContainer from '../../../../component/Seller/Dashboard/ProductsContainer'
import FloatingButton from '../../../../component/Seller/Dashboard/Products/FloatingButton'


import Headers from "../../../../component/Seller/Header";
import {
    Container,
    View,
    Text, Content
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
    }

    componentDidUpdate(prevProps) {

        const { error } = this.props;
        if (error.error) {
            this.RBSheet.open()
        }


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
                                <FloatingButton {...this.props} />
                            </View>

                        </View>


                    </ScrollableTabView>
                    <RBSheet
                        ref={ref => {
                            this.RBSheet = ref;
                        }}
                        height={100}
                        duration={250}
                        customStyles={{
                            container: {
                                justifyContent: "center",
                                alignItems: "center"
                            }
                        }}
                    >

                        <Text>
                            {this.props.error.msg}
                        </Text>

                    </RBSheet>
                </Content>

            </Container>

        );
    }
}

export default connect(
    mapStateToProps,
)(SrollDashboard);