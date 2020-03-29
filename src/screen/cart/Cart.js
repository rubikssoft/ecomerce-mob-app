import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {

    };
}

class Cart extends Component {
    render() {
        return (
            <div>
                Cart
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(Cart);