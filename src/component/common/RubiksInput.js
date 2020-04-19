import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet } from 'react-native'

import { Text, Input, View } from 'native-base'

function mapStateToProps(state) {
    return {

    };
}

class RubiksInput extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={[styles.outerView]}>
                <Input placeholder="Shope Name" style={
                    {
                        backgroundColor: this.props.bgcolor,
                        textAlign: 'center',
                        color: '#fff',
                        fontWeight: 'bold',
                        maxWidth: 150,
                        borderRadius: 5
                    }
                }
                    onChangeText={(text) =>
                        this.props.onChangeText(text)
                    }
                    value={this.props.value}
                />
            </View>

        );
    }
}

export default connect(
    mapStateToProps,
)(RubiksInput);

const styles = StyleSheet.create({
    outerView: {
        height: 45,
        padding: 2,
        borderRadius: 10,
        maxWidth: 300,
        margin: 5

    }, textInputStyle: {
        borderRadius: 10,
    }

});
