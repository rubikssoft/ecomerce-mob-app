
import {
    createStackNavigator,
} from "react-navigation";

// import Dashboard from "src/screen/customer/common/DashboardContainer";
import ItemList from "src/screen/customer/common/ItemsContatiner";
import SettingsContainer from "src/screen/customer/common/SettingsContainer/Settings";
import ScrollableConatiner from "src/screen/customer/common/ScrollableConatiner";
import Cart from "src/screen/customer/common/CartContainer"
import OrderDetails from "src/screen/customer/common/OrderDetailsContainer/OrderDetails"
export default ItemsStack = createStackNavigator(
    {
        ItemList: ItemList,
        ScrollableDashboard: ScrollableConatiner,
        Cart: Cart,
        Settings: SettingsContainer,
        OrderDetails: OrderDetails

    },
    { headerMode: "none" }
);
