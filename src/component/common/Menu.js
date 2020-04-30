import React, { Component } from "react";
import { TouchableWithoutFeedback, Dimensions } from "react-native";
import theme from 'src/style/theme/default'
import { connect } from "react-redux";
import { logout } from "src/action";
import {
    Container,
    Thumbnail,
    Content,
    List,
    ListItem,
    Separator,
    Button,
    Text,
    Left,
    Body,
    Icon,
    Right,
    View
} from "native-base";
let { height } = Dimensions.get("window");
class Menu extends Component {
    // componentWillReceiveProps(newProps) {
    //     if (!this.props.token && newProps.token) {
    //         this.props.navigation.navigate("Login");
    //     }
    // }

    render() {
        return (
            <Container style={{ backgroundColor: theme.menubg }}>
                <View
                    style={{
                        backgroundColor: theme.menuhederbg,
                        height: 150,
                        alignItems: "center"
                    }}
                >
                    <Thumbnail
                        style={{ marginTop: 75 }}
                        source={{
                            uri: "https://www.rubikssoft.com/assets/img/rubikssoft.jpeg"
                        }}
                    />
                    <Text style={{ marginTop: 5, color: "white" }}>
                        {this.props.name}
                    </Text>
                    <Text style={{ marginTop: 5, color: "white" }}>
                        {this.props.email}
                    </Text>
                </View>
                <View
                    style={{
                        height: height - 150
                    }}
                >
                    <Content>
                        <List
                            style={{
                                backgroundColor: "white"
                            }}
                        >
                            <ListItem icon onPress={() => this.props.navigation.navigate('Customer')}>
                                <Left>
                                    <Icon name="md-apps" />
                                </Left>
                                <Body>
                                    <Text>Customer</Text>
                                </Body>
                                <Right>
                                    <Icon name="arrow-forward" />
                                </Right>
                            </ListItem>
                            <ListItem icon onPress={() => this.props.navigation.navigate('Seller')}>
                                <Left>
                                    <Icon name="md-bus" />
                                </Left>
                                <Body>
                                    <Text>Seller</Text>
                                </Body>
                                <Right>
                                    <Icon name="arrow-forward" />
                                </Right>
                            </ListItem>
                            <Separator style={{ height: 10 }} />

                            <ListItem icon onPress={() => this.props.navigation.navigate('ScrollableDash')}>
                                <Left>
                                    <Icon name="md-bus" />
                                </Left>
                                <Body>
                                    <Text>New Dashboard</Text>
                                </Body>
                                <Right>
                                    <Icon name="arrow-forward" />
                                </Right>
                            </ListItem>

                            <Separator style={{ height: 10 }} />

                            {/* <ListItem icon>
                                <Left>
                                    <Icon name="info" />
                                </Left>
                                <Body>
                                    <TouchableWithoutFeedback
                                        onPress={() => {
                                            this.props.logout();
                                        }}
                                    >
                                        <Text
                                            style={{
                                                paddingLeft: 5,
                                                textDecorationLine: "underline"
                                            }}
                                        >
                                            Sign Out
                    </Text>
                                    </TouchableWithoutFeedback>
                                </Body>
                                <Right />
                            </ListItem>*/}
                        </List>
                    </Content>
                </View>
            </Container>
        );
    }
}

const mapStateToProps = ({ user }) => {
    const { email, name, token } = user;
    return { email, name, token };
};

export default connect(
    mapStateToProps,
    { logout }
)(Menu);
