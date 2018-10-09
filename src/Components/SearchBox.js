import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => (
  <div className="pa2">
    <input
      className="search br2 pa3 b--green bg-lightest-blue"
      type="search"
      placeholder="Search Robots"
      onChange={searchChange}
    />
  </div>
);

export default SearchBox;
