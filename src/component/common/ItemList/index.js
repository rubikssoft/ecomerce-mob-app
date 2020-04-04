import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Input, Button, Label, Footer } from 'native-base'
import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import ItemRow from './itemRow';
function mapStateToProps(state) {
    return {

    };
}

const items = [
    {
        name: 'Rice 1',
        category: 'Raice',
        price: 50,
        unit: ['gm', 'kg'],

    },
    {
        name: 'Rice 2',
        category: 'Raice',
        price: 20,
        unit: ['gm', 'kg'],

    },
    {
        name: 'Rice 6',
        category: 'Raice',
        price: 20,
        unit: ['gm', 'kg'],

    },
    {
        name: 'Rice 3',
        category: 'Raice',
        price: 20,
        unit: ['gm', 'kg'],

    },
    {
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
                        <ItemRow items={items} />
                    </ScrollView>
                    <View style={{ position: 'absolute', left: 0, right: 0, bottom: 0, paddingBottom: 50, backgroundColor: '#7f1925', height: 70, justifyContent: 'space-between' }}>
                        <View style={{ height: 60, flexDirection: 'row', padding: 10, alignItems: 'center' }}>
                            <Text style={{ flex: 0.5, textAlign: 'center', color: '#fff', fontWeight: 'bold', }}> $66 | 2 Items</Text>
                            <TouchableOpacity style={{ flex: 0.5, backgroundColor: '#fff', borderRadius: 5, alignItems: 'center', padding: 10 }} >
                                <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>Continue</Text>
                            </TouchableOpacity>

                        </View>


                    </View>
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