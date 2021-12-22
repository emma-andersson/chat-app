import React from "react";
import { render } from "react-dom";
import App from "./app";

console.log(process.env);
let target = document.querySelector("#app");

render(<App />, target);
