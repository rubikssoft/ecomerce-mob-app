
import { FluidNavigator, Transition } from "react-navigation-fluid-transitions"

import Dashobard from "src/screen/seller/common/ScrollableConatiner";
import AddProductContainer from "src/screen/seller/products/AddProductContainer";
import CategoryChooser from "src/screen/seller/products/AddProductContainer/CategoryChooser";
import SubCategoryChooser from "src/screen/seller/products/AddProductContainer/SubCategoryChooser";
import ProductChooser from "src/screen/seller/products/AddProductContainer/ProductChooser";

import CustomProduct from "src/screen/seller/products/AddProductContainer/CustomProduct";
import OrderDetails from "src/screen/seller/order/OrderDetails";

export default CommonStack = FluidNavigator(
    {
        SellerDashobard: Dashobard,
        AddProduct: AddProductContainer,
        CategoryChooser: CategoryChooser,
        ProductChooser: ProductChooser,
        SubCategoryChooser: SubCategoryChooser,

        CustomProduct: CustomProduct,
        SellerOrderDetails: OrderDetails


    },
    { headerMode: "none" }
);
