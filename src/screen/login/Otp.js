import React, { Component } from 'react';
import { connect } from 'react-redux';

import { StyleSheet, Text, View, Keyboard, TouchableOpacity } from 'react-native';
import { Button } from 'native-base'

import { loadData } from '../../action/Seller/MainActions'

import { registerUser, clearError } from 'src/action/RegisterAction'

import {

    Input,
    Icon,
} from "native-base";

function mapStateToProps(state) {
    return {
        register: state.register,
        auth: state.auth,
        error: state.error

    };
}




class Otp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            otp: ''
        }

        this.props.clearError()


    }



    async handleSubmit() {

        const { otp } = this.state
        const { register } = this.props;
        const data = {
            otp: otp,
            otpReference: register.otpReference,

        }


        await this.props.registerUser(data).then(e => {
            const { auth } = this.props
            if (auth.isAuthenticated && auth.type === "customer") {
                this.props.navigation.navigate('CustomerProfile', { login: true })
            } else if (auth.isAuthenticated && auth.type === 'seller') {
                this.props.loadData()
                this.props.navigation.navigate('SellerProfile', { login: true })
            }
        }
        );

    }
    handleOtpChange(otp) {
        this.setState({ otp: otp })
        if (otp.length == 6) {
            Keyboard.dismiss()
        }
    }

    render() {
        const { register, error } = this.props
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
                            OTP is send to +91 {register.number}
                        </Text>
                    </View>

                    <View style={styles.middleContainer}>
                        <View>
                            {error.errors.map((value, key) => (
                                <Text style={{ color: 'red', textAlign: 'center' }} key={key}>
                                    {value}
                                </Text>
                            ))}
                        </View>
                        <View style={{ width: 150, alignItems: 'center', flexDirection: 'row', marginTop: 5, flexDirection: 'column' }}>

                            < View style={{ flexDirection: 'row' }}>

                                <Input placeholder="OTP" keyboardType={'numeric'} type="tel" value={this.state.otp}
                                    onChangeText={(text) => this.handleOtpChange(text)}

                                    style={styles.inputBox} />

                            </View>
                        </View>


                        <TouchableOpacity style={styles.bottomContainer} >

                            <Button success style={{ marginTop: 50, padding: 20 }} onPress={() => this.handleSubmit()} >
                                <Text style={{ color: '#fff', textTransform: 'uppercase', fontWeight: 'bold' }}> Next </Text>
                            </Button>
                        </TouchableOpacity>
                    </View >
                </View>
            </View>
        );
    }
}




export default connect(
    mapStateToProps, { loadData, registerUser, clearError }
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