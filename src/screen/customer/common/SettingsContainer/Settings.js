import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Dimensions,
    TouchableOpacity
} from 'react-native'

import Headers from "../../../../component/common/CustomerHeader";

import { logout, updateProfile } from 'src/action/RegisterAction'

import {
    Container,
    Content,
    Card,
    CardItem,
    Text,

    View,
    Item,
    Input,
    Label,
    Thumbnail
} from "native-base";
let { height } = Dimensions.get("window");
function mapStateToProps(state) {
    return {
        auth: state.auth,
        error: state.error
    };
}

function mapDispatchToProps(dispatch) {
    return {

    };
}

class Settings extends Component {


    constructor(props) {
        super(props)
        this.state = {
            name: '',
            address: '',
            city: '',
            phone_number: '',
            zip: ''

        }
    }

    async logout() {
        await this.props.logout()
        this.props.navigation.navigate('Landing')
    }

    async _updateProfile() {
        const state = this.state;

        await this.props.updateProfile(state)
    }

    componentDidMount() {
        const { user, userDetails } = this.props.auth
        this.setState({
            name: userDetails.name,
            address: userDetails.address,
            city: userDetails.city,
            zip: userDetails.zip,
            phone_number: user.phone_number,

        })

    }
    render() {

        const { name, address, city, zip, phone_number } = this.state
        const { error } = this.props
        return (


            <Container style={{ backgroundColor: "white" }}>
                <Headers routes={this.props.navigation} headername="Settings"  {...this.props} locationSelect={false} activeSellerView={false} notification={false} settingsIcon={false} />
                {/* <Headers routes={this.props.navigation} headername="Orders" /> */}
                <View
                    style={{
                        height: height - 150,
                        marginBottom: 10,
                        marginLeft: 10,
                        marginRight: 10,
                        marginTop: 10
                    }}
                >
                    <Content padder>

                        <Card>
                            <CardItem header>
                                <View>
                                    <Text style={{ fontWeight: 'bold' }}>Account</Text>
                                </View>

                            </CardItem>
                            <CardItem>
                                <View>
                                    <Text>{name}</Text>
                                    <Text>{phone_number}</Text>
                                </View>

                            </CardItem>
                        </Card>

                        <Card>

                            <View>
                                {error.status && error.errors.map((value, key) => (
                                    <Text style={{ color: 'red', textAlign: 'center' }} key={key}>
                                        {value}
                                    </Text>
                                ))}
                            </View>

                            <CardItem header>



                                <View>
                                    <Text style={{ fontWeight: 'bold' }}>Address</Text>
                                </View>

                            </CardItem>
                            <CardItem>
                                <View style={{ flex: 1, padding: 0, margin: 0 }}>

                                    <Item floatingLabel>
                                        <Label>Name</Label>
                                        <Input value={name} onChangeText={(e) => {

                                            this.setState({ name: e })
                                        }
                                        } />
                                    </Item>
                                    <Item floatingLabel>
                                        <Label>Address</Label>
                                        <Input value={address} onChangeText={(e) => this.setState({ address: e })} />
                                    </Item>
                                    <Item floatingLabel>
                                        <Label>City</Label>
                                        <Input value={city} onChangeText={(e) => this.setState({ city: e })} />
                                    </Item>
                                    <Item floatingLabel>
                                        <Label>Pincode</Label>
                                        <Input value={zip} onChangeText={(e) => this.setState({ zip: e })} />
                                    </Item>




                                </View>

                            </CardItem>
                        </Card>
                    </Content>
                </View>

                <View style={{ position: 'absolute', left: 0, right: 0, bottom: 0, paddingBottom: 50, backgroundColor: '#7f1925', height: 70, justifyContent: 'space-between' }}>


                    <View style={{ height: 60, flexDirection: 'row', padding: 10, alignItems: 'center', justifyContent: 'space-between' }}>

                        <TouchableOpacity style={{ flex: 0.5, backgroundColor: 'green', borderRadius: 5, alignItems: 'center', padding: 10 }} onPress={() => this._updateProfile()} >
                            <Text style={{ textAlign: 'center', fontWeight: 'bold', color: '#fff' }}>Update</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ flex: 0.5, borderRadius: 5, alignItems: 'center', backgroundColor: '#fff', padding: 10, marginLeft: 10 }} onPress={() => this.logout()} >
                            <Text style={{ textAlign: 'center', fontWeight: 'bold', color: '#000' }}>Logout</Text>
                        </TouchableOpacity>

                    </View>


                </View>

            </Container>
        );
    }
}

export default connect(
    mapStateToProps, { logout, updateProfile }
)(Settings);