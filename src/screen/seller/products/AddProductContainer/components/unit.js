import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    View,
    Text,

} from 'native-base';
import { StyleSheet } from 'react-native'

function mapStateToProps(state) {
    return {

    };
}
const styles = StyleSheet.create({
    unitbBx: {

        padding: 2,
        borderColor: 'red',
        borderWidth: 0.6,
        alignItems: 'center',
        borderRadius: 5,
        marginLeft: 5,
        justifyContent: 'space-between'
    },
    unitBoxText: {
        fontSize: 12,
        textAlign: "center",
        width: 30

    },
    active: {
        color: 'green'
    }

})
class unit extends Component {
    render() {
        const { item } = this.props
        return (
            <View style={styles.unitbBox}>

                <Text style={[styles.unitBoxText, item.default && styles.active]}>{item.name}</Text>

            </View>
        );
    }
}

export default connect(
    mapStateToProps,
)(unit);