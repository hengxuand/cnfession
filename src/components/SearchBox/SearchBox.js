import "./SearchBox.scss";
import { useState } from "react";

const SearchBox = () => {
  const [showCross, toggleShowCross] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const handleTyping = (event) => {
    if (event.target.value.length > 0) {
      setSearchInput(event.target.value);
      toggleShowCross(true);
    } else {
      setSearchInput("");
      toggleShowCross(false);
    }

    console.log(event.target.value);
  };
  const clearSearch = (event) => {
    setSearchInput("");
    toggleShowCross(false);
  };

  return (
    <div className="row mt-3">
      <div className="col-md-8 mx-auto">
        <div className="search_wrapper input-group">
          <input
            className="searchBoxFrame form-control"
            type="text"
            value={searchInput}
            placeholder="Find your interest"
            onInput={handleTyping}
          ></input>
          <div className="crossFrame">
            {showCross && (
              <button
                className="btn cross_btn bg-white "
                onClick={clearSearch}
                type="button"
              >
                <div className="crossing">
                  <i className="bi bi-x-lg"></i>
                </div>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
