import React from "react";

const BeerItem = (props) => {

  return (
    <li className="beer-item" onClick={(e) => {props.handleClick(props.beer.id)}}>
      {props.beer.name}
    </li>
  );
};

export default BeerItem;
