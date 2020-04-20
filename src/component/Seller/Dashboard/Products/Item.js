import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, TouchableOpacity, Image } from 'react-native'
import { View, Text, CheckBox } from 'native-base'

class Item extends Component {


    render() {
        const { item, edit, checked } = this.props;

        return (


            <TouchableOpacity

                style={styles.item}>

                <Text style={[styles.column]}> {item.name} </Text>
                <Text style={[styles.column]}> {item.category} </Text>
                <Text style={[styles.column]}> {item.price} </Text>
                {edit &&
                    <View style={[styles.column, styles.checkbox]}>
                        <CheckBox checked={checked} onPress={(val) => this.props._itemSelected(item.id)} />
                    </View>


                }
            </TouchableOpacity >

        );
    }
}

const styles = StyleSheet.create({

    item: {
        height: 40,
        borderBottomColor: '#000',
        borderBottomWidth: 0.5,
        padding: 4,
        flexDirection: 'row',
        paddingBottom: 5
    },
    column: {
        flex: 0.5, color: '#fff', fontWeight: 'bold', textAlign: 'center', padding: 5, textAlign: 'center', color: '#000', fontSize: 14
    },
    checkbox: {
        alignItems: 'center'
    }
})

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Item)
