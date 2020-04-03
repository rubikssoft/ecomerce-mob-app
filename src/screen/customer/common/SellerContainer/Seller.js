import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Dimensions, FlatList } from "react-native";

import Headers from "../../../../component/common/CustomerHeader";

let { height } = Dimensions.get("window");

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
import SellerItem from '../../../../component/common/SellerItem';

function mapStateToProps(state) {
    return {

    };
}
const item = {
    name: 'Test Shop',
    place: 'Mukkam ',
    category: 'Grocery , Test Cate1 ',
    phone: '98765433455',
    img: 'http://www.shpanda.com/uploads/allimg/130723/1-130H3214S30-L.jpg'
}

class Seller extends Component {
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
                <Headers routes={this.props.navigation} headername="Seller" leftmenu={true} {...this.props} />
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
                        <View>

                            <SellerItem item={item} {...this.props} />



                        </View>
                    </Content>
                </View>
            </Container>
        );
    }
}




export default connect(
    mapStateToProps,
)(Seller);