import React, { PureComponent } from "react";
import { ImageBackground } from 'react-native';
import { connect } from "react-redux";
import Logins from "./Login";
import { loginUser } from "src/action";
import theme from 'src/style/theme/default'
class LoginContainer extends PureComponent {

  render() {
    // console.log(theme);

    return (

      <Logins {...this.props} />

    )
  }
}

const mapStateToProps = ({ login, user }) => {
  const { message } = login;
  const { token } = user;
  return { token, message };
};

export default connect(
  mapStateToProps,
  { loginUser }
)(LoginContainer);
