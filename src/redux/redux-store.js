import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleWare from "redux-thunk";// импортируем thunk под именем thunkMiddleWare
import { reducer as formReducer } from 'redux-form'
import appReducer from "./app-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //crome redux-tools
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleWare))); //crome redux-tools

// let store = createStore(reducers, applyMiddleware(thunkMiddleWare));//applyMiddleware- прими промежуточные слои
window.__store__ = store;

export default store;
