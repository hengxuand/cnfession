import "./SearchBox.scss";
import { useState } from "react";

const SearchBox = () => {
  const handleTyping = (event) => {
    if (event.target.value.length > 3) {
    }

    console.log(event.target.value);
  };

  return (
    <input
      className="row col-6 mx-auto searchBox"
      type="search"
      placeholder="Find your interest"
      onInput={handleTyping}
    ></input>
  );
};

export default SearchBox;
