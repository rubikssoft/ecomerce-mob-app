import React, { Component } from "react";
import {
    Header,
    Button,
    Icon,
    Text,
    Badge,
    Left,
    Body,
    Right,
    Title,
    Picker,
    View, Row
} from "native-base";
import { localize } from "src/internationalization";

import theme from '../../style/theme/default'
import LocationDropDown from '../../component/Location/LocationDropDown'
import CategoriesDropDown from '../../component/Category/CategoryDropDown'
import { TouchableOpacity } from "react-native";
import { connect } from 'react-redux';
import { StyleSheet } from 'react-native'


import { setuplocation } from 'src/action/LocationAction'
import { setupcategory } from 'src/action/CategoryAction'

class Headers extends Component {
    constructor(props) {
        super(props);

        this.state = {
            locationChooser: false
            //Data Source for the SearchableDropdown
        };
    }

    onlocationSelect(e, index) {
        const { locations } = this.props.common
        this.props.setuplocation(locations[index])


    }
    onCategorySelect(e, index) {
        const { categories } = this.props.common
        this.props.setupcategory(categories[index])
    }
    render() {

        const { locations, categories } = this.props.common
        const { location, category } = this.props
        return (
            <View>
                <Header style={{ backgroundColor: theme.headerbg, padding: 5, height: 80, paddingBottom: 20 }} androidStatusBarColor={theme.headerbg}>

                    <Left>
                        {this.props.leftmenu &&
                            <Button
                                transparent
                                onPress={() => {
                                    this.props.navigation.navigate(this.props.leftmenu.path);
                                }}
                            >
                                <Icon name={this.props.leftmenu.icon} style={{ color: theme.headerIcon }} />

                            </Button>
                        }


                    </Left>
                    <Body>
                        {/* <Title style={{ color: "white" }}>{this.props.headername} {localize(this.props.headername)}</Title> */}
                        <Title style={{ color: theme.headerTitle }}>{this.props.headername}</Title>
                    </Body>
                    <Right>
                        {this.props.notification &&
                            <Button
                                transparent
                                onPress={() => this.props.routes.navigate("Notify")}
                            >
                                <Badge style={{ position: "absolute" }}>
                                    <Text>2</Text>
                                </Badge>
                                <Icon name="ios-notifications" style={{ color: theme.headerIcon }} />
                            </Button>

                        }
                        {this.props.settingsIcon &&
                            <Button
                                transparent
                                onPress={() => this.props.routes.navigate("CustomerProfile")}
                            >

                                <Icon name="md-cog" style={{ color: theme.headerIcon }} />
                            </Button>
                        }
                    </Right>

                </Header>

                {this.props.locationSelect &&
                    <View style={{ backgroundColor: theme.headerbg, padding: 5 }}>
                        <TouchableOpacity onPress={() => this.setState({ locationChooser: !this.state.locationChooser })}>
                            <Text style={{ textAlign: 'center', color: theme.headerTitle, fontSize: 14 }}> {this.props.location.name} | {this.props.category.name}</Text>
                        </TouchableOpacity>
                        {this.state.locationChooser &&
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%', marginLeft: 'auto', marginRight: 'auto' }}>
                                <Picker
                                    mode="dropdown"
                                    iosIcon={<Icon name="arrow-down" />}
                                    style={{ width: '50%', color: '#fff' }}
                                    placeholder="Select your Location"
                                    placeholderStyle={{ color: "#bfc6ea" }}
                                    placeholderIconColor="#007aff"
                                    selectedValue={location.id}
                                    onValueChange={(e, index) => this.onlocationSelect(e, index)}
                                >

                                    {locations.map((value, index) => (
                                        <Picker.Item label={value.name} value={value.id} key={index} />
                                    ))}


                                </Picker>
                                <Picker
                                    mode="dropdown"
                                    iosIcon={<Icon name="arrow-down" />}
                                    style={{ width: '50%', color: '#fff' }}
                                    placeholder="Category"
                                    placeholderStyle={{ color: "#bfc6ea" }}
                                    placeholderIconColor="#007aff"
                                    selectedValue={category.id}
                                    onValueChange={(e, index) => this.onCategorySelect(e, index)}
                                >

                                    {categories.map((value, index) => (
                                        <Picker.Item label={value.name} value={value.id} key={index} />
                                    ))}


                                </Picker>



                            </View>


                        }

                    </View>
                }


                {this.props.activeSellerView &&
                    <View style={{ backgroundColor: theme.headerbg, padding: 5 }}>
                        <Text style={styles.sellerText}>  {this.props.activeSeller.name} | {this.props.activeSeller.phone} | {this.props.activeSeller.place}</Text>
                    </View>}
            </View>
        );
    }
}

Headers.defaultProps = {
    locationSelect: false,
    activeSellerView: false,
    notification: false,
    settingsIcon: true
};

function mapStateToProps(state) {
    return {
        location: state.location.location,
        category: state.category.category,
        activeSeller: state.seller.activeSeller,
        common: state.common

    };
}

const styles = StyleSheet.create({
    sellerText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 12,
        textAlign: "center"
    }
});
export default connect(
    mapStateToProps, { setuplocation, setupcategory }
)(Headers);