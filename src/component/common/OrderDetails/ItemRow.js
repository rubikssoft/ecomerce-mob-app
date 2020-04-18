import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'native-base'
import { StyleSheet } from 'react-native'

function mapStateToProps(state) {
    return {

    };
}

class itemRow extends Component {
    constructor(props) {
        super(props)

    }




    render() {
        const { item, key } = this.props;
        return (
            <View style={[styles.bodyRow]} key={key}>
                <View style={[styles.bodyColumn, { textAlign: 'left' }]}>
                    <Text style={[styles.name]}>{item.name} </Text>
                    <Text style={[styles.details]}> 500 gr</Text>

                </View>


                <Text style={[styles.bodyColumn, { textAlign: 'right' }]}> {item.price}  </Text>

            </View>


        );
    }
}


const styles = StyleSheet.create({
    titleColumn: {
        flex: 0.4, color: '#fff', fontWeight: 'bold', textAlign: 'center'
    },

    bodyColumn: {
        flex: 0.5, color: '#000', textAlign: 'left', fontWeight: 'bold', fontSize: 12
    },
    bodyRow: {
        flexDirection: 'row', height: 45, color: '#fff', alignItems: 'center', marginTop: 1,
        borderBottomWidth: 0.4, borderBottomColor: '#000', width: '95%', marginRight: 'auto', marginLeft: 'auto'

    },
    name: {
        fontWeight: 'bold'
    },
    details: {
        fontSize: 10,

    }
});

export default connect(
    mapStateToProps
)(itemRow);