
import {
    createStackNavigator,
} from "react-navigation";


import Dashobard from "src/screen/seller/common/ScrollableConatiner";

export default CommonStack = createStackNavigator(
    {
        SellerDashobard: Dashobard,


    },
    { headerMode: "none" }
);
