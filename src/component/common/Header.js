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
  Title
} from "native-base";
import { localize } from "src/internationalization";

import theme from '../../style/theme/default'

export class Headers extends Component {
  render() {

    return (
      <Header style={{ backgroundColor: theme.headerbg, padding: 5 }}>
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
    );
  }
}
