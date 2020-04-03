import React from "react";
import { Platform, TouchableHighlightComponent } from "react-native";
import { Button, Icon, Text, Badge } from "native-base";
import {
    createStackNavigator,
} from "react-navigation";

//import Dashboard from "src/screen/customer/common/DashboardContainer";
import Seller from "src/screen/customer/common/SellerContainer";
import ScrollableConatiner from "src/screen/customer/common/ScrollableConatiner";
import theme from 'src/style/theme/default'

export default CommonStack = createStackNavigator(
    {
        //Dashboard: Dashboard,
        SellerView: Seller,
        ScrollableDashboard: ScrollableConatiner,

    },
    { headerMode: "none" }
);

CommonStack.navigationOptions = {
    tabBarLabel: ({ focused }) => (
        <Text style={{ color: focused ? theme.footerIconActive : theme.footerIcon, textAlign: 'center', fontSize: 13, }}>Dashboard</Text>
    ),
    tabBarIcon: ({ focused }) => (
        <Icon
            name={
                Platform.OS === "ios"
                    ? `md-globe${focused ? "" : ""}`
                    : "md-globe"
            }
            style={{
                color: focused ? theme.footerIconActive : theme.footerIcon,
                padding: 6,
                fontSize: 20,

            }}
        />
    )
};

