import React, { Component } from "react";
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
  Icon,
  Card,
  CardItem,
  Body,
  Right,
  Left,
  View,
  Toast,
} from "native-base";
import {
  ImageBackground
} from 'react-native'

import theme from 'src/style/theme/default'

import { TouchableWithoutFeedback, Modal } from "react-native";
import { cancelRequest, setCustomHeaders } from "src/apis";
import Spinner from "react-native-loading-spinner-overlay";

export default class Logins extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      modalVisible: false,
      checkToken: false
    };

  }

  // componentWillReceiveProps(newProps) {
  //   if (
  //     !this.props.token &&
  //     newProps.token &&
  //     this.props.token !== newProps.token
  //   ) {
  //     setCustomHeaders([
  //       {
  //         name: "Authorization",
  //         value: newProps.token
  //       }
  //     ]);
  //     // this.props.navigation.navigate("Home");
  //   } else if (newProps.message) {
  //     Toast.show({
  //       text: "Please input valid credentials!!!",
  //       textStyle: { textAlign: "center" },
  //       type: "danger",
  //       duration: 3000
  //     });
  //   }
  // }

  componentWillUnmount() {

  }


  render() {
    return (
      <Container>

        <ImageBackground source={require("../../../assets/login.png")} style={{
          height: '100%',
          width: '100%',
          flex: 1,
        }}>
          <Spinner visible={this.props.loading} />
          <Content>
            <Content padder>

              <View>

                <Text style={{ color: theme.headerbg }}>KKKK</Text>

                <Input
                  autoCapitalize="none"
                  text={this.state.email}
                  onChangeText={text => {
                    this.setState({
                      email: text
                    });
                  }}
                />

              </View>




              <Card>
                <CardItem bordered>
                  <Content contentContainerStyle={{ alignSelf: "center" }}>
                    <CardItem header bordered>
                      <Text>SIGN IN</Text>
                    </CardItem>
                  </Content>
                </CardItem>
                <Form>
                  <CardItem>
                    <Body>
                      <Item floatingLabel>
                        <Icon active name="md-call" />
                        <Label> Mobie Number</Label>
                        <Input
                          autoCapitalize="none"
                          text={this.state.email}
                          onChangeText={text => {
                            this.setState({
                              email: text
                            });
                          }}
                        />
                      </Item>
                    </Body>
                  </CardItem>
                  <CardItem>
                    <Content>
                      <Button
                        block
                        onPress={() => {
                          this.props.navigation.navigate("Home");
                          // this.props.loginUser({
                          //   email: this.state.email,
                          //   password: this.state.password
                          // });
                        }}
                      >
                        <Text>Sign In</Text>
                      </Button>
                    </Content>
                  </CardItem>
                </Form>
              </Card>
            </Content>
          </Content>
        </ImageBackground>
      </Container >
    );
  }
}
