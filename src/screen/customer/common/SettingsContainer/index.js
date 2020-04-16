import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Settings} from 'Settings';

function mapStateToProps(state) {
    return {

    };
}


class SettingsContainer extends Component {
    render() {
        return <Settings {...this.props} />;
    }
}

export default connect(
    mapStateToProps,
)(SettingsContainer);