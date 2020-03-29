import React from "react";
import { Platform } from "react-native";
import { Button, Icon, Text, Badge } from "native-base";
import {
    createStackNavigator,
} from "react-navigation";

import Invoice from "src/screen/seller/order/InvoiceContainer";
import OrderDetails from "src/screen/seller/order/OrderDetailsContainer";
import Orders from "src/screen/seller/order/OrdersContainer";
import theme from 'src/style/theme/default'
export default OrderStack = createStackNavigator(
    {
        Orders: Orders,
        Invoice: Invoice,
        OrderDetails: OrderDetails

    },
    { headerMode: "none" }
);

OrderStack.navigationOptions = {
    tabBarLabel: ({ focused }) => (
        <Text style={{ color: focused ? theme.footerIconActive : theme.footerIcon, textAlign: 'center', fontSize: 13, }}>Order</Text>
    ),
    tabBarIcon: ({ focused }) => (
        <Icon
            name={
                Platform.OS === "ios"
                    ? "md-home"
                    : "md-home"
            }
            style={{
                color: focused ? theme.footerIconActive : theme.footerIcon,
                padding: 6,
                fontSize: 20,

            }}
        />
    )
};


