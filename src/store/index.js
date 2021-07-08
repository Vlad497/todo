import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from "connected-react-router";
import { logger } from "redux-logger";
import history from "./history";
import rootReducer from "./reducer";
import {composeWithDevTools} from 'redux-devtools-extension'

const initialState = {};

const middleWare = [logger, routerMiddleware(history)]

const composeEnhancers =
    typeof window === "object" &&
        window.REDUX_DEVTOOLS_EXTENSION_COMPOSE
        ? window.REDUX_DEVTOOLS_EXTENSION_COMPOSE({})
        : compose;

const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleWare),composeWithDevTools())
);

export default store;