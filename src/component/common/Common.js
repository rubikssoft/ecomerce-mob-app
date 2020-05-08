import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadDetails } from 'src/action/CommonAction'
import { View } from 'native-base';

function mapStateToProps(state) {
    return {

    };
}

function mapDispatchToProps(dispatch) {
    return {

    };
}

class Common extends Component {

    constructor(props) {
        super(props)
        this.props.loadDetails()
    }

    componentDidMount() {
        // console.log('here')
        this.props.loadDetails();
    }
    render() {
        return (
            <View></View>
        );
    }
}

export default connect(
    mapStateToProps, { loadDetails }
)(Common);