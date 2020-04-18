import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'native-base'
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


        }
    }

    render() {
        const { order } = this.props
        return (
            <View style={{ flex: 1 }}>

                <View style={{ flex: 1 }}>
                    <View style={{ flexDirection: 'row', backgroundColor: '#013d6f', height: 35, color: '#fff', padding: 10 }}>
                        <Text style={[styles.titleColumn, { textAlign: 'left' }]}> Items </Text>
                        <Text style={[styles.titleColumn, { textAlign: 'right' }]}> Price </Text>

                    </View>
                    <View>
                        {order.items.map((value, key) => (
                            <ItemRow item={value} key={key} />
                        ))}

                    </View>

                    <View style={{ flexDirection: 'row', backgroundColor: '#013d6f', height: 35, color: '#fff', padding: 10, marginTop: 30 }}>
                        <Text style={[styles.titleColumn, { textAlign: 'left' }]}> Total (4)  </Text>
                        <Text style={[styles.titleColumn, { textAlign: 'right' }]}> 33333 </Text>

                    </View>
                    {order.payment === 'cod' &&
                        <View style={{ flexDirection: 'row', backgroundColor: '#013d6f', height: 35, color: '#fff', padding: 10, marginTop: 20 }}>
                            <Text style={[styles.titleColumn, { textAlign: 'left' }]}> Payment Options </Text>
                            <Text style={[styles.titleColumn, { textAlign: 'right' }]}> Cash on delivery (COD) </Text>

                        </View>
                    }


                </View>


            </View>


        );
    }
}


const styles = StyleSheet.create({
    titleColumn: {
        flex: 0.5, color: '#fff', fontWeight: 'bold', textAlign: 'center', fontSize: 12
    },

});

export default connect(
    mapStateToProps,
)(ProductList);