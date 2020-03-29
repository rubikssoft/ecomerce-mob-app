import { createStackNavigator } from "react-navigation";

import Landing from '../screen/login/Landing'
import CustomerReg from '../screen/login/CustomerReg'
import SellerReg from '../screen/login/SellerReg'
// import Register from "../component/register";

export default createStackNavigator(
  {
    Landing: { screen: Landing },
    CustomerReg: { screen: CustomerReg },
    SellerReg: { screen: SellerReg },
    // Register: { screen: Register }
  },
  {
    headerMode: "none"
  }
);
