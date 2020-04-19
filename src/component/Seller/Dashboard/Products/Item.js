import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, TouchableOpacity, Image } from 'react-native'
import { View, Text } from 'native-base'

class Item extends Component {
    render() {
        const { item } = this.props;

        console.log(item);

        return (


            <TouchableOpacity
                // onPress={() => this.props.navigation.navigate('')  }
                style={styles.item}>
                {/* <Text>{item.name}</Text> */}
                <Text style={[styles.column]}> {item.name} </Text>
                <Text style={[styles.column]}> {item.category} </Text>
                <Text style={[styles.column]}> {item.price} </Text>

            </TouchableOpacity >

        );
    }
}

const styles = StyleSheet.create({

    item: {
        height: 35,
        borderBottomColor: '#000',
        borderBottomWidth: 0.5,
        padding: 4,
        flexDirection: 'row',
        paddingBottom: 5
    },
    column: {
        flex: 0.5, color: '#fff', fontWeight: 'bold', textAlign: 'center', padding: 5, textAlign: 'center', color: '#000'
    },
})

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Item)
