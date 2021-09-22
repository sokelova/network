import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import store, {NewStoreType} from "./redux/redux-store";
import { Provider } from "react-redux";



export const renderTree = (state: NewStoreType) => {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <App/>
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
}