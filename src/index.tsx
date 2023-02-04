import React from 'react';

import {renderTree} from "./Render";
import store from "./Redux/State";

store.subscribe(renderTree)
renderTree();

// renderTree(state);