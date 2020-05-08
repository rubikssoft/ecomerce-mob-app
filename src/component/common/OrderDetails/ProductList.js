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

                    <View>
                        {order.order_products.map((value, key) => (
                            <ItemRow item={value} key={key} />
                        ))}

                    </View>





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