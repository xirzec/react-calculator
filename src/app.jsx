import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./data/store";
import Calculator from "./ux/calculator";

ReactDOM.render(
    <Provider store={store}>
        <div>
            <h1>react-calculator</h1>
            <Calculator/>
        </div>
    </Provider>,
    document.getElementById('app')
);