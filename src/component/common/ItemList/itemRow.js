import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Label, Text, Button, Input, CheckBox } from 'native-base'
import { StyleSheet, TouchableOpacity, TextInput } from 'react-native'

import { addToCart } from 'src/action/CartActions'
import { removeCart } from 'src/action/CartActions'
function mapStateToProps(state) {
    return {
        seller: state.seller,
        cart: state.cart
    };
}

class itemRow extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 1,
            type: 'kg',
            unitvalue: 1,
            selected: false,
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(unit, item) {
        this.setState({ type: unit.name, unitvalue: type.value });
        const activeSeller = this.props.seller.activeSeller;
        const { count, unitvalue, type } = this.state;
        this.props.addToCart(activeSeller, item, count, type, unitvalue);


    }
    optionChecked(item) {
        const activeSeller = this.props.seller.activeSeller;
        const { count, type, unitvalue } = this.state;

        const added = this.checkItemAtCart(item);
        if (!added) {
            this.props.addToCart(activeSeller, item, count, type, unitvalue);
        } else {
            this.props.removeCart(activeSeller, item, count, type, unitvalue);
        }


    }
    checkItemAtCart(item) {
        let status = false;
        const activeCart = this.props.cart.activeCart;
        activeCart.items.map(val => {
            if (val.id === item.id) {
                status = true;
            }
        })
        return status
    }

    handleCountChange(item, ncount) {

        const activeSeller = this.props.seller.activeSeller;
        const { count, type, unitvalue } = this.state;
        if (count !== ncount) {
            this.props.addToCart(activeSeller, item, ncount, type, unitvalue);
            this.setState({ count: ncount })
        }

    }


    unitSection = () => {
        const { item } = this.props;
        const unit = JSON.parse(item.unit)
        return (
            <View>
                {unit.map((type, key1) => (
                    <TouchableOpacity style={[styles.unitBox, type.name === this.state.type ? { backgroundColor: 'green' } : null]} onPress={() => this.handleChange(type, item)} key={key1}>
                        <Label style={styles.unitBoxLabel}>{type.name}</Label>
                    </TouchableOpacity>
                ))}
            </View>


        )

    }
    render() {
        const { item, key } = this.props;
        return (


            <View style={[styles.bodyRow]} key={key}>
                <Text style={[styles.bodyColumn, { textAlign: 'left' }]}> {item.name} </Text>
                <Text style={[styles.bodyColumn]}> {item.price}  </Text>
                <View style={[styles.bodyColumn, { flex: 0.4, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginRight: 0 }]}>
                    <TextInput
                        keyboardType={'numeric'}

                        onChangeText={(count) => this.handleCountChange(item, count)}
                        style={styles.qtyBox}
                        value={this.state.count}
                        style={styles.inputBox}
                    />
                    <View style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
                        {this.unitSection()}

                    </View>
                </View>
                <View style={[styles.bodyColumn, { flex: 0.3, alignItems: 'center' }]}>
                    <CheckBox checked={this.checkItemAtCart(item)} color="green" onPress={() => this.optionChecked(item)} />
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
        flex: 0.4, color: '#000', textAlign: 'center', fontWeight: 'bold', textTransform: 'uppercase', fontSize: 15
    },
    bodyRow: {
        flexDirection: 'row', height: 60, color: '#fff', alignItems: 'center', marginTop: 1,
        borderBottomWidth: 0.4, borderBottomColor: '#000', paddingBottom: 10, paddingTop: 10, width: '90%', marginRight: 'auto', marginLeft: 'auto'

    },
    qtyBox: {
        borderColor: '#000',
        borderWidth: 0.5,
        borderRadius: 8,
        textAlign: 'center',
        margin: 5,
        fontSize: 8,
        height: 35,
        maxWidth: 35, marginLeft: 'auto', marginRight: 'auto'
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
    },
    inputBox: {
        borderWidth: 1,
        borderColor: '#000',
        width: 75,
        borderRadius: 5,
        textAlign: 'center'
    }
});

export default connect(
    mapStateToProps, { addToCart, removeCart }
)(itemRow);