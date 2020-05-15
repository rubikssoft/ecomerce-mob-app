import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StatusBar } from 'react-native'
import theme from 'src/style/theme/default'
function mapStateToProps(state) {
    return {

    };
}

function mapDispatchToProps(dispatch) {
    return {

    };
}

class ProfileHeader extends Component {
    render() {
        return (
            <StatusBar translucent backgroundColor='#fff' />

        );
    }
}

export default connect(
    mapStateToProps,
)(ProfileHeader);