import React, { Component } from 'react';
import { connect } from 'react-redux';

import { StyleSheet, Text, View, Image, ImageBackground, KeyboardAvoidingView } from 'react-native';
import { Button } from 'native-base'
import LocationDropDown from 'src/component/Location/LocationDropDown'

import Spinner from "react-native-loading-spinner-overlay";

import Logo from '../../../assets/icon.png';

import {
    Container,
    Content,
    Form,
    Item,
    Input,
    Label,
    Icon,
    Body,
    Right,
    Left,
    Toast,
    Header
} from "native-base";

function mapStateToProps(state) {
    return {
        userType: state.register.userType,
        loading: state.register.loading,
        user: state.register.user,
        number: state.register.number,
        otp: state.register.otp,
        location: state.register.location

    };
}




class CustomerReg extends Component {
    constructor(props) {
        super(props)
        this.state = {
            location: {
                id: null,
                name: 'Location'
            },
            locationSelection: false

        }
        this.onCountrySelect = this.onCountrySelect.bind(this)
    }
    onCountrySelect(location) {
        this.setState({
            location: location
        })
    }

    render() {
        const { userType, location } = this.state;
        return (


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


                    <View style={{ width: 250, alignItems: 'center', flexDirection: 'row', marginTop: 5, flexDirection: 'column' }}>

                        < View style={{ flexDirection: 'row' }}>
                            <Input placeholder="number" value=" + 91" style={[styles.inputBox, { maxWidth: 50 }]} disabled></Input>
                            <Input placeholder="number" keyboardType={'numeric'} type="tel" value={this.state.number} onChangeText={text => this.setState({ number: text.replace(/\s/g, '') })} style={styles.inputBox}> </Input>

                        </View>



                    </View>

                    <KeyboardAvoidingView behavior="padding">
                        <View style={{ width: 250, alignItems: 'center', flexDirection: 'row', marginTop: 50, flexDirection: 'column' }}>

                            <View >
                                <Button primary={true} style={styles.landingButton} onPress={() => this.setState({ userType: 'customer' })}>

                                    <Text style={styles.landingButtonText}> {location.name} </Text>
                                    <Right>
                                        {locationSelection && <Icon name="md-arrow-down" style={[styles.landingButtonText, { fontSize: 18 }]} />}

                                    </Right>


                                </Button>

                                <LocationDropDown onCountrySelect={this.onCountrySelect} default={location.name} selected={location.id} />
                            </View>



                        </View>
                    </KeyboardAvoidingView>




                </View>


                <View style={styles.bottomContainer}>

                    <Button success style={{ marginTop: 50, padding: 20 }} >
                        <Text style={{ color: '#fff', textTransform: 'uppercase', fontWeight: 'bold' }} > Next </Text>
                    </Button>
                </View>
            </View >
        );
    }
}




export default connect(
    mapStateToProps,
)(CustomerReg);


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
        marginTop: 35,

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
        marginTop: 10, width: 200, alignItems: 'center', alignContent: 'center', borderRadius: 8, padding: 50
    }, landingButtonText: {
        textTransform: 'uppercase', textAlign: 'center', color: '#fff', fontWeight: 'bold'
    },
    inputBox:
        { borderBottomColor: '#12144a', borderBottomWidth: 0.5, height: 50, marginLeft: 3 }


});