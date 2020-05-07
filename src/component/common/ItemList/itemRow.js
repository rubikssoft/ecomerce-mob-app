import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Label, Text, Button, Input, CheckBox, Thumbnail } from 'native-base'
import { StyleSheet, TouchableOpacity, TextInput, Picker } from 'react-native'
import { Dropdown } from 'react-native-material-dropdown';
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
        this.setState({ type: unit.name, unitvalue: unit.value });
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

    componentDidMount() {
        const { item } = this.props;
        const activeCart = this.props.cart.activeCart;
        activeCart.items.map(val => {
            if (val.id === item.id) {

                this.setState({ count: val.count, type: val.type })

            }
        })

    }

    handleCountChange(item, ncount) {
        const activeSeller = this.props.seller.activeSeller;
        const { count, type, unitvalue } = this.state;

        if (count !== ncount) {
            this.props.addToCart(activeSeller, item, ncount, type, unitvalue);
            this.setState({ count: ncount })
        }

    }

    async setUnitValue(itemValue, itemIndex) {
        const { item } = this.props;
        const activeSeller = this.props.seller.activeSeller;
        const unit = JSON.parse(item.unit)
        await this.setState({ type: itemValue, unitvalue: unit[itemIndex].value });

        const { count, unitvalue, type } = this.state;
        this.props.addToCart(activeSeller, item, count, type, unitvalue);
    }


    unitSection = () => {
        const { item } = this.props;
        const unit = JSON.parse(item.unit)
        return (
            <View style={{ flexDirection: 'row', marginLeft: 10 }}>
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
        const { type } = this.state
        const unit = JSON.parse(item.unit)
        // console.log(item)
        return (


            < View style={[styles.bodyRow]} key={key} >
                <View style={[styles.bodyColumn, { textAlign: 'left', flexDirection: 'row', alignItems: 'center' }]} >
                    <Thumbnail square source={{ uri: item.img }} />
                    <Text > {item.name} </Text>
                </View>

                <Text style={[styles.bodyColumn]}> {item.price}  </Text>
                <View style={[styles.bodyColumn, { flex: 0.4, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginRight: 0 }]}>
                    <TextInput
                        keyboardType={'numeric'}

                        onChangeText={(count) => this.handleCountChange(item, count)}
                        style={styles.qtyBox}
                        value={this.state.count}
                        style={styles.inputBox}
                        defaultValue="1"
                    />

                    <Picker
                        selectedValue={type}
                        style={{ height: 50, width: 120 }}
                        onValueChange={(itemValue, itemIndex) => this.setUnitValue(itemValue, itemIndex)}

                    >
                        {unit.map((type, key1) => (<Picker.Item label={type.name} value={type.name} key={key1} />))}
                    </Picker>


                    {/* <Dropdown

                        data={data}
                        style={{ width: 100, color: '#000', borderColor: '#000', borderWidth: 1 }}
                        value='kg'
                    /> */}
                    {/* <View style={{ flexDirection: 'row' }}>
                      {this.unitSection()}
                       

                    </View> */}
                </View>
                <View style={[styles.bodyColumn, { flex: 0.3, alignItems: 'flex-end', marginRight: 2 }]}>
                    <CheckBox checked={this.checkItemAtCart(item)} color="green" onPress={() => this.optionChecked(item)} />
                </View>

            </View >


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
        width: 40,
        borderRadius: 5,
        textAlign: 'center'
    }
});

export default connect(
    mapStateToProps, { addToCart, removeCart }
)(itemRow);