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
import { TouchableOpacity } from "react-native";
export class Headers extends Component {
    constructor() {
        super();

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
                        <Button
                            transparent
                            onPress={() => {
                                this.props.routes.openDrawer();
                            }}
                        >
                            <Icon name="ios-menu" style={{ color: theme.headerIcon }} />
                        </Button>
                    </Left>
                    <Body>
                        {/* <Title style={{ color: "white" }}>{this.props.headername} {localize(this.props.headername)}</Title> */}
                        <Title style={{ color: theme.headerTitle }}>{this.props.headername}</Title>
                    </Body>
                    <Right>
                        <Button
                            transparent
                            onPress={() => this.props.routes.navigate("Notify")}
                        >
                            <Badge style={{ position: "absolute" }}>
                                <Text>2</Text>
                            </Badge>
                            <Icon name="ios-notifications" style={{ color: theme.headerIcon }} />
                        </Button>
                    </Right>

                </Header>
                <View style={{ backgroundColor: theme.headerbg, padding: 5 }}>
                    <TouchableOpacity onPress={() => this.setState({ locationChooser: !this.state.locationChooser })}>
                        <Text style={{ textAlign: 'center', color: theme.headerTitle }}> Kozhikode</Text>
                    </TouchableOpacity>
                    {this.state.locationChooser && <LocationDropDown />}

                </View>
            </View>
        );
    }
}
