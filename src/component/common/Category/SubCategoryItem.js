import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'native-base';
import { StyleSheet, TouchableOpacity } from 'react-native'

function mapStateToProps(state) {
    return {

    };
}
const styles = StyleSheet.create({
    subcatbox: {

        height: 30,
        borderWidth: 0.5,
        borderColor: '#000',
        borderRadius: 5,
        padding: 5,
        margin: 5
    },
    label: {
        fontSize: 13,
        color: '#fff'
    }
})
class SubCategoryItem extends Component {
    constructor(props) {
        super(props)
    }



    render() {
        const { data } = this.props;
        return (


            <TouchableOpacity style={[styles.subcatbox, this.props.activeCategory == data.id ? { backgroundColor: 'green' } : { backgroundColor: 'grey' }]} onPress={() => this.props.categorySelect(data.id)}>
                <Text style={styles.label}> {data.name}</Text>
            </TouchableOpacity>


        );
    }
}

export default connect(
    mapStateToProps,
)(SubCategoryItem);