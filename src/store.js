import { createStore, compose } from "redux";
import rootReducer from "./reducers/rootReducer.js";

const devTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composeEnhancers = devTools();
export default function configureStore() {
  return createStore(rootReducer, composeEnhancers);
}
