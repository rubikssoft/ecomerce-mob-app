import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Input, Button, Label, Footer } from 'native-base'
import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import ItemRow from './itemRow';
function mapStateToProps(state) {
    return {

    };
}

const min = 1;
const max = 100;


const items = [
    {
        id:1,
        name: 'Rice 1',
        category: 'Raice',
        price: 50,
        unit: ['gm', 'kg'],

    },
    {
        id:2,
        name: 'Rice 2',
        category: 'Raice',
        price: 20,
        unit: ['gm', 'kg'],

    },
    {
        id:3,
        name: 'Rice 6',
        category: 'Raice',
        price: 20,
        unit: ['gm', 'kg'],

    },
    {
        id:4,
        name: 'Rice 3',
        category: 'Raice',
        price: 20,
        unit: ['gm', 'kg'],

    },
    {
        id:5,
        name: 'Rice 4',
        category: 'Raice',
        price: 20,
        unit: ['gm', 'kg'],

    }
]

class ItemList extends Component {
    constructor(props) {
        super(props)
        this.state = {


        }
    }
    render() {
        return (
            <View style={{ flex: 1 }}>

                <View style={{ flex: 1 }}>
                    <View style={{ flexDirection: 'row', backgroundColor: '#013d6f', height: 40, color: '#fff', padding: 10 }}>
                        <Text style={[styles.titleColumn]}> Items </Text>
                        <Text style={[styles.titleColumn]}> Price </Text>
                        <Text style={[styles.titleColumn, { alignItems: 'center', marginLeft: 10, flex: 0.4, }]}> Qty </Text>
                        <Text style={[styles.titleColumn, { flex: 0.3 }]}> Select </Text>
                    </View>
                    <ScrollView style={{ flex: 1 }}>
                    {items.map((value, key) => (
                        <ItemRow item={value} key={key}/>
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