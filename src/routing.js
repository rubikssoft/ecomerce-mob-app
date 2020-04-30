import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Root } from "native-base";
import Expo from "expo";

import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { setBaseURL, setCustomHeaders } from "./apis";

import AppNavigator from "./navigation/AppNavigator";

class Routing extends PureComponent {
  constructor(props) {
    super(props);
    setBaseURL("http://localhost:5000/api");
    if (props.token) {
      setCustomHeaders([
        {
          name: "Authorization",
          value: props.token
        }
      ]);
    }
    this.state = {
      isReady: false
    };
  }

  async UNSAFE_componentWillMount() {
    await Font.loadAsync({
      'Purpose': require("../assets/Fonts/Purpose.ttf"),
      "Roboto": require("../assets/Fonts/roboto/Roboto-Regular.ttf"),
      Roboto_medium: require("../assets/Fonts/roboto/Roboto-Medium.ttf"),
      Ionicons: require("../node_modules/@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/Ionicons.ttf")
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading
        onFinish={() => this.setState({ isReady: true })}
        onError={console.warn}
      />;
    }
    // console.log("TOKEN", this.props.token);
    let Navigator = AppNavigator(this.props.token ? "Main" : "Authentication");
    return (
      <Root>
        <Navigator />
      </Root>
    );
  }
}

const mapStateToProps = ({ user }) => {
  const { token } = user;
  return { token };
};

export default connect(
  mapStateToProps,
  {}
)(Routing);
