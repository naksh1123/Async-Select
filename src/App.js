import "./styles.css";
import React, { Component } from "react";

import AsyncSelect from "react-select/async";
import { stateOptions } from "./data";

const filterColors = (inputValue: string) => {
  return stateOptions.filter((i) =>
    i.label.toLowerCase().includes(inputValue.toLowerCase())
  );
};

const promiseOptions = (inputValue) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(filterColors(inputValue));
    }, 1000);
  });

export default function App() {
  return (
    <div className="App">
      <AsyncSelect cacheOptions defaultOptions loadOptions={promiseOptions} />
    </div>
  );
}
