import { createSwitchNavigator } from "react-navigation";

import AuthNavigator from "./AuthNavigator";
import DrawerNavigator from "./DrawerNavigator";
import SiteNavigator from "./SiteNavigator";

import CustomerNavigator from './Customer/BottomNavigator';
import SellerNavigator from './Seller/BottomNavigator';

import ScrollableDashNav from './Customer/ScrollableNav'

export default initialRouteName =>
  createSwitchNavigator(
    {

      Authentication: { screen: AuthNavigator },
      Main: { screen: DrawerNavigator },
      Site: { screen: SiteNavigator },
      Customer: { screen: CustomerNavigator },
      Seller: { screen: SellerNavigator },
      ScrollableDash: { screen: ScrollableDashNav },
    },
    {
      initialRouteName,
      headerMode: "none"
    }
  );
