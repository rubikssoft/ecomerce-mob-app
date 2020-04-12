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
    ListItem

} from 'native-base'
import { TouchableOpacity, ScrollView, Dimensions } from 'react-native'

import Headers from "../../../../component/common/CustomerHeader";
import ItemList from '../../../../component/common/ItemList';
let { height } = Dimensions.get("window");

class Cart extends Component {
    render() {

        return (

            <Container style={{ backgroundColor: "white" }}>
                <Headers routes={this.props.navigation} headername="Cart" leftmenu={{ path: 'ItemList', icon: 'md-arrow-dropleft' }} {...this.props} locationSelect={false} activeSellerView={true} />


                <ScrollView style={{ flex: 1, height: height - 150 }}>
                    <ItemList items={this.props.cart.activeCart.items} />

                    <Card>
                        <CardItem header style={{ flex: 1 }}>
                            <Text style={{ flex: 1 }}> Order Address </Text>
                        </CardItem>
                        <CardItem>

                            <View style={{ padding: 10, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', flex: 1 }}>
                                <View>
                                    <Text>Sadu</Text>
                                    <Text>Thiruvambady</Text>
                                    <Text style={{ fontWeight: 'bold' }}>9999999</Text>
                                </View>
                                <View>
                                    <Text>Change</Text>
                                </View>

                            </View>


                        </CardItem>

                    </Card>

                    <Card>
                        <CardItem header style={{ alignItems: 'center', flex: 1 }}>
                            <Text style={{ flex: 1 }}> Payment options </Text>
                        </CardItem>
                        <CardItem>

                            <View style={{ padding: 10, flex: 1 }}>
                                <ListItem>
                                    <CheckBox checked={true} />
                                    <Body>
                                        <Text> Store Pick - UP</Text>
                                    </Body>
                                </ListItem>

                            </View>


                        </CardItem>

                    </Card>







                </ScrollView>

                <View style={{ position: 'absolute', left: 0, right: 0, bottom: 0, paddingBottom: 50, backgroundColor: '#7f1925', height: 70, justifyContent: 'space-between' }}>


                    <View style={{ height: 60, flexDirection: 'row', padding: 10, alignItems: 'center' }}>
                        <Text style={{ flex: 0.5, textAlign: 'center', color: '#fff', fontWeight: 'bold', }}>
                            {this.props.cart.activeCart.totalAmount} | {this.props.cart.activeCart.count}
                            Items</Text>
                        <TouchableOpacity style={{ flex: 0.5, backgroundColor: 'green', borderRadius: 5, alignItems: 'center', padding: 10 }} onPress={() => this.props.navigation.navigate('Cart')} >
                            <Text style={{ textAlign: 'center', fontWeight: 'bold', color: '#fff' }}>Confirm</Text>
                        </TouchableOpacity>

                    </View>


                </View>

            </Container>


        )
    }
}

const mapStateToProps = (state) => ({
    cart: state.cart

})

export default connect(mapStateToProps)(Cart)
