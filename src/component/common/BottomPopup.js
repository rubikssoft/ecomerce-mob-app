import React, { Component } from 'react';
import { connect } from 'react-redux';
import RBSheet from "react-native-raw-bottom-sheet";

import { Text, Spinner, View } from 'native-base'


function mapStateToProps(state) {
    return {
        popUp: state.bottomPopup
    };
}


class BottomPopup extends Component {


    componentDidUpdate(prevProps) {

        const { popUp } = this.props;
        popUp.status ? this.RBSheet.open() : this.RBSheet.close()


    }

    render() {
        const { popUp } = this.props;
        return (
            <RBSheet
                ref={ref => {
                    this.RBSheet = ref;
                }}
                height={100}
                // closeOnDragDown={true}
                closeOnPressMask={false}
                customStyles={{
                    container: {
                        justifyContent: "center",
                        alignItems: "center"
                    }
                }}
            >
                <View style={{ flexDirection: 'row' }}>
                    <Spinner color='green' style={{ width: 25, height: 25, marginRight: 10 }} />
                    <Text>
                        {popUp.data.msg}
                    </Text>

                </View>

            </RBSheet>
        );
    }
}

export default connect(
    mapStateToProps,
)(BottomPopup);