import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Dimensions, FlatList, TouchableOpacity, ScrollView } from "react-native";
import { View, Item, Text } from "native-base";


import Headers from "../../../../component/common/CustomerHeader";
import ItemList from "../../../../component/common/ItemList";
import Category from "../../../../component/common/Category";

let { height } = Dimensions.get("window");


import {
    Container,
    Content,
} from "native-base";

function mapStateToProps(state) {
    return {

    };
}


const categories = [
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
                <ScrollView style={{ flex: 1, height: height - 150}}>
                    {categories.map((value,index) => (
                        <Category data={value} key={index}/>
                    )

                    )}






                </ScrollView>
                <View style={{ position: 'absolute', left: 0, right: 0, bottom: 0, paddingBottom: 50, backgroundColor: '#7f1925', height: 70, justifyContent: 'space-between' }}>
                    <View style={{ height: 60, flexDirection: 'row', padding: 10, alignItems: 'center' }}>
                        <Text style={{ flex: 0.5, textAlign: 'center', color: '#fff', fontWeight: 'bold', }}> $66 | 2 Items</Text>
                        <TouchableOpacity style={{ flex: 0.5, backgroundColor: '#fff', borderRadius: 5, alignItems: 'center', padding: 10 }} >
                            <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>Continue</Text>
                        </TouchableOpacity>

                    </View>


                </View>
            </Container>
        );
    }
}




export default connect(
    mapStateToProps,
)(Items);