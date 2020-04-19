import { createSwitchNavigator } from "react-navigation";

import AuthNavigator from "./AuthNavigator";
// import DrawerNavigator from "./DrawerNavigator";
import SiteNavigator from "./SiteNavigator";

import SellerItems from './Customer/ItemsStack';

import ScrollableDashNav from './Customer/ScrollableNav'

import SellerCommonStack from './Seller/CommonStack'

export default initialRouteName =>
  createSwitchNavigator(
    {

      Authentication: { screen: AuthNavigator },
      Site: { screen: SiteNavigator },
      ScrollableDash: { screen: ScrollableDashNav },
      SellerItems: { screen: SellerItems },

      //seller
      Seller: SellerCommonStack
    },
    {
      initialRouteName,
      headerMode: "none"
    }
  );
