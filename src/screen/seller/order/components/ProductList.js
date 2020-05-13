import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Thumbnail, Input, Picker, Item } from 'native-base'
import { StyleSheet, ScrollView } from 'react-native';
import ItemRow from './ItemRow';
function mapStateToProps(state) {
    return {

    };
}





class ProductList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            edit: false

        }
    }

    setUnitValue(itemValue, itemIndex, key) {
        // console.log(itemValue)
        // console.log(itemIndex)
        // console.log(key)
    }

    render() {
        const { OrderProducts } = this.props
        // console.log('reached here');
        // console.log(OrderProducts);
        return (
            <View style={{ flex: 1 }}>
                {OrderProducts && OrderProducts.map((value, key) => (

                    <View style={{ flexDirection: 'row', flex: 1, height: 100, alignItems: 'center' }}>
                        <View style={{ flex: 0.2 }}>
                            <Thumbnail square large source={{ uri: value.img }} />
                        </View>
                        <View style={{ flex: 0.8, padding: 5, flexDirection: "row" }}>
                            <View style={{ flex: 0.7 }}>

                                <Text style={styles.name}>{value.name}</Text>
                                <Text>{value.count} {value.type}</Text>


                                {/* <Picker
                                    selectedValue={value.type}
                                    style={{ height: 50, width: 120 }}
                                    onValueChange={(itemValue, itemIndex) => this.setUnitValue(itemValue, itemIndex, key)}

                                >
                                    {JSON.parse(value.unit).length !== 0 && JSON.parse(value.unit).map((type, key1) => (<Picker.Item label={type.name} value={type.name} key={key1} />))}
                                </Picker> */}
                            </View>
                            <View style={{ flex: 0.3, alignItems: 'center', borderLeftColor: '#000', borderLeftWidth: 0.5 }}>

                                <Input value={value.price.toString()} style={{ borderBottomColor: '#000', borderBottomWidth: 1 }} keyboardType={'numeric'} />
                            </View>

                        </View>
                    </View>







                ))

                }


            </View>


        );
    }
}


const styles = StyleSheet.create({
    titleColumn: {
        flex: 0.5, color: '#fff', fontWeight: 'bold', textAlign: 'center', fontSize: 12
    },
    name: {
        fontWeight: 'bold',
        color: '#000',

    }

});

export default connect(
    mapStateToProps,
)(ProductList);