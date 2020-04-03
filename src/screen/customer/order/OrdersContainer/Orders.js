import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Dimensions, FlatList } from "react-native";

import Headers from "../../../../component/common/CustomerHeader";

let { height } = Dimensions.get("window");


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
    Thumbnail
} from "native-base";

function mapStateToProps(state) {
    return {

    };
}

class Orders extends Component {

    render() {
        return (
            <Container style={{ backgroundColor: "white" }}>
                <Headers routes={this.props.navigation} headername="Orders" leftmenu={true} {...this.props} />

                <View
                    style={{
                        height: height - 150,
                        marginBottom: 10,
                        marginLeft: 10,
                        marginRight: 10,
                        marginTop: 10
                    }}
                >
                    <Content padder>
                    </Content>
                </View>
            </Container>
        );
    }
}




export default connect(
    mapStateToProps,
)(Orders);