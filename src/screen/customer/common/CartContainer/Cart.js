import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    Container,
    View,
    Text,
    Card,
    CardItem,
    Body,
    CheckBox,
    ListItem,
    Icon,
    Label


} from 'native-base'
import { TouchableOpacity, ScrollView, Dimensions, Alert, StyleSheet } from 'react-native'

import Headers from "../../../../component/common/CustomerHeader";
import ItemList from '../../../../component/common/ItemList';
let { height } = Dimensions.get("window");
import theme from 'src/style/theme/default'

import { createOrder } from 'src/action/OrderAction'
class Cart extends Component {


    async _createOrder() {
        const { activeCart } = this.props.cart
        const { activeSeller } = this.props.seller

        const { userDetails } = this.props.auth
        // console.log(userDetails);
        if (userDetails.name == null) {
            return false
        }
        const order = {
            sellerid: activeSeller.seller_id,
            items: activeCart.items
        }

        await this.props.createOrder(order).then(order_id => {
            if (order_id != null) {
                Alert.alert(
                    'Order Created',
                    'Order id ' + order_id,
                    [
                        { text: 'See all orders', onPress: () => this.props.navigation.navigate('ScrollableDash') },
                    ],
                    { cancelable: false },
                );
            }
            // console.log(order_id);

        });


    }
    render() {

        const { userDetails, user } = this.props.auth

        return (


            <Container style={{ backgroundColor: "white" }}>
                <Headers routes={this.props.navigation} headername="Cart" leftmenu={{ path: 'ItemList', icon: 'md-arrow-dropleft' }} {...this.props} locationSelect={false} activeSellerView={true} />


                <ScrollView style={{ flex: 1, height: height - 150 }}>
                    <View style={{ flexDirection: 'row', backgroundColor: '#013d6f', height: 35, color: '#fff', padding: 10 }}>
                        <Text style={[styles.titleColumn, { textAlign: 'left' }]}> Products </Text>


                    </View>

                    <ItemList items={this.props.cart.activeCart.items} />

                    <Card style={{ marginTop: 50 }}>

                        <View style={{ flexDirection: 'row', backgroundColor: '#013d6f', height: 35, color: '#fff', padding: 10, justifyContent: 'space-between' }}>
                            <Text style={[styles.titleColumn, { textAlign: 'left' }]}> Order Address  </Text>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('CustomerProfile')} >
                                <Text style={[styles.titleChange, { color: '#cfcfcf' }]}> Change </Text>
                            </TouchableOpacity>

                        </View>


                        <CardItem>
                            {userDetails.name == null &&

                                <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} onPress={() => this.props.navigation.navigate('CustomerProfile')} >

                                    <Label style={styles.settingsSubLabel}>  Please update your address details first </Label>
                                    <Icon name="md-add-circle" style={{ textAlign: 'right', flex: 0.4 }} />
                                </TouchableOpacity>


                            }
                            {userDetails.name !== null &&
                                <View style={{ padding: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flex: 1 }}>



                                    <View>
                                        <Text>{userDetails.name}</Text>
                                        <Text>{userDetails.address}</Text>
                                        <Text>{userDetails.city}</Text>
                                        <Text>{userDetails.zip}</Text>
                                        <Text style={{ fontWeight: 'bold' }}>{user.phone_number}</Text>
                                    </View>




                                </View>

                            }
                        </CardItem>

                    </Card>

                    <Card style={{ marginTop: 50 }}>

                        <View style={{ flexDirection: 'row', backgroundColor: '#013d6f', height: 35, color: '#fff', padding: 10 }}>
                            <Text style={[styles.titleColumn, { textAlign: 'left' }]}> Payment Options </Text>
                        </View>


                        <CardItem>
                            <View style={{ flexDirection: 'row' }}>
                                <CheckBox checked={true} />
                                <Text style={{ paddingLeft: 10 }} > Store Pick - UP</Text>
                            </View>

                        </CardItem>

                    </Card>
                    <Card style={{ marginTop: 50 }}>
                        <View style={{ flexDirection: 'row', backgroundColor: '#013d6f', height: 35, color: '#fff', padding: 10 }}>
                            <Text style={[styles.titleColumn, { textAlign: 'left' }]}> Total  ({this.props.cart.activeCart.count}) Items</Text>
                            <Text style={[styles.titleColumn, { textAlign: 'right' }]}> {this.props.cart.activeCart.totalAmount} </Text>

                        </View>
                    </Card>

                    <View style={{ alignItems: 'center', marginTop: 50 }}>


                        <TouchableOpacity style={{ backgroundColor: 'green', borderRadius: 5, alignItems: 'center', padding: 10, width: '80%', marginTop: 10 }} onPress={() => this._createOrder()}>
                            <Text style={{ textAlign: 'center', fontWeight: 'bold', color: '#fff' }}>Confirm</Text>
                        </TouchableOpacity>
                    </View>







                </ScrollView>

                {/* <View style={{ position: 'absolute', left: 0, right: 0, bottom: 0, paddingBottom: 50, backgroundColor: '#7f1925', height: 70, justifyContent: 'space-between' }}>


                    <View style={{ height: 60, flexDirection: 'row', padding: 10, alignItems: 'center' }}>
                        <Text style={{ flex: 0.5, textAlign: 'center', color: '#fff', fontWeight: 'bold', }}>
                            {this.props.cart.activeCart.totalAmount} | ({this.props.cart.activeCart.count})
                            Items</Text>
                        <TouchableOpacity style={{ flex: 0.5, backgroundColor: 'green', borderRadius: 5, alignItems: 'center', padding: 10 }} onPress={() => this._createOrder()} >
                            <Text style={{ textAlign: 'center', fontWeight: 'bold', color: '#fff' }}>Confirm</Text>
                        </TouchableOpacity>

                    </View>


                </View> */}

            </Container>


        )
    }
}

const mapStateToProps = (state) => ({
    cart: state.cart,
    auth: state.auth,
    seller: state.seller

})

const styles = StyleSheet.create({
    normalText: {
        fontSize: 12,
        color: '#000'
    }, topContainer: {
        flex: 0.6
    },
    middleContainer: {
        flex: 3
    },
    bottomContainer: {
        flex: 1
    },
    inputBox: {
        borderBottomColor: '#000',
        borderBottomWidth: 0.4,
        width: '100%',
    }, h1: {
        fontWeight: 'bold',
        fontSize: 16,
        textTransform: 'uppercase',
        paddingLeft: 10,
        marginTop: 5
    }, itemRow: {
        marginTop: 10
    }, white: {
        color: '#fff'
    },
    settingsLabel: {
        fontSize: 15,
        paddingLeft: 10,
        fontWeight: '800'
    },
    settingsSubLabel: {

        fontWeight: '300',
        color: 'grey',
        textAlign: 'center',
        fontSize: 12,
        marginTop: 5,
        marginBottom: 5
    },
    titleColumn: {
        flex: 0.5, color: '#fff', fontWeight: 'bold', textAlign: 'center', fontSize: 12
    },
    titleChange: {
        color: '#fff', fontWeight: 'bold', textAlign: 'center', fontSize: 12
    }

})

export default connect(mapStateToProps, { createOrder })(Cart)
