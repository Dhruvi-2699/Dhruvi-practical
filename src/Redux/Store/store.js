import { combineReducers, createStore } from "redux";
import PackageManagerReducer from "../Reducer/PackageManagerReducer";

const rootReducer = combineReducers({
  packageList: PackageManagerReducer,
});
const store = createStore(rootReducer);

export default store;
