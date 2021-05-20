import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Tittle from "./component/Tittle/Tittle";
import Result from "./component/result/result";
import Number from "./component/Number/Number";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Tittle />
    <Result />
    <Number number="1" />
    <Number number="2" />
    <Number number="3" />
    <Number number="+" />
    <Number number="4" />
    <Number number="5" />
    <Number number="6" />
    <Number number="-" />
    <Number number="7" />
    <Number number="8" />
    <Number number="9" />
    <Number number="x" />
    <Number number="AC" />
    <Number number="0" />
    <Number number="%" />
    <Number number="/" />
  </StrictMode>,
  rootElement
);
