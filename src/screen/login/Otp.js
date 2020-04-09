import React, { Component } from 'react';
import { connect } from 'react-redux';

import { StyleSheet, Text, View, Image, ImageBackground, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { Button } from 'native-base'
import LocationDropDown from 'src/component/Location/LocationDropDown'
import CategoryDropDown from 'src/component/Category/CategoryDropDown'

import RubiksInput from 'src/component/common/RubiksInput';

import {

    Input,
    Icon,
} from "native-base";

function mapStateToProps(state) {
    return {
        loading: state.register.loading,
        number: state.register.number

    };
}




class Otp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            otp: ''
        }
    }

    componentDidMount() {
        //console.log(this.props)

    }
    handleSubmit() {

        this.props.navigation.navigate('ScrollableDash')

    }

    render() {

        return (

            <View style={{ flex: 1, backgroundColor: '#f0eee9' }}>
                <TouchableOpacity style={{ marginTop: 50, paddingLeft: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }} onPress={() => this.props.navigation.goBack()}>
                    <Icon name="md-arrow-dropleft" style={[styles.heading]} />
                    <Text style={[styles.heading]} > Back</Text>
                </TouchableOpacity>

                <View style={styles.container}>
                    <View style={styles.topContainer}>
                        <Text style={styles.heading}>
                            Enter OTP
                                </Text>
                        <Text style={styles.h2}>
                            OTP is send to +91 {this.props.number}
                        </Text>
                    </View>

                    <View style={styles.middleContainer}>
                        <View style={{ width: 150, alignItems: 'center', flexDirection: 'row', marginTop: 5, flexDirection: 'column' }}>

                            < View style={{ flexDirection: 'row' }}>

                                <Input placeholder="OTP" keyboardType={'numeric'} type="tel" value={this.state.otp} onChangeText={text => this.setState({ otp: text.replace(/\s/g, '') })} style={styles.inputBox}> </Input>

                            </View>
                        </View>


                        <View style={styles.bottomContainer}>

                            <Button success style={{ marginTop: 50, padding: 20 }} >
                                <Text style={{ color: '#fff', textTransform: 'uppercase', fontWeight: 'bold' }} onPress={() => this.handleSubmit()}> Next </Text>
                            </Button>
                        </View>
                    </View >
                </View>
            </View>
        );
    }
}




export default connect(
    mapStateToProps,
)(Otp);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#f0eee9'
    },
    heading: {
        color: '#3281a8',
        fontSize: 15,
        fontFamily: "Purpose"
    },
    ease: {
        color: 'red',
        fontSize: 30,
        fontFamily: "Purpose"
    }, h2: {
        color: '#000',
        fontSize: 12,
        textAlign: 'center',
        marginTop: 5,
        fontFamily: "Roboto"
    }, image: {
        width: 250,
        height: 200,
        justifyContent: 'center',
    }, buttonContainer: {
        backgroundColor: '#008F68',
        borderRadius: 5,
        padding: 8,
        margin: 8,
    }, topContainer: {
        flex: 1,
        maxWidth: 285,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',

    },
    middleContainer: {
        flex: 3,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 10,
    },
    bottomContainer: {
        flex: 2,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        width: '90%',
        margin: 50,
        padding: 10,
    },
    userButton: {
        marginTop: 40,
        borderRadius: 5,
        padding: 8,
        margin: 8,
    }, landingButton: {
        flexDirection: 'row', marginTop: 10, width: 200, borderRadius: 8, padding: 10
    }, landingButtonText: {
        textTransform: 'uppercase', textAlign: 'center', color: '#fff', fontWeight: 'bold', flex: 0.8
    },
    inputBox:
        { textAlign: 'center', borderBottomColor: '#12144a', borderBottomWidth: 0.5, height: 50, marginLeft: 3 }


});