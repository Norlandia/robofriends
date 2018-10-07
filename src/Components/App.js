import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from '../robots';

const App = () => (
  <div className="tc">
    <h1>ROBOFRIENDS</h1>
    <SearchBox />
    <CardList robots={robots} />
  </div>
);

export default App;
