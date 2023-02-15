import React from 'react';
import ReactDOM from 'react-dom';
import Main from "../../../../src/pages/Main";


describe("Main component", () => {
  test("renders podcast list on load", () => {
    const container = document.createElement('div');
    ReactDOM.render(<Main />, container);

  
  });
});