import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Dimensions,
    TouchableOpacity
} from 'react-native'

import Headers from "../../../../component/common/CustomerHeader";

import { logout } from 'src/action/RegisterAction'

import {
    Container,
    Content,
    Button,
    Icon,
    Card,
    CardItem,
    Text,
    List,
    ListItem,
    View,
    Item,
    Form,
    Input,
    Body,
    Thumbnail
} from "native-base";
let { height } = Dimensions.get("window");
function mapStateToProps(state) {
    return {

    };
}

function mapDispatchToProps(dispatch) {
    return {

    };
}

class Settings extends Component {


    async logout() {
        await this.props.logout()
        this.props.navigation.navigate('Landing')
    }
    render() {


        return (


            <Container style={{ backgroundColor: "white" }}>
                <Headers routes={this.props.navigation} headername="Settings" leftmenu={{ path: 'ScrollableDashboard', icon: 'md-arrow-dropleft' }} {...this.props} locationSelect={false} activeSellerView={false} notification={false} settingsIcon={false} />
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
                                    <Text>Sadu</Text>
                                    <Text>676576745675674</Text>
                                </View>

                            </CardItem>
                        </Card>

                        <Card>
                            <CardItem header>
                                <View>
                                    <Text style={{ fontWeight: 'bold' }}>Address</Text>
                                </View>

                            </CardItem>
                            <CardItem>
                                <View style={{ flex: 1, padding: 0, margin: 0 }}>
                                    <Form style={{ flex: 1, padding: 0, margin: 0 }}>
                                        <Item>
                                            <Input placeholder="Address 1" />
                                        </Item>
                                        <Item >
                                            <Input placeholder="Address 2" />
                                        </Item>
                                        <Item >
                                            <Input placeholder="City" />
                                        </Item>
                                        <Item >
                                            <Input placeholder="State" />
                                        </Item>
                                        <Item last>
                                            <Input placeholder="Pincode" />
                                        </Item>
                                    </Form>
                                </View>

                            </CardItem>
                        </Card>
                    </Content>
                </View>

                <View style={{ position: 'absolute', left: 0, right: 0, bottom: 0, paddingBottom: 50, backgroundColor: '#7f1925', height: 70, justifyContent: 'space-between' }}>


                    <View style={{ height: 60, flexDirection: 'row', padding: 10, alignItems: 'center', justifyContent: 'space-between' }}>

                        <TouchableOpacity style={{ flex: 0.5, backgroundColor: 'green', borderRadius: 5, alignItems: 'center', padding: 10 }} onPress={() => this.props.navigation.navigate('Cart')} >
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
    mapStateToProps, { logout }
)(Settings);