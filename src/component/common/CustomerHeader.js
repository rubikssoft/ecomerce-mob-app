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
    View, Row
} from "native-base";
import { localize } from "src/internationalization";

import theme from '../../style/theme/default'
import LocationDropDown from '../../component/Location/LocationDropDown'
import CategoriesDropDown from '../../component/Category/CategoryDropDown'
import { TouchableOpacity } from "react-native";
import { connect } from 'react-redux';
import { StyleSheet } from 'react-native'

class Headers extends Component {
    constructor(props) {
        super(props);

        this.state = {
            locationChooser: false
            //Data Source for the SearchableDropdown
        };
    }
    render() {


        return (
            <View>
                <Header style={{ backgroundColor: theme.headerbg, padding: 5, height: 80, paddingBottom: 20 }}>

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
                                onPress={() => this.props.routes.navigate("Settings")}
                            >

                                <Icon name="md-cog" style={{ color: theme.headerIcon }} />
                            </Button>
                        }
                    </Right>

                </Header>

                {this.props.locationSelect &&
                    <View style={{ backgroundColor: theme.headerbg, padding: 5 }}>
                        <TouchableOpacity onPress={() => this.setState({ locationChooser: !this.state.locationChooser })}>
                            <Text style={{ textAlign: 'center', color: theme.headerTitle }}> {this.props.location.name}</Text>
                        </TouchableOpacity>
                        {this.state.locationChooser &&
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%', marginLeft: 'auto', marginRight: 'auto' }}>
                                <LocationDropDown onCountrySelect={() => this.props.setuplocation()}
                                    default={this.props.location.name}
                                    selected={this.props.location.id} />
                                <CategoriesDropDown onCountrySelect={() => this.props.setuplocation()}
                                    default={this.props.location.name}
                                    selected={this.props.location.id} />
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
        activeSeller: state.seller.activeSeller

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
    mapStateToProps,
)(Headers);