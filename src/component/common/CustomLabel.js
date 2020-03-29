import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    View, Text
} from 'react-native'

function mapStateToProps(state) {
    return {

    };
}

class CustomLabel extends Component {
    render() {
        return (
            <View style={{ margin: 10, padding: 3 }}>
                <Text> {this.props.labelText}</Text>
            </View>
        );
    }
}

export default connect(
    mapStateToProps,
)(CustomLabel);