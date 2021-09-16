import ReactDOM from "react-dom";
import React from "react";
import App from "./App";

import store, {NewStoreType} from "./redux/redux-store";


export const renderTree = (state: NewStoreType) => {
    ReactDOM.render(
        <React.StrictMode>
            {/*<App store={store}  dispatch={store.dispatch.bind(store)} store1={store}/>*/}
            <App store={state}  dispatch={store.dispatch.bind(store)} store1={store}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}