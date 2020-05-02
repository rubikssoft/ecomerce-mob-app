import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Input, Button, Label, Footer } from 'native-base'
import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import ItemRow from './itemRow';
function mapStateToProps(state) {
    return {

        cart: state.cart
    };
}

const min = 1;
const max = 100;




class ItemList extends Component {
    constructor(props) {
        super(props)
        this.state = {


        }
    }

    render() {
        const { items } = this.props
        return (
            <View style={{ flex: 1 }}>

                <View style={{ flex: 1 }}>

                    <ScrollView style={{ flex: 1 }}>
                        {items.map((value, key) => (
                            <ItemRow item={value} key={key} />
                        ))}
                    </ScrollView>

                </View>


            </View>


        );
    }
}


const styles = StyleSheet.create({
    titleColumn: {
        flex: 0.4, color: '#fff', fontWeight: 'bold', textAlign: 'center'
    },

    bodyColumn: {
        flex: 0.4, color: '#000', textAlign: 'center'
    },
    bodyRow: { flexDirection: 'row', height: 70, color: '#fff', alignItems: 'center', marginTop: 10 },
    qtyBox: {
        borderColor: '#000',
        borderWidth: 0.5,
        borderRadius: 8,
        textAlign: 'center',
        margin: 5,
        height: 35,
        width: 50
    },
    unitBox:
    {
        borderColor: '#000',
        borderWidth: 0.5,
        borderRadius: 4,
        textAlign: 'center',
        fontSize: 10,
        maxWidth: 50,
        margin: 2,
        padding: 5
    },
    unitBoxLabel: {
        fontSize: 10
    }
});

export default connect(
    mapStateToProps,
)(ItemList);