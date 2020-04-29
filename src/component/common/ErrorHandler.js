import React, { Component } from 'react';
import { connect } from 'react-redux';
import RBSheet from "react-native-raw-bottom-sheet";

import { Text, Spinner, View } from 'native-base'


function mapStateToProps(state) {
    return {
        error: state.error
    };
}


class ErrorHandler extends Component {


    componentDidUpdate(prevProps) {

        const { error } = this.props;
        error.status ? this.RBSheet.open() : this.RBSheet.close()


    }

    render() {
        const { error } = this.props;
        return (
            <RBSheet
                ref={ref => {
                    this.RBSheet = ref;
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
                <View style={{ flexDirection: 'row' }}>

                    <Text>
                        {error.msg}
                    </Text>

                </View>

            </RBSheet>
        );
    }
}

export default connect(
    mapStateToProps,
)(ErrorHandler);