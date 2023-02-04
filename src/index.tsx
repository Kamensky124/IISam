import React from 'react';
// import {renderTree} from "./Render";
import store from "./Redux/State";
import ReactDOM from "react-dom";
import App from "./App";

//было в файле render
const renderTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App store={store}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

//отрисовка по subscribe
store.subscribe(renderTree)
//первончальная отприсовка
renderTree();

// renderTree(state);