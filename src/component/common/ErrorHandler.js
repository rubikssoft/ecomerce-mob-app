import React, { Component } from 'react';
import { connect } from 'react-redux';
import ErrorRBSheet from "react-native-raw-bottom-sheet";

import { Text, Spinner, View } from 'native-base'


function mapStateToProps(state) {
    return {
        error: state.error
    };
}


class ErrorHandler extends Component {


    componentDidUpdate() {
        const { error } = this.props;
        if (error.status) {
            this.ErrorRBSheet.open()
        }
    }

    render() {
        const { error } = this.props;
        return (
            <ErrorRBSheet
                ref={ref => {
                    this.ErrorRBSheet = ref;
                }}
                height={100}
                closeOnDragDown={false}
                closeOnPressMask={true}
                customStyles={{
                    container: {
                        justifyContent: "center",
                        alignItems: "center"
                    }
                }}
            >
                <View style={{ flexDirection: 'column' }}>

                    <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>
                        {error.msg}
                    </Text>

                    {error.errors.map((value, key) => (
                        <Text style={{ color: 'red', textAlign: 'center' }} key={key}>
                            {value}
                        </Text>
                    ))}



                </View>

            </ErrorRBSheet>
        );
    }
}

export default connect(
    mapStateToProps,
)(ErrorHandler);