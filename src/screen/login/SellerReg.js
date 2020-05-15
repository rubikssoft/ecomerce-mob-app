import React, { Component } from 'react';
import { connect } from 'react-redux';

import { StyleSheet, Text, View, Image, ImageBackground, KeyboardAvoidingView, TouchableOpacity, Keyboard } from 'react-native';
import { Button } from 'native-base'
import LocationDropDown from 'src/component/Location/LocationDropDown'
import CategoryDropDown from 'src/component/Category/CategoryDropDown'

import RubiksInput from 'src/component/common/RubiksInput';

import { requestOtp } from 'src/action/RegisterAction'

import {

    Input,
    Icon,
} from "native-base";

function mapStateToProps(state) {
    return {
        userType: state.register.userType,
        loading: state.register.loading,
        location: state.location.location,
        category: state.category.category,
        register: state.register,
        error: state.error

    };
}




class SellerReg extends Component {
    constructor(props) {
        super(props)
        this.state = {
            number: '',
            userType: 'seller',
            shopeName: ''

        }
    }


    async subimitData() {

        const { number, userType } = this.state;

        const data = {
            location: this.props.location,
            category: this.props.category,

        }
        await this.props.requestOtp({ number, userType, data }).then(e => {
            const { register, error } = this.props;
            if (register.otpReference !== '' && !error.status)
                this.props.navigation.navigate('Otp')
        }
        );

    }

    handleShopNameInput(txt) {

    }
    hndleNumberChange(txt) {
        this.setState({ number: txt.replace(/\s/g, '') })
        txt.length == 10 && Keyboard.dismiss() && this.subimitData()

    }

    render() {
        const { error } = this.props
        return (

            <View style={{ flex: 1, backgroundColor: '#f0eee9' }}>
                <TouchableOpacity style={{ marginTop: 50, paddingLeft: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }} onPress={() => this.props.navigation.goBack()}>
                    <Icon name="md-arrow-dropleft" style={[styles.heading]} />
                    <Text style={[styles.heading]} > Back</Text>
                </TouchableOpacity>

                <View style={styles.container}>


                    <View style={styles.topContainer}>
                        <Text style={styles.heading}>
                            Verify your phone number
                                </Text>
                        <Text style={styles.h2}>
                            Shopease will send an sms message ( carrier charges may apply ) to verify your mobile number , Enter your contry code , phone number ,city/town,category and name of the shop
                  </Text>
                    </View>

                    <View style={styles.middleContainer}>
                        <View>
                            {error.errors && error.errors.map((value, key) => (
                                <Text style={{ color: 'red', textAlign: 'center' }} key={key}>
                                    {value}
                                </Text>
                            ))}
                        </View>
                        <View style={{ width: 250, alignItems: 'center', flexDirection: 'row', marginTop: 5, flexDirection: 'column' }}>

                            < View style={{ flexDirection: 'row' }}>
                                <Input placeholder="number" value=" + 91" style={[styles.inputBox, { maxWidth: 50 }]} disabled></Input>
                                <Input placeholder="number" keyboardType={'numeric'} value={this.state.number} onChangeText={(txt) => this.hndleNumberChange(txt)} style={styles.inputBox} />

                            </View>
                        </View>

                        {/* <KeyboardAvoidingView behavior="padding">
                            <View style={{ width: 250, alignItems: 'center', flexDirection: 'row', marginTop: 50, flexDirection: 'column' }}>
                                <View style={{ flexDirection: 'column' }}>
                                    <RubiksInput bgcolor='orange' onChangeText={(txt) => this.setState({ shopeName: txt })} value={this.state.shopeName} />
                                    <LocationDropDown
                                        default={this.props.location.name}
                                        selected={this.props.location.id}
                                        bgcolor="blue"
                                    />
                                    <CategoryDropDown
                                        default={this.props.location.name}
                                        selected={this.props.location.id}
                                        bgcolor="red" />

                                </View>



                            </View>
                        </KeyboardAvoidingView> */}




                    </View>


                    <View style={styles.bottomContainer}>

                        <Button success style={{ marginTop: 50, padding: 20 }} onPress={() => this.subimitData()} >
                            <Text style={{ color: '#fff', textTransform: 'uppercase', fontWeight: 'bold' }} > Next </Text>
                        </Button>
                    </View>
                </View >
            </View>
        );
    }
}




export default connect(
    mapStateToProps, { requestOtp }
)(SellerReg);


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
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        margin: 20,
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
        { borderBottomColor: '#12144a', borderBottomWidth: 0.5, height: 50, marginLeft: 3 }


});