import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Dimensions, FlatList } from "react-native";

import { Headers } from "../../../../component/common/CustomerHeader";

let { height } = Dimensions.get("window");

import LocationDropDown from '../../../../component/Location/LocationDropDown'

import CustomLabel from '../../../../component/common/CustomLabel'
import SellerGrid from '../../../../component/common/SellerGrid'


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

function mapStateToProps(state) {
    return {

    };
}

class Dashboard extends Component {
    static navigationOptions = {
        header: {
            visible: false
        }
    };
    constructor(props) {
        super(props);
        //this.props.fetchCurrentUser();
    }


    render() {
        return (
            <Container style={{ backgroundColor: "white" }}>
                <Headers routes={this.props.navigation} headername="Dashboard" />
                <View
                    style={{
                        height: height - 150,
                        marginBottom: 10,
                        marginTop: 10
                    }}
                >
                    <Content padder>
                        <View>
                            <CustomLabel labelText="Shops" />
                            <SellerGrid {...this.props} />



                        </View>
                    </Content>
                </View>
            </Container>
        );
    }
}




export default connect(
    mapStateToProps,
)(Dashboard);