import React from 'react';
import ReactDOM from 'react-dom';
import Main from "../../../../src/pages/Main";


describe("Main component", () => {
  test("renders podcast list on load", () => {
    const container = document.createElement('div');
    ReactDOM.render(<Main />, container);

    console.log('AAAAAAAAAAAAA',container);
    /*
    const SearcherChipResult = container.querySelector('.header__searcher_container');
    expect(SearcherChipResult).toBeTruthy();
    ReactDOM.unmountComponentAtNode(container);*/
  });
});