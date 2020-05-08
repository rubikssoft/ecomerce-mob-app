import React, { Component } from 'react';
import { connect } from 'react-redux';

import Headers from "../../../../component/Seller/Header";
import { Ionicons } from '@expo/vector-icons';

import { loadCategories } from '../../../../action/Seller/Products'
import UnitPicker from './components/UnitPicker'
import {
    View,

    Container,
    Content,
    Label,
    Input,
    Item,
    Form,
    Card,
    Text,
    CardItem,
    Picker,
    Row


} from 'native-base'
import { TouchableOpacity, StyleSheet, Dimensions, ScrollView } from 'react-native'
let { height } = Dimensions.get("window");

const styles = StyleSheet.create({

    Heading: {
        fontSize: 19,
        fontWeight: 'bold',
        color: '#000'
    },



})

function mapStateToProps(state) {
    return {
        sellerAddProducts: state.sellerAddProducts
    };
}


class CustomProduct extends Component {

    constructor(props) {
        super(props);
        this.state = {
            category: '',
            units: [],
            defaultUnit: '',
            price: 0
        }
    }

    componentDidMount() {
        this.props.loadCategories()
    }

    onCategroyValueChange(item) {
        // console.log(item)
        return true;
    }

    render() {

        const { categories } = this.props.sellerAddProducts
        const { units } = this.state;
        return (
            <Container style={{ backgroundColor: "white" }}>
                <Headers leftmenu={{ path: 'AddProduct', icon: 'md-arrow-dropleft' }} routes={this.props.navigation} locationSelect={true} activeSellerView={false} {...this.props} />

                <Card>
                    <CardItem>
                        <Text style={styles.Heading}>Add Custom Product</Text>
                    </CardItem>
                </Card>

                <Content>
                    <Form>
                        <Item >
                            <Label floatingLabel style={{ flex: 0.9 }}>Product Name</Label>
                            <Input />
                        </Item>


                        <Item Picker >
                            <Label style={{ flex: 0.9 }}>Category</Label>
                            <Picker
                                mode="dropdown"
                                iosIcon={<Ionicons name="md-arrow-down" />}
                                style={{ width: undefined }}
                                placeholder="Select Categroy"
                                placeholderStyle={{ color: "#bfc6ea" }}
                                placeholderIconColor="#007aff"
                                selectedValue={this.state.category}
                                onValueChange={(item) => this.setState({ category: item })}
                            >
                                {categories.data.map((value, key) => (
                                    <Picker.Item label={value.name} value={value.id} key={key} />
                                ))}


                            </Picker>
                        </Item>

                        <Item style={{ flexDirection: 'row', marginTop: 15, alignItems: "center" }}>
                            <Label style={{ flex: 1 }} > Available Units</Label>
                            <UnitPicker availableUnits={(selected) => {
                                this.setState({ units: selected });
                            }} />
                        </Item>

                        <Item Picker >
                            <Label style={{ flex: 0.9 }}>Default Unit</Label>
                            <Picker
                                mode="dropdown"
                                iosIcon={<Ionicons name="md-arrow-down" />}
                                style={{ width: undefined }}
                                placeholder="Select Categroy"
                                placeholderStyle={{ color: "#bfc6ea" }}
                                placeholderIconColor="#007aff"
                                selectedValue={this.state.defaultUnit}
                                onValueChange={(item) => this.setState({ defaultUnit: item })}
                            >
                                {units.map((value, key) => (
                                    <Picker.Item label={value} value={value} key={key} />
                                ))}


                            </Picker>
                        </Item>

                        <Item >
                            <Label floatingLabel style={{ flex: 0.7 }}>Price</Label>
                            <Input style={{ flex: 0.2, textAlign: 'right' }} onChangeText={(text) => this.setState({ price: text })} />
                            <Text style={{ flex: 0.1 }}>INR</Text>
                        </Item>
                    </Form>
                </Content>


                <View style={{ position: 'absolute', left: 0, right: 0, bottom: 0, paddingBottom: 50, backgroundColor: '#7f1925', height: 70, justifyContent: 'space-between' }}>


                    <View style={{ height: 60, flexDirection: 'row', padding: 10, alignItems: 'flex-end' }}>

                        <TouchableOpacity style={{ flex: 0.5, backgroundColor: '#fff', borderRadius: 5, alignItems: 'center', padding: 10, marginLeft: 'auto' }}>
                            <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>ADD</Text>
                        </TouchableOpacity>

                    </View>
                </View>

            </Container >
        );

    }
}

export default connect(
    mapStateToProps, { loadCategories }
)(CustomProduct);