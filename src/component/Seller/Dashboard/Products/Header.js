import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    View,
    Text
} from 'native-base'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    titleColumn: {
        flex: 0.5, color: '#fff', fontWeight: 'bold', textAlign: 'center', padding: 5, textAlign: 'center'
    },
})

export class Header extends Component {
    render() {
        return (


            <View style={{ flexDirection: 'row', backgroundColor: '#013d6f', height: 50, color: '#fff', padding: 10 }}>
                <Text style={[styles.titleColumn]}> Items </Text>
                <Text style={[styles.titleColumn]}> Category </Text>
                <Text style={[styles.titleColumn,]}> Price </Text>


            </View>




        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
