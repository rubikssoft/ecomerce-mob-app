import { createStackNavigator } from "react-navigation";

import Landing from '../screen/login/Landing'
import CustomerReg from '../screen/login/CustomerReg'
import SellerReg from '../screen/login/SellerReg'
import Otp from '../screen/login/Otp'
// import Register from "../component/register";

export default createStackNavigator(
  {
    Landing: { screen: Landing },
    CustomerReg: { screen: CustomerReg },
    SellerReg: { screen: SellerReg },
    Otp: { screen: Otp },
    // Register: { screen: Register }
  },
  {
    headerMode: "none"
  }
);
