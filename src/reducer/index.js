import { combineReducers } from "redux";
import LoginReducer from "./LoginReducer";
import RegisterReducer from "./RegisterReducer";
import UserReducer from "./UserReducer";
import AccountReducer from "./AccountReducer";
import AppSettings from "./AppSettings";

//import NavigationReducer from './NavigationReducer'

export default combineReducers({
  login: LoginReducer,
  register: RegisterReducer,
  user: UserReducer,
  account: AccountReducer,
  settings: AppSettings,
  //navigate: NavigationReducer
});
