import React, { Component } from "react";
import ReactDOM from "react-dom";
import Form from "./components/form";

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<Form />, wrapper) : false;