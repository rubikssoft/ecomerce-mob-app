import React, { Component, useState } from 'react';
import { connect } from 'react-redux';

import { Dimensions, FlatList, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import { View, Item, Text } from "native-base";


import Headers from "../../../../component/common/CustomerHeader";
import Category from "../../../../component/common/Category";
import SkeletonContent from "react-native-skeleton-content";

let { height } = Dimensions.get("window");

import { loadCategories } from "src/action/CategoryAction";


import {
    Container,
    Content,
} from "native-base";




class Items extends Component {

    willFocus = this.props.navigation.addListener(
        'willFocus',
        payload => {
            this._fetchData();
        }
    );

    constructor(props) {
        super(props);
        this.state = {
            activeCart: this.props.activeCart,
            categories: [],
            loading: true
        }


    }

    static navigationOptions = {
        header: {
            visible: false
        }
    };


    async _fetchData() {

        const { seller } = this.props;

        const seller_id = seller.activeSeller.seller_id
        await this.props.loadCategories(seller_id).then(e => {
            this.setState({ categories: e, loading: false })
        })



    }




    render() {

        return (
            <Container style={{ backgroundColor: "white" }}>
                <Headers routes={this.props.navigation} headername="ItemsList" leftmenu={{ path: 'ScrollableDashboard', icon: 'md-arrow-dropleft' }} {...this.props} locationSelect={false} activeSellerView={true} />
                <View style={{ flexDirection: 'row', backgroundColor: '#013d6f', height: 40, color: '#fff', padding: 10 }}>
                    <Text style={[styles.titleColumn]}> Items </Text>
                    <Text style={[styles.titleColumn]}> Price </Text>
                    <Text style={[styles.titleColumn, { alignItems: 'center', marginLeft: 10, flex: 0.4, }]}> Qty </Text>
                    <Text style={[styles.titleColumn, { flex: 0.3 }]}> Select </Text>
                </View>
                <ScrollView style={{ flex: 0.8, height: height - 200 }}>




                    {this.state.categories.map((value, index) => (

                        <Category data={value} key={index} {...this.props} />
                    ))

                    }






                </ScrollView>
                <View style={{ position: 'absolute', left: 0, right: 0, bottom: 0, paddingBottom: 50, backgroundColor: '#7f1925', height: 70, justifyContent: 'space-between' }}>


                    <View style={{ height: 60, flexDirection: 'row', padding: 10, alignItems: 'center' }}>
                        <Text style={{ flex: 0.5, textAlign: 'center', color: '#fff', fontWeight: 'bold', }}>
                            {this.props.cart.activeCart.totalAmount} |({this.props.cart.activeCart.count})
                            Items</Text>
                        <TouchableOpacity style={{ flex: 0.5, backgroundColor: '#fff', borderRadius: 5, alignItems: 'center', padding: 10 }} onPress={() => this.props.navigation.navigate('Cart')} >
                            <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>Continue</Text>
                        </TouchableOpacity>

                    </View>


                </View>
            </Container>
        );
    }
}


function mapStateToProps(state) {
    return {

        cart: state.cart,
        seller: state.seller
    };
}


export default connect(
    mapStateToProps, { loadCategories }
)(Items);

const styles = StyleSheet.create({
    titleColumn: {
        flex: 0.4, color: '#fff', fontWeight: 'bold', textAlign: 'center'
    }
});