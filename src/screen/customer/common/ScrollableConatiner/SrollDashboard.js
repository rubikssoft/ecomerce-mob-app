import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dimensions, TouchableOpacit } from 'react-native'

import CustomLabel from '../../../../component/common/CustomLabel'
import SellerGrid from '../../../../component/common/SellerGrid'

import Headers from "../../../../component/common/CustomerHeader";
import {
    Container,
    Content,
    Button,
    Icon,
    Card,
    CardItem,
    Text,
    Body,
    Left,
    Right,
    List,
    ListItem,
    View,
    Thumbnail,
    Separator
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
                <Headers headername="AppName" leftmenu={false} routes={this.props.navigation} />
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


                        <View tabLabel='Shopes'>
                            <View style={{
                                height: height - 150,
                                marginBottom: 10,
                                marginTop: 10
                            }}>
                                <CustomLabel labelText="Shops" />
                                <SellerGrid {...this.props} />
                            </View>

                        </View>



                        <View tabLabel='Orders'>
                            <View style={{
                                height: height - 150,
                                marginBottom: 10,
                                marginTop: 10
                            }}>
                                <Text> NoOrders</Text>
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