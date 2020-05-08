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

import { connect } from 'react-redux';
import { StyleSheet } from 'react-native'

class Headers extends Component {
    constructor(props) {
        super(props);

        this.state = {
            locationChooser: false,
            //Data Source for the SearchableDropdown
        };
    }
    render() {


        return (
            <View>
                <Header style={{ backgroundColor: theme.headerbg, padding: 5, height: 70, paddingBottom: 20 }} androidStatusBarColor={theme.headerbg}>

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
                        <Title style={{ color: theme.headerTitle }}>{this.props.seller.name} </Title>
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
                                onPress={() => this.props.routes.navigate("SellerProfile")}
                            >

                                <Icon name="md-cog" style={{ color: theme.headerIcon }} />
                            </Button>
                        }
                    </Right>

                </Header>


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
        seller: state.sellerData.seller

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