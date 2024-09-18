//1) Improtamos la variable React en scope
import React from "react";

//2) Necesitamos la variable ReactDOM en scope
import ReactDOM from "react-dom";

//3) Necesitamos un componente en scope

import Myapp from './Myapp'
import "./style.css"

ReactDOM.render(<Myapp/>, document.getElementById("root"))