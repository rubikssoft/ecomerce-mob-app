import React, { Component, useState } from 'react';
import { connect } from 'react-redux';

import { Dimensions, FlatList, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import { View, Item, Text } from "native-base";

import Tags from './Tags'
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
            loading: true,
            msg: '',
            error: false,
        }
        this._fetchData()

    }

    static navigationOptions = {
        header: {
            visible: false
        }
    };


    async _fetchData() {

        const { seller,tag } = this.props;
        this.setState({loading:true})
        const seller_id = seller.activeSeller.seller_id
        await this.props.loadCategories(seller_id, tag.activeTag).then(e => {
            this.setState({ categories: e, loading: false })
        })
    }
    static getDerivedStateFromProps(nextProps, prevState){
        console.log('here')
        if(nextProps.tag!==prevState.tag){
            console.log('tick')
          return { tag: nextProps.tag};
       }
       else return null;
     }
     
     componentDidUpdate(prevProps, prevState) {
       if(prevProps.tag!==this.props.tag){
           console.log('called here')
         //Perform some operation here
      this._fetchData();
       }
     }

    _navigateToCart() {
        const activeCart = this.props.cart.activeCart;
        if (activeCart.count) {
            this.setState({ error: false, msg: '' })
            this.props.navigation.navigate('Cart')
        } else {
            this.setState({ error: true, msg: 'Cart is empty' })
        }

        //this.props.navigation.navigate('Cart')
    }

    render() {
        const { error, msg, loading } = this.state
        return (
            <Container style={{ backgroundColor: "white" }}>
                <Headers routes={this.props.navigation} headername="ItemsList" leftmenu={{ path: 'ScrollableDashboard', icon: 'md-arrow-dropleft' }} {...this.props} locationSelect={false} activeSellerView={true} />
                
                
            
                <View style={{ flexDirection: 'row', backgroundColor: '#013d6f', height: 40, color: '#fff', padding: 10 }}>
                    <Text style={[styles.titleColumn]}> Items </Text>
                    <Text style={[styles.titleColumn]}> Price </Text>
                    <Text style={[styles.titleColumn, { alignItems: 'center', marginLeft: 10, flex: 0.4, }]}> Qty </Text>
                    <Text style={[styles.titleColumn, { flex: 0.3 }]}> Select </Text>
                </View>
                <Tags />
               
                <ScrollView style={{ flex: 0.8, height: height - 200 }}>

                    <SkeletonContent
                        containerStyle={{ flex: 1 }}
                        isLoading={loading}
                        layout={[
                            { key: "1", width: 600, height: 80, marginBottom: 6 },
                            { key: "2", width: 600, height: 80, marginBottom: 6 },
                            { key: "3", width: 600, height: 80, marginBottom: 6 },
                            { key: "4", width: 600, height: 80, marginBottom: 6 },
                            { key: "5", width: 600, height: 80, marginBottom: 6 },
                            { key: "6", width: 600, height: 80, marginBottom: 6 },
                            { key: "7", width: 600, height: 80, marginBottom: 6 },
                            { key: "8", width: 600, height: 80, marginBottom: 6 },
                            { key: "9", width: 600, height: 80, marginBottom: 6 },


                        ]}
                    >

                        {this.state.categories.map((value, index) => (

                            <Category data={value} key={index} {...this.props} />

                        ))
                        }

                        {!this.state.categories.length &&

                            <View style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginTop: 100
                            }}>
                                <Text> No Products Available </Text>
                            </View>

                        }


                    </SkeletonContent>






                </ScrollView>
                <View style={{ position: 'absolute', left: 0, right: 0, bottom: 0, paddingBottom: 50, backgroundColor: '#7f1925', height: 70, justifyContent: 'space-between' }}>


                    <View style={{ height: 60, flexDirection: 'row', padding: 10, alignItems: 'center' }}>
                        <View style={{ flexDirection: 'column', flex: 0.5 }}>
                            <Text style={{ textAlign: 'center', color: '#fff', fontWeight: 'bold', }}>
                                {this.props.cart.activeCart.totalAmount} |({this.props.cart.activeCart.count})
                            Items</Text>

                            {error && <Text style={{ color: 'white', textAlign: 'center' }}>{msg}</Text>}
                        </View>

                        <TouchableOpacity style={{ flex: 0.5, backgroundColor: '#fff', borderRadius: 5, alignItems: 'center', padding: 10 }} onPress={() => this._navigateToCart()} >
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
        seller: state.seller,
        tag:state.tag
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