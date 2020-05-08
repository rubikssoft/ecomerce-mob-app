
import { FluidNavigator, Transition } from "react-navigation-fluid-transitions"

import Dashobard from "src/screen/seller/common/ScrollableConatiner";
import AddProductContainer from "src/screen/seller/products/AddProductContainer";
import CategoryChooser from "src/screen/seller/products/AddProductContainer/CategoryChooser";
import SubCategoryChooser from "src/screen/seller/products/AddProductContainer/SubCategoryChooser";
import ProductChooser from "src/screen/seller/products/AddProductContainer/ProductChooser";

// import CustomProduct from "src/screen/seller/products/AddProductContainer/CustomProduct";
import OrderDetails from "src/screen/seller/order/OrderDetails";

import Profile from 'src/screen/seller/profile'

export default CommonStack = FluidNavigator(
    {
        SellerDashboard: Dashobard,
        AddProduct: AddProductContainer,
        CategoryChooser: CategoryChooser,
        ProductChooser: ProductChooser,
        SubCategoryChooser: SubCategoryChooser,

        // CustomProduct: CustomProduct,
        SellerOrderDetails: OrderDetails,
        SellerProfile: Profile


    },
    { headerMode: "none" }
);
