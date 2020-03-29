import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {

    };
}

class Invoice extends Component {
    render() {
        return (
            <div>

                Invoice

            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(Invoice);