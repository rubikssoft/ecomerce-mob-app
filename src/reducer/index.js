import { combineReducers } from "redux";
import LoginReducer from "./LoginReducer";
import RegisterReducer from "./RegisterReducer";
import UserReducer from "./UserReducer";
import AccountReducer from "./AccountReducer";
import AppSettings from "./AppSettings";
import Location from "./LocationReducer";
import Category from "./CategoryReducer";

import SellerReducer from "./SellerReducer";
import CartReducer from "./CartReducer";

//import NavigationReducer from './NavigationReducer'

//seller

import Seller from './Seller/Seller'
import SellerErrorReducer from './Seller/ErrorReducer'
import SellerAddProducts from './Seller/AddProducts'



export default combineReducers({
  login: LoginReducer,
  register: RegisterReducer,
  user: UserReducer,
  account: AccountReducer,
  settings: AppSettings,
  location: Location,
  cart: CartReducer,
  seller: SellerReducer,
  category: Category,
  //seller

  sellerData: Seller,
  sellerAddProducts: SellerAddProducts,
  sellerError: SellerErrorReducer
});
