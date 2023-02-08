import React from 'react';
// import {renderTree} from "./Render";
import store from "./Redux/Store";
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";

//было в файле render
const renderTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App store={store}
                />
                </BrowserRouter>
        </React.StrictMode>
,
document.getElementById('root')
);
}

//отрисовка по subscribe
store.subscribe(renderTree)
//первончальная отприсовка
renderTree();

// renderTree(state);