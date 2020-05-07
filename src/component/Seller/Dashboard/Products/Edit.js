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
    Button,
    Spinner



} from 'native-base'
import { Image } from 'react-native'

import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

import { TouchableOpacity, StyleSheet, Dimensions, ScrollView } from 'react-native'
let { height, width } = Dimensions.get("window");


import { loadCategories, addNewProduct, editProduct } from 'src/action/Seller/ProductAction'

const styles = StyleSheet.create({
    Heading: {
        fontSize: 19,
        fontWeight: 'bold',
        color: '#000'
    },
    label: { flex: 0.9, fontWeight: 'bold', textTransform: 'uppercase', fontSize: 12 }
})

function mapStateToProps(state) {
    return {
        auth: state.auth
    };
}




class Edit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            category: '',
            subcategory: '',
            units: [],
            defaultUnit: '',
            price: 0,
            image: null,
            imageFile: null,
            categories: [],
            subCategories: [],
            loading: false
        }
        this.loadDetails()

    }

    componentDidMount() {
        this.getPermissionAsync();
        this.loadDetails()

    }

    async loadDetails() {
        const { auth } = this.props

        await this.props.loadCategories({ token: auth.token }).then(categories => {
            this.setState({ categories: categories })
        })
        const { data } = this.props


        this.setState({
            category: data.category_id,
            subcategory: data.sub_category_id,
            name: data.name,
            image: data.img,
            units: JSON.parse(data.unit),
            price: data.price,
            subCategories: data.subcategories

        })
        JSON.parse(data.unit).map(e => {
            if (e.default) {
                this.setState({ defaultUnit: e.name })
            }
        })

    }

    async _submitForm(id) {
        var isValid = true;
        const data = this.state
        const auth = this.props.auth
        const product = this.props.data




        var post_data = new FormData();
        post_data.append('name', data.name)
        post_data.append('categoryid', data.category)
        post_data.append('subcategoryid', data.subcategory)
        post_data.append('price', parseFloat(data.price))
        post_data.append('unit', JSON.stringify(data.units))
        post_data.append('defaultUnit', data.defaultUnit)
        post_data.append('img', data.imageFile)
        post_data.append('sellerid', auth.user.id)
        post_data.append('product_id', product.id)


        this.setState({ loading: true })
        await this.props.editProduct(post_data).then(res => {
            if (res != null) {
                this.props.closeEditModal()
                this.setState({ loading: false })
            }
        })



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
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
            if (!result.cancelled) {
                this.setState({ image: result.uri });
                let localUri = result.uri;
                let filename = localUri.split('/').pop();
                let match = /\.(\w+)$/.exec(filename);
                let type = match ? `image/${match[1]}` : `image`;
                this.setState({ imageFile: { uri: localUri, name: filename, type } });

            }
        } catch (E) {
            console.log(E);
        }
    };

    handleCategoryChange(item, key) {

        const { categories } = this.state;

        this.setState({ category: item, subCategories: categories[key].subcategory })
    }


    handleSubCategoryChange(item) {

        this.setState({ subcategory: item })
    }


    render() {
        const { units, image, categories, subCategories, name, loading, price } = this.state;

        return (
            <View style={{ backgroundColor: "white", width: '100%' }}>


                <Form onSubmit={() => this._submitForm()}>


                    <Item style={{ paddingBottom: 10 }}>
                        <Label style={[styles.label, { flex: 1 }]}>Image</Label>
                        <TouchableOpacity title="Pick an image from camera roll" onPress={this._pickImage} >
                            {image && <Image source={{ uri: image }} style={{ width: 100, height: 100, marginLeft: 'auto' }} />}
                            {/* {!image && <Image source={require('../../../../../assets/Images/product-image-default.png')} style={{ width: 100, height: 100, marginLeft: 'auto' }} />} */}
                        </TouchableOpacity>

                    </Item>
                    <Item >
                        <Label floatingLabel style={styles.label} >Product Name</Label>
                        <Input
                            onChangeText={(text) => this.setState({ name: text })}
                            value={name}
                        />
                    </Item>

                    <Item Picker >
                        <Label style={styles.label} >Category</Label>
                        <Picker
                            mode="dropdown"
                            iosIcon={<Ionicons name="md-arrow-down" />}
                            style={{ width: undefined }}
                            placeholder="Select Categroy"
                            placeholderStyle={{ color: "#bfc6ea" }}
                            placeholderIconColor="#007aff"
                            selectedValue={this.state.category}
                            onValueChange={(item, key) => this.handleCategoryChange(item, key)}
                        >
                            {categories.map((value, key) => (
                                <Picker.Item label={value.name} value={value.id} key={key} />
                            ))}


                        </Picker>
                    </Item>

                    <Item Picker >
                        <Label style={styles.label} >Sub Category</Label>
                        <Picker
                            mode="dropdown"
                            iosIcon={<Ionicons name="md-arrow-down" />}
                            style={{ width: undefined }}
                            placeholder="Select Categroy"
                            placeholderStyle={{ color: "#bfc6ea" }}
                            placeholderIconColor="#007aff"
                            selectedValue={this.state.subcategory}
                            onValueChange={(item) => this.handleSubCategoryChange(item)}
                        >
                            {subCategories.map((value, key) => (
                                <Picker.Item label={value.name} value={value.id} key={key} />
                            ))}


                        </Picker>
                    </Item>

                    <Item style={{ flexDirection: 'row', marginTop: 15, alignItems: "center" }}>
                        <Label style={styles.label} > Available Units</Label>
                        <UnitPicker availableUnits={(selected) => {
                            this.setState({ units: selected });
                        }} units={units} />
                    </Item>

                    <Item Picker >
                        <Label style={styles.label} >Default Unit</Label>
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
                                <Picker.Item label={value.name} value={value.name} key={key} />
                            ))}


                        </Picker>
                    </Item>

                    <Item >
                        <Label floatingLabel style={styles.label}>Price</Label>
                        <Input style={{ flex: 0.2, textAlign: 'right' }} onChangeText={(text) => this.setState({ price: text })} value={price.toString()} keyboardType={'numeric'} />
                        <Text style={{ flex: 0.1 }}>INR</Text>
                    </Item>

                    <Button info style={{ alignItems: 'center', justifyContent: 'space-between' }} onPress={() => this._submitForm()} >
                        <Text style={{ flex: 0.6, marginLeft: 'auto' }}> EDIT PRODUCT </Text>
                        {loading && <Spinner />
                        }

                    </Button>
                </Form>



            </View >
        );

    }
}

export default connect(
    mapStateToProps, { loadCategories, addNewProduct, editProduct }
)(Edit);