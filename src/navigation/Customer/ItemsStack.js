
import {
    createStackNavigator,
} from "react-navigation";

//import Dashboard from "src/screen/customer/common/DashboardContainer";
import ItemList from "src/screen/customer/common/ItemsContatiner";
import ScrollableConatiner from "src/screen/customer/common/ScrollableConatiner";

export default ItemsStack = createStackNavigator(
    {
        ItemList: ItemList,
        ScrollableDashboard: ScrollableConatiner,

    },
    { headerMode: "none" }
);
