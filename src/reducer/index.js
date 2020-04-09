import { combineReducers } from "redux";
import LoginReducer from "./LoginReducer";
import RegisterReducer from "./RegisterReducer";
import UserReducer from "./UserReducer";
import AccountReducer from "./AccountReducer";
import AppSettings from "./AppSettings";
import Location from "./LocationReducer";

import SellerReducer from "./SellerReducer";
import CartReducer from "./CartReducer";

//import NavigationReducer from './NavigationReducer'

export default combineReducers({
  login: LoginReducer,
  register: RegisterReducer,
  user: UserReducer,
  account: AccountReducer,
  settings: AppSettings,
  location: Location,
  cart: CartReducer,
  seller: SellerReducer
  //navigate: NavigationReducer
});
