import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Dimensions, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import theme from 'src/style/theme/default'
import Header from './Header'

import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

import { updateProfile } from 'src/action/CommonAction'
import { logout } from  'src/action/RegisterAction'



import {
    Container,
    View,
    Text,
    Thumbnail,
    Input,
    Form,
    Item,
    Label,
    Picker,
    Icon,
    Spinner,
    Toast

} from 'native-base'


let { width } = Dimensions.get("window");


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
    },input:{
        borderColor:theme.headerbg,
        borderBottomWidth:0.4,

    }

})


class Profile extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            selected2: undefined,
            name: '',
            address: '',
            city: '',
            pincode: '',
            location: '',
            category: '',
            phone_number: '',
            img: '',
            locations: [],
            imageFile: false,
            error: false,
            errors: [],
            firstTime: false

        }

    }

    componentDidMount() {
        this.loadData();
        this.getPermissionAsync();

    }

    loadData() {
        const { user, userDetails } = this.props.auth
        const { locations, categories } = this.props.common

        const firstTime = this.props.navigation.state.params != undefined && true
        this.setState({
            name: userDetails.name,
            address: userDetails.address,
            city: userDetails.city,
            phone_number: user.phone_number,

            location_id: user.location_id,

            pincode: userDetails.zip,
            locations: locations,
            categories: categories,
            img: userDetails.img,
            firstTime: firstTime
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
                base64: true,
                quality: 1,
            });
            if (!result.cancelled) {
                this.setState({ img: result.uri });
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

   async _logout(){
        await this.props.logout()
        this.props.navigation.navigate('Landing')
    }

    onlocationSelect(loaction_id) {
        this.setState({
            location_id: loaction_id
        });
    }


    async _submitForm() {

        const data = this.state

        var post_data = new FormData();
        post_data.append('name', data.name)
        post_data.append('address', data.address)
        post_data.append('city', data.city)
        post_data.append('zip', data.pincode)
        post_data.append('image', data.imageFile)
        post_data.append('location_id', data.location_id)




        this.setState({ loading: true })
        await this.props.updateProfile(post_data).then(res => {
            if (res != null) {

                if (res.status) {
                    Toast.show({
                        text: "Updated",
                        textStyle: { color: "green" },
                        duration: 3000
                    });
                    this.setState({ error: false })
                    this.loadData()
                    this.props.navigation.navigate('ScrollableDashboard')

                } else {
                    this.setState({ error: true, errors: res.error })
                    Toast.show({
                        text: res.error[0],
                        textStyle: { color: "red" },
                        duration: 3000
                    });

                }

            }
        })

    }



    render() {


        const { name, address, city, pincode, phone_number, location_id, locations, img,firstTime } = this.state


        return (

            <Container style={{ backgroundColor: "white" }}>
                <Header FirstTime={firstTime} {...this.props}/>
                <ScrollView>

                    <View style={styles.topContainer}>
                        <View style={{ flexDirection: 'row', marginTop: 20, height: 100, alignItems: 'center' }}>
                            <View style={{ flex: 0.3, alignItems: 'center' }}>

                                {img != '' && <TouchableOpacity onPress={() => this._pickImage()}>
                                    <Thumbnail large source={{ uri: img }} />
                                </TouchableOpacity>}
                                {img === '' && <Spinner />}
                            </View>
                            <View style={{ flex: 0.7, height: 100 }}>
                                <Label style={styles.settingsLabel}  > Name</Label>
                                <Input value={name} style={styles.inputBox} onChangeText={(e) => this.setState({ name: e })} />
        <Text style={{ fontWeight: 'bold', paddingTop: 10 }}>+91 {phone_number} </Text>


                            </View>

                        </View>



                    </View>
                    <View style={styles.middleContainer}>
                    <View style={{ alignItems: 'center' }}>
                            <Label style={styles.settingsSubLabel}> Contact Information is used for future orders</Label>
                        </View>

                        <View style={{ height: 35, backgroundColor: theme.headerbg, marginTop: 5 }}>
                            <Text style={[styles.h1, styles.white]}>Settings</Text>
                        </View>

                        <Form>
                            <Label style={styles.settingsLabel}>Location</Label>

                            <Item picker>
                                <Picker
                                    mode="dropdown"
                                    iosIcon={<Icon name="arrow-down" />}
                                    style={{ width: undefined }}
                                    placeholder="Select your SIM"
                                    placeholderStyle={{ color: "#bfc6ea" }}
                                    placeholderIconColor="#007aff"
                                    selectedValue={location_id}
                                    onValueChange={(e) => this.onlocationSelect(e)}
                                >

                                    {locations.map((value, index) => (
                                        <Picker.Item label={value.name} value={value.id} key={index} />
                                    ))}


                                </Picker>
                            </Item>
                         
                            <View style={{ alignItems: 'center' }}>
                                <Label style={styles.settingsSubLabel}> Location informations is used for finding new vendors nearby</Label>
                            </View>


                        </Form>
                        <View style={{ height: 35, backgroundColor: theme.headerbg, marginTop: 5 }}>
                            <Text style={[styles.h1, styles.white]}>Contact Information</Text>
                        </View>

                        <Form>
             
                            <Item fixedLabel style={styles.itemRow}>
                                <Label>Address</Label>
                                <Input value={address} onChangeText={(e) => this.setState({ address: e })} style={styles.input} />
                            </Item>
                            <Item fixedLabel style={styles.itemRow}>
                                <Label>City</Label>
                                <Input value={city} onChangeText={(e) => this.setState({ city: e })}  style={styles.input}  />
                            </Item>
                            <Item fixedLabel style={styles.itemRow}>
                                <Label >Pincode</Label>
                                <Input value={pincode} onChangeText={(e) => this.setState({ pincode: e })}  style={styles.input} />
                            </Item>
                        </Form>

                  
                        <View style={{ alignItems: 'center', marginTop: 150 }}>
                            <TouchableOpacity style={{ backgroundColor: 'green', borderRadius: 5, alignItems: 'center', padding: 10, width: '80%' }} onPress={() => this._submitForm()}>
                            {firstTime && <Text style={{ textAlign: 'center', fontWeight: 'bold', color: '#fff' }}>
                                

                                        Update and Continue
                                    
                                </Text>}
                                {!firstTime && <Text style={{ textAlign: 'center', fontWeight: 'bold', color: '#fff' }}>
                                

                                Update
                            
                        </Text>}
                            </TouchableOpacity>
                            <TouchableOpacity style={{ backgroundColor: 'grey', borderRadius: 5, alignItems: 'center', padding: 10, width: '80%', marginTop: 10 }}  onPress={()=>this._logout()}>
                                <Text style={{ textAlign: 'center', fontWeight: 'bold', color: '#fff' }}>Logout</Text>
                            </TouchableOpacity>
                        </View>


                    </View>




                </ScrollView>

            </Container >

        )
    }
}

const mapStateToProps = (state) => ({

    auth: state.auth,
    common: state.common,

})

const mapDispatchToProps = {
    updateProfile,logout
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
