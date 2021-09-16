import {combineReducers, createStore } from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";



let reducers = combineReducers({
    profileReducer,
    dialogsReducer
});
export type NewStoreType = ReturnType<typeof reducers>
let store = createStore(reducers);
export default store
