import React from "react";

const Search = (props) => {


  return <input className="search" value={props.searchTerm} onChange={(e) => {props.handleSearch(e)}}>{/*Build Form Here*/}</input>;
};

export default Search;
