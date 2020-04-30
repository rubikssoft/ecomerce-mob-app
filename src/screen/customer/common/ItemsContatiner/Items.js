import React, { Component, useState } from 'react';
import { connect } from 'react-redux';

import { Dimensions, FlatList, TouchableOpacity, ScrollView } from "react-native";
import { View, Item, Text } from "native-base";


import Headers from "../../../../component/common/CustomerHeader";
import Category from "../../../../component/common/Category";
import SkeletonContent from "react-native-skeleton-content";

let { height } = Dimensions.get("window");

import { loadDetails } from "src/action/CategoryAction";


import {
    Container,
    Content,
} from "native-base";



const categories2 = [
    {
        name: 'Category 1',
        subCategories: [
            {
                name: 'sub1',
            },
            {
                name: 'sub2',
            }, {
                name: 'sub3',
            }, {
                name: 'sub4',
            }, {
                name: 'sub5',
            },
            {
                name: 'sub6',
            }
        ]
    },
    {
        name: 'Category 2',
        subCategories: [
            {
                name: 'sub1',
            },
            {
                name: 'sub2',
            }, {
                name: 'sub3',
            }, {
                name: 'sub4',
            }, {
                name: 'sub5',
            },
            {
                name: 'sub6',
            }
        ]
    },
    {
        name: 'Category 2',
        subCategories: [
            {
                name: 'sub1',
            },
            {
                name: 'sub2',
            }, {
                name: 'sub3',
            }, {
                name: 'sub4',
            }, {
                name: 'sub5',
            },
            {
                name: 'sub6',
            }
        ]
    },
    {
        name: 'Category 2',
        subCategories: [
            {
                name: 'sub1',
            },
            {
                name: 'sub2',
            }, {
                name: 'sub3',
            }, {
                name: 'sub4',
            }, {
                name: 'sub5',
            },
            {
                name: 'sub6',
            }
        ]
    },
    {
        name: 'Category 2',
        subCategories: [
            {
                name: 'sub1',
            },
            {
                name: 'sub2',
            }, {
                name: 'sub3',
            }, {
                name: 'sub4',
            }, {
                name: 'sub5',
            },
            {
                name: 'sub6',
            }
        ]
    },
    {
        name: 'Category 2',
        subCategories: [
            {
                name: 'sub1',
            },
            {
                name: 'sub2',
            }, {
                name: 'sub3',
            }, {
                name: 'sub4',
            }, {
                name: 'sub5',
            },
            {
                name: 'sub6',
            }
        ]
    }
]


class Items extends Component {



    constructor(props) {
        super(props);
        this.state = {
            activeCart: this.props.activeCart,
            categories: [],
            loading: true
        }
        //this.props.fetchCurrentUser();

    }

    static navigationOptions = {
        header: {
            visible: false
        }
    };


    componentDidMount() {



    }




    render() {

        // console.log(this.props.activeCart);

        const { categories, loading } = this.state


        return (
            <Container style={{ backgroundColor: "white" }}>
                <Headers routes={this.props.navigation} headername="ItemsList" leftmenu={{ path: 'ScrollableDashboard', icon: 'md-arrow-dropleft' }} {...this.props} locationSelect={false} activeSellerView={true} />
                <ScrollView style={{ flex: 1, height: height - 150 }}>


                    <SkeletonContent
                        containerStyle={{ flex: 1 }}
                        isLoading={loading}
                        layout={[
                            { key: "1", width: 600, height: 50, marginBottom: 6 },
                            { key: "2", width: 600, height: 50, marginBottom: 6 },
                            { key: "3", width: 600, height: 50, marginBottom: 6 },
                            { key: "4", width: 600, height: 50, marginBottom: 6 },
                            { key: "5", width: 600, height: 50, marginBottom: 6 },
                            { key: "6", width: 600, height: 50, marginBottom: 6 },
                            { key: "7", width: 600, height: 50, marginBottom: 6 },
                            { key: "8", width: 600, height: 50, marginBottom: 6 },
                            { key: "9", width: 600, height: 50, marginBottom: 6 },
                            { key: "10", width: 600, height: 50, marginBottom: 6 },
                            { key: "11", width: 600, height: 50, marginBottom: 6 },
                            { key: "12", width: 600, height: 50, marginBottom: 6 },



                        ]}
                    >

                        {categories.map((value, index) => (
                            <Category data={value} key={index} />
                        )

                        )}

                    </SkeletonContent>






                </ScrollView>
                <View style={{ position: 'absolute', left: 0, right: 0, bottom: 0, paddingBottom: 50, backgroundColor: '#7f1925', height: 70, justifyContent: 'space-between' }}>


                    <View style={{ height: 60, flexDirection: 'row', padding: 10, alignItems: 'center' }}>
                        <Text style={{ flex: 0.5, textAlign: 'center', color: '#fff', fontWeight: 'bold', }}>
                            {this.props.cart.activeCart.totalAmount} | {this.props.cart.activeCart.count}
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

        cart: state.cart
    };
}


export default connect(
    mapStateToProps,
)(Items);