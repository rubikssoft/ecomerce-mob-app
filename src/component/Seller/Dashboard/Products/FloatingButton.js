import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TouchableOpacity, StyleSheet, Image } from 'react-native'
import { Text } from 'native-base';

export class FloatingButton extends Component {

    clickHandler = () => {
        // console.log('click handler called');

    };


    render() {
        return (


            <TouchableOpacity style={styles.TouchableOpacityStyle} activeOpacity={0.7} onPress={() => this.props.addProductToggle()}>
                <Image

                    source={{
                        uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/plus_icon.png',
                    }}
                    style={styles.FloatingButtonStyle}
                    onPress={this.clickHandler}
                />
                <Text style={styles.text}>ADD </Text>
            </TouchableOpacity>

        )
    }
}

const styles = StyleSheet.create({
    TouchableOpacityStyle: {
        position: 'absolute',
        width: 50,
        height: 75,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 220,
    },

    FloatingButtonStyle: {
        resizeMode: 'contain',
        width: 50,
        height: 50,
        //   backgroundColor: '#013d6f'
        //backgroundColor:'black'
    },
    text: {
        fontSize: 12,
        fontWeight: 'bold'
    }
})
const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(FloatingButton)
