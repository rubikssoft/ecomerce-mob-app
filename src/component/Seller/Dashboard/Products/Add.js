import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import UnitPicker from './UnitPicker'
import {
    View,
    Label,
    Input,
    Item,
    Form,

    Text,

    Picker,
    Button



} from 'native-base'
import { Image } from 'react-native'

import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

const categories = [
    {
        id: 1,
        name: 'Grocerry',

    },
    {
        id: 2,
        name: 'Vegitables'
    },

    {
        id: 3,
        name: 'Fruites'
    },

    {
        id: 4,
        name: 'Rice'
    }
]
import { TouchableOpacity, StyleSheet, Dimensions, ScrollView } from 'react-native'
let { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({

    Heading: {
        fontSize: 19,
        fontWeight: 'bold',
        color: '#000'
    },



})

function mapStateToProps(state) {
    return {

    };
}


class CustomProduct extends Component {

    constructor(props) {
        super(props);
        this.state = {
            category: '',
            units: [],
            defaultUnit: '',
            price: 0,
            image: null,
        }
    }

    componentDidMount() {
        this.getPermissionAsync();
    }

    getPermissionAsync = async () => {
        if (Constants.platform.ios) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
            }
        }
    };
    _pickImage = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
            if (!result.cancelled) {
                this.setState({ image: result.uri });
            }

            console.log(result);
        } catch (E) {
            console.log(E);
        }
    };

    render() {
        const { units, image } = this.state;
        return (
            <View style={{ backgroundColor: "white", width: '100%' }}>


                <Form>


                    <Item style={{ paddingBottom: 5 }}>
                        <Label style={{ flex: 0.9 }}>Image</Label>
                        <TouchableOpacity title="Pick an image from camera roll" onPress={this._pickImage} >
                            {image && <Image source={{ uri: image }} style={{ width: 100, height: 100, marginLeft: 'auto' }} />}
                        </TouchableOpacity>

                    </Item>
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
                            {categories.map((value, key) => (
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
                            placeholder="Select"
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



            </View >
        );

    }
}

export default connect(
    mapStateToProps,
)(CustomProduct);