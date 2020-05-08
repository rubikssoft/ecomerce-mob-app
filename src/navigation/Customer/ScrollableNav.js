import ScrollableConatiner from "src/screen/customer/common/ScrollableConatiner";
import CustomerProfile from "src/screen/customer/profile";
import {
    createStackNavigator,
} from "react-navigation";
export default stackNav = createStackNavigator(
    {
        ScrollableDashboard: ScrollableConatiner,
        CustomerProfile: CustomerProfile

    },
    { headerMode: "none" }
);

