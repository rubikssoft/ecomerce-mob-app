import { createDrawerNavigator, DrawerItems } from "react-navigation";
import Item1 from "src/component/drawerItems/Item1";
import Item2 from "src/component/drawerItems/Item2";
import TabNavigator from "./TabNavigator";
// import SideBar from "../component/common/SideBar";
import Menu from "../component/common/Menu";
// import CustomerNavigator from './Customer/BottomNavigator';
// import SellerNavigator from './Seller/BottomNavigator';
import ScrollableDashNav from './Customer/ScrollableNav'



import AuthNavigator from "./AuthNavigator";

export default createDrawerNavigator(
  {

    Tabs: TabNavigator,
    Customer: { screen: CustomerNavigator },
    // Seller: { screen: SellerNavigator },
    // ScrollableDashNav: { screen: ScrollableDashNav },
    Item1: { screen: Item1 },
    Item2: { screen: Item2 }
  },
  {
    contentComponent: Menu
  }
);
