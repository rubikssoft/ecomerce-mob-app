import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {

    };
}

class Landing extends Component {
    render() {
        return (
            <View> <Text> Login </Text> </View>
        );
    }
}

export default connect(
    mapStateToProps,
)(Landing);