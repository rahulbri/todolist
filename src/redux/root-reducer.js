import { combineReducers } from "redux";
import usersReducer from "./reducer";


const rootReducer = combineReducers({
 data:usersReducer,
  //other reducers come here...
});

export default rootReducer;