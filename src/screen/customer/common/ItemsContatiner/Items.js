import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Dimensions, FlatList } from "react-native";
import { View, Item } from "native-base";


import Headers from "../../../../component/common/CustomerHeader";
import ItemList from "../../../../component/common/ItemList";

let { height } = Dimensions.get("window");


import {
    Container,
    Content,
} from "native-base";

function mapStateToProps(state) {
    return {

    };
}

class Items extends Component {
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
                <Headers routes={this.props.navigation} headername="ItemsList" leftmenu={{ path: 'ScrollableDashboard', icon: 'md-arrow-dropleft' }} {...this.props} />
                <View
                    style={{
                        height: height - 150,
                    }}
                >

                    <ItemList />

                </View>
            </Container>
        );
    }
}




export default connect(
    mapStateToProps,
)(Items);