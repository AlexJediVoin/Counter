import {combineReducers, legacy_createStore as createStore} from "redux";
import {settingsReducer} from "./settings-reducer";
import {displayReducer} from "./display-reducer";

type RootReducerType = typeof reducers;
export type AppStateType = ReturnType<RootReducerType>;

const reducers = combineReducers({
    settings: settingsReducer,
    display: displayReducer,
})

let store = createStore(reducers);

export default store;