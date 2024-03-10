import React from "react";
import ReactDOM from "react-dom";

const heading=React.createElement("h1",{id:"heading"},"Namaste Nishant 👻");
let img=require('./images/charli.png')

const Title=() =>(
    <h1 id="title">Charlizard:Fire type 🔥🔥</h1>
)
const Head=()=>(
    <><Title/><img src={img} /><h1 id="head">Namaste Nishant from JSX 👻</h1></>)
const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<Head/>);