import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Label, Text, Button, Input } from 'native-base'
import { StyleSheet, TouchableOpacity } from 'react-native'
function mapStateToProps(state) {
    return {

    };
}

class itemRow extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            type: 'kg'
        }
    }
    render() {
        return (

            this.props.items.map((value, key) => (
                <View style={[styles.bodyRow]} key={key}>
                    <Text style={[styles.bodyColumn]}> {value.name} </Text>
                    <Text style={[styles.bodyColumn]}> {value.price}  </Text>
                    <View style={[styles.bodyColumn, { flex: 0.4, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginRight: 0 }]}>
                        <Input
                            text={this.state.count}
                            onChangeText={text => {
                                this.setState({
                                    count: text
                                });
                            }}
                            style={styles.qtyBox}
                        />
                        <View style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
                            {value.unit.map(type => {

                                return (
                                    <TouchableOpacity style={[styles.unitBox, type === this.state.type ? { backgroundColor: 'green' } : null]} onPress={() => this.setState({ type: type })}>
                                        <Label style={styles.unitBoxLabel}>{type}</Label>
                                    </TouchableOpacity>





                                )
                            })}

                        </View>
                    </View>
                    <Text style={[styles.bodyColumn, { flex: 0.3 }]}>  </Text>
                </View>
            ))

        );
    }
}


const styles = StyleSheet.create({
    titleColumn: {
        flex: 0.4, color: '#fff', fontWeight: 'bold', textAlign: 'center'
    },

    bodyColumn: {
        flex: 0.4, color: '#000', textAlign: 'center', fontWeight: 'bold'
    },
    bodyRow: {
        flexDirection: 'row', height: 60, color: '#fff', alignItems: 'center', marginTop: 1,
        borderBottomWidth: 0.4, borderBottomColor: '#000', paddingBottom: 10, paddingTop: 10, width: '90%', marginRight: 'auto', marginLeft: 'auto'

    },
    qtyBox: {
        borderColor: '#000',
        borderWidth: 0.5,
        borderRadius: 8,
        textAlign: 'center',
        margin: 5,
        height: 35,
        maxWidth: 35, marginLeft: 'auto', marginRight: 'auto'
    },
    unitBox:
    {
        borderColor: '#000',
        borderWidth: 0.5,
        borderRadius: 4,
        textAlign: 'center',
        fontSize: 10,
        maxWidth: 50,
        margin: 2,
        padding: 5
    },
    unitBoxLabel: {
        fontSize: 10
    }
});

export default connect(
    mapStateToProps,
)(itemRow);