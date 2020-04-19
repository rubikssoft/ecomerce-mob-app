import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { Text } from 'native-base'

class OrderStatusButton extends Component {


    render() {
        const { status } = this.props;
        return (

            <TouchableOpacity style={[
                styles.buttonStyle,
                status === 'pending' && styles.pending,
                status === 'ready' && styles.ready,
                status === 'cancelled' && styles.cancelled
            ]}>
                <Text style={styles.text}>  {status} </Text>

            </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
    buttonStyle: {
        maxWidth: 75,
        maxHeight: 20,
        borderColor: '#000',
        backgroundColor: '#000',
        borderRadius: 5,
        padding: 2,
        margin: 4,
        textAlign: 'center',
        alignItems: 'center'

    },
    pending: {
        backgroundColor: 'orange',
    },
    ready: {
        backgroundColor: 'green'
    },
    cancelled: {
        backgroundColor: 'red'
    },
    text: {
        color: '#fff',
        fontWeight: 'bold',
        textTransform: "uppercase",
        fontSize: 10
    }
})

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(OrderStatusButton)
