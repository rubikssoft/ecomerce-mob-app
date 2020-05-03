import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Dimensions, FlatList } from "react-native";


import Headers from "../../../../component/common/CustomerHeader";

let { height } = Dimensions.get("window");


import {
    Container,
    Content,
    View,
    Thumbnail
} from "native-base";

function mapStateToProps(state) {
    return {

    };
}

class Order extends Component {
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
                <Headers routes={this.props.navigation} headername="Orders" leftmenu={true} {...this.props} />
                {/* <Headers routes={this.props.navigation} headername="Orders" /> */}
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
)(Order);