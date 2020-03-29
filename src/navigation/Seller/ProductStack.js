import React from "react";
import { Platform } from "react-native";
import { Button, Icon, Text, Badge } from "native-base";
import {
    createStackNavigator,
} from "react-navigation";

import AddProduct from "src/screen/seller/products/AddProductContainer";
import EditProduct from "src/screen/seller/products/EditProductContainer";
import ProductDetails from "src/screen/seller/products/ProductDetailsContainer";
import Products from "src/screen/seller/products/ProductsContainer";

import theme from 'src/style/theme/default'

export default ProductStack = createStackNavigator(
    {
        Products: Products,
        AddProduct: AddProduct,
        EditProduct: EditProduct,
        ProductDetails: ProductDetails,
    },
    { headerMode: "none" }
);

ProductStack.navigationOptions = {
    tabBarLabel: ({ focused }) => (
        <Text style={{ color: focused ? theme.footerIconActive : theme.footerIcon, textAlign: 'center', fontSize: 13, }}>Products</Text>
    ),
    tabBarIcon: ({ focused }) => (
        <Icon
            name={
                Platform.OS === "ios"
                    ? "md-business"
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


