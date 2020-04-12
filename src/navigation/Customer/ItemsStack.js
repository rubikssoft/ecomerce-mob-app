
import {
    createStackNavigator,
} from "react-navigation";

//import Dashboard from "src/screen/customer/common/DashboardContainer";
import ItemList from "src/screen/customer/common/ItemsContatiner";
import ScrollableConatiner from "src/screen/customer/common/ScrollableConatiner";
import Cart from "src/screen/customer/common/CartContainer"
export default ItemsStack = createStackNavigator(
    {
        ItemList: ItemList,
        ScrollableDashboard: ScrollableConatiner,
        Cart:Cart

    },
    { headerMode: "none" }
);
