
import {
    createStackNavigator,
} from "react-navigation";

import { FluidNavigator, Transition } from "react-navigation-fluid-transitions"

import Dashobard from "src/screen/seller/common/ScrollableConatiner";
import AddProductContainer from "src/screen/seller/products/AddProductContainer";
import CategoryChooser from "src/screen/seller/products/AddProductContainer/CategoryChooser";
import SubCategoryChooser from "src/screen/seller/products/AddProductContainer/SubCategoryChooser";
import ProductChooser from "src/screen/seller/products/AddProductContainer/ProductChooser";

export default CommonStack = FluidNavigator(
    {
        SellerDashobard: Dashobard,
        AddProduct: AddProductContainer,
        CategoryChooser: CategoryChooser,
        ProductChooser: ProductChooser,
        SubCategoryChooser: SubCategoryChooser


    },
    { headerMode: "none" }
);
