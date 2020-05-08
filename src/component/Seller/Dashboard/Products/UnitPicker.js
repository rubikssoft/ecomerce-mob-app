import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    View,
    Text,

} from 'native-base';
import { StyleSheet, TouchableOpacity, ScrollView } from 'react-native'

function mapStateToProps(state) {
    return {

    };
}
const styles = StyleSheet.create({
    subcatbox: {
        maxWidth: 70,
        height: 30,
        borderWidth: 0.5,
        borderColor: '#000',
        borderRadius: 5,
        padding: 5,
        margin: 5
    },
    label: {
        fontSize: 13
    },
    active: {
        backgroundColor: 'green'
    },
    TextActive: {
        color: "#fff"
    }
})

// const item = ['kg', 'gm', 'ltr', 'pckt']
const item = [
    { 'name': 'kg', 'default': true, 'value': 1 },
    { 'name': 'gm', 'default': false, 'value': 0.001 },

    { 'name': 'ltr', 'default': true, 'value': 1 },
    { 'name': 'pckt', 'default': true, 'value': 1 },

];
class UnitPicker extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selected: []
        }
    }


    componentDidMount() {

    }
    _addToSelected(item) {
        var { selected } = this.state;
        const index = selected.indexOf(item);
        if (index > -1) {
            selected.splice(index, 1);

        } else {
            selected.push(item)

        }
        this.setState({ selected: selected })
        this.props.availableUnits(selected)
    }

    CheckSelected(item) {
        // console.log(item)
        console.log(this.props.units)
        const { units } = this.props
        var status = false;
        units.length && units.map(element => {
            if (element.name == item.name) {
                status = true
            }

        });
        return status
    }
    render() {

        const { units } = this.props

        // console.log(units)

        return (
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ margin: 10, flex: 1 }}>

                <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                    {item.map((value, index) => (
                        <TouchableOpacity style={[styles.subcatbox, this.CheckSelected(value) && styles.active]} key={index} onPress={() => this._addToSelected(value)}>
                            <Text style={[styles.label, this.CheckSelected(value) && styles.TextActive]}> {value.name}</Text>
                        </TouchableOpacity>
                    ))}
                </View>


            </ScrollView>






        );
    }
}

export default connect(
    mapStateToProps,
)(UnitPicker);