import "./styles.css";
import React, { Component } from "react";

import AsyncSelect from "react-select/async";

import { useState, useEffect } from "react";

export default function App() {
  const [stateOptions, setStateOptions] = useState([]);

  useEffect(() => {
    fetch(`https://mocki.io/v1/89f2a03f-4323-4d31-a3e8-bf88d2989e1c`)
      .then((res) => res.json())
      .then((data) => setStateOptions(data));
  });

  const filterState = (inputValue: string) => {
    return stateOptions.filter((i) =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const promiseOptions = (inputValue) =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(filterState(inputValue));
        console.log(filterState(inputValue));
      }, 1000);
    });

  return (
    <div className="App">
      <AsyncSelect cacheOptions defaultOptions loadOptions={promiseOptions} />
    </div>
  );
}
