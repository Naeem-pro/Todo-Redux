import { createStore, combineReducers } from "redux";
import counterReducer from "./reducers/counterReducer";
import todoReducer from "./reducers/todoReducer";
import user from "./reducers/user";

const rootReducer = combineReducers({
  //combine all the reducers into single one reducer and pass that single reducer to store
  counterReducer,
  todoReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
); //rootReducer is the combinatin of multiple reducers

export default store;
