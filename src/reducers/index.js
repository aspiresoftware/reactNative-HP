import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import homeReducer from "../container/HomeContainer/reducer";
import loginReducer from "../container/LoginContainer/LoginReducer";

export default combineReducers({
    form: formReducer,
    homeReducer,
    loginReducer
});
//# sourceMappingURL=index.js.map