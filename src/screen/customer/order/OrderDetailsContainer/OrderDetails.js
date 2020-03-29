import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {

    };
}

class OrderDetails extends Component {
    render() {
        return (
            <div>
                OrderDetails
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(OrderDetails);