import ScrollableConatiner from "src/screen/customer/common/ScrollableConatiner";
import {
    createStackNavigator,
} from "react-navigation";
export default stackNav = createStackNavigator(
    {
        ScrollableDashboard: ScrollableConatiner,

    },
    { headerMode: "none" }
);

