import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View } from 'native-base'
import { TouchableOpacity } from 'react-native'

 class Cart extends Component {
    render() {
        const { cart, activeCart } = this.props
        return (

            <View>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('ItemList')}> BAck</TouchableOpacity>

            </View>
         
        )
    }
}

const mapStateToProps = (state) => ({

    cart: state.cart.cart,
    activeCart: state.cart.activeCart

})

export default connect(mapStateToProps)(Cart)
