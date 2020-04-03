import ScrollableConatiner from "src/screen/customer/common/ScrollableConatiner";
import {
    createStackNavigator,
} from "react-navigation";
import BottomNav from './BottomNavigator';
export default stackNav = createStackNavigator(
    {
        ScrollableDashboard: ScrollableConatiner,
        BottomNav: BottomNav

    },
    { headerMode: "none" }
);

