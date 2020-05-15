import React, { Component } from 'react';
import { connect } from 'react-redux';

import { StyleSheet, Text, View, Image, Modal, TouchableWithoutFeedback } from 'react-native';
import {

    Button,
    Toast,
    Card,
    CardItem,
    Body,

} from "native-base";

import Spinner from "react-native-loading-spinner-overlay";
import Header from 'src/component/common/Login/Header'
import Logo from '../../../assets/icon.png';
import { loadData } from '../../action/Seller/MainActions'
function mapStateToProps(state) {
    return {
        auth: state.auth
    };
}



class Landing extends Component {

    willFocus = this.props.navigation.addListener(
        'willFocus',
        payload => {
            this._checkUser();
        }
    );

    constructor(props) {
        super(props)
        this.state = {
            userType: '',
            modalVisible: false
        }
    }
    _onCloseModal() {
        this.setState({
            modalVisible: false
        });
    }

    _checkUser() {
        const { auth } = this.props
        if (auth.isAuthenticated && auth.type === "customer") {
            this.props.navigation.navigate('ScrollableDash')
        } else if (auth.isAuthenticated && auth.type === 'seller') {
            this.props.loadData()
            this.props.navigation.navigate('SellerDashboard')
        }
    }
    componentDidMount() {
        this._checkUser()

    }


    _onContinue() {


        const { userType } = this.state;
        if (userType == '') {
            Toast.show({
                text: " Select an option ",
                textStyle: { color: "red" },
                duration: 3000
            });
            return true
        }
        var route = ''
        if (userType == 'seller')
            route = 'SellerReg'
        else if (userType == 'customer') {
            route = 'CustomerReg'
        }
        this.props.navigation.navigate(route)
    }

    forgetpwd() {
        return (
            <Modal
                style={{
                    alignItems: "center",
                    justifyContent: "center",
                    flex: 1
                }}
                visible={this.state.modalVisible}
                transparent={true}
                onRequestClose={() => this._onCloseModal()}
            >
                <TouchableWithoutFeedback
                    style={{ flex: 1 }}
                    onPress={() => {
                        this._onCloseModal();
                    }}
                >
                    <View style={{ flex: 1, backgroundColor: "#0007" }}>
                        <View

                            onStartShouldSetResponder={() => {
                                return true;
                            }}
                        >
                            <Card
                                style={{
                                    marginTop: 100,
                                    marginLeft: 20,
                                    marginRight: 20
                                }}
                            >
                                <CardItem header>
                                    <Body>
                                        <Text
                                            style={{
                                                fontWeight: "500",
                                                fontSize: 16,
                                                alignSelf: "center",
                                                paddingBottom: 10
                                            }}
                                        >
                                            Terms and Conditions
                        </Text>
                                        <Text style={{ fontSize: 14 }}>
                                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                        </Text>
                                    </Body>
                                </CardItem>

                            </Card>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        );
    }

    render() {
        const { userType } = this.state;
        return (

            <View style={styles.container}>
                <Header />
                <View style={styles.topContainer}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.shop}>SHOP</Text>
                        <Text style={styles.ease}>EASE</Text>
                    </View>
                    <Text style={styles.h2}>
                        A simple,secure and reliable way for businesses to connect with their customers
          </Text>
                </View>
                <View style={styles.middleContainer}>

                    <Image source={Logo} style={styles.image} />
                    <View style={styles.userButton}>

                        <Button primary={true} danger={userType == 'customer' ? true : false} style={styles.landingButton} onPress={() => this.setState({ userType: 'customer' })}>
                            <Text style={styles.landingButtonText}> Customer </Text>
                        </Button>
                        <Button primary={false} danger={userType == 'seller' ? true : false} style={styles.landingButton} onPress={() => this.setState({ userType: 'seller' })}>
                            <Text style={[styles.landingButtonText, { paddingLeft: 10 }]}> Seller </Text>
                        </Button>


                    </View>
                    <View style={{ width: 300, alignItems: 'center', flexDirection: 'row', marginTop: 3 }}>
                        <Text style={{ fontSize: 10, color: '#000', textAlign: 'center' }}> Tap "Agree and Continue" to accepet</Text>
                        <Text style={{ fontSize: 10, color: 'green', fontWeight: 'bold', textAlign: 'center' }} onPress={() => {
                            this.setState({
                                modalVisible: true
                            });
                        }}> Terms and Condition</Text>
                    </View>



                </View>

                <View style={styles.bottomContainer}>
                    <View style={{ justifyContent: 'flex-end' }}>
                        <Button success style={{ padding: 20, marginBottom: 40 }} onPress={() => this._onContinue()} >
                            <Text style={{ color: '#fff', textTransform: 'uppercase', fontWeight: 'bold' }} > Agree and Continue </Text>
                        </Button>
                    </View>

                    <Text>Joint Venture of </Text>
                    <Text style={{ color: 'blue', fontFamily: "Roboto", fontSize: 14 }}>Fashionssite & RubikSoft</Text>
                </View>


                <View>{this.forgetpwd()}</View>
            </View >

        );
    }
}




export default connect(
    mapStateToProps, { loadData }
)(Landing);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#f0eee9'
    },
    shop: {
        color: 'blue',
        fontSize: 30,
        fontFamily: "Purpose"
    },
    ease: {
        color: 'red',
        fontSize: 30,
        fontFamily: "Purpose"
    }, h2: {
        color: '#000',
        fontSize: 14,
        textAlign: 'center',
        marginTop: 5,
        fontFamily: "Roboto"
    }, image: {
        width: 200,
        height: 150,
        justifyContent: 'center',
    }, buttonContainer: {
        backgroundColor: '#008F68',
        borderRadius: 5,
        padding: 8,
        margin: 8,
    }, topContainer: {
        flex: 1,
        maxWidth: 250,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginTop: 20,

    },
    middleContainer: {
        flex: 3,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 50,
    },
    bottomContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        margin: 10,
        padding: 10,
        flex: 1
    },
    userButton: {
        marginTop: 40,
        borderRadius: 5,
        padding: 8,
        margin: 8,
    }, landingButton: {
        marginTop: 10, width: 155, alignItems: 'center', alignContent: 'center', borderRadius: 8, padding: 30
    }, landingButtonText: {
        textTransform: 'uppercase', textAlign: 'center', color: '#fff', fontWeight: 'bold'
    }

});

