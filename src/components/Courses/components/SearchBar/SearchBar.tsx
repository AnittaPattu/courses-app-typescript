import Input from "../../../../common/Input/input";
import Button from "../../../../common/Button/button";
import React, { useState } from "react";
import PropTypes from "prop-types";

const SearchBar = (props) => {
  const SEARCH_TEXT = "Search";
  const [searchInput, setSearchInput] = useState("");

  function searchValue() {
    props.startSearch(searchInput);
  }

  function searchData(searchValue) {
    setSearchInput(searchValue);
  }
  return (
    <div className="col-10 d-inline-block">
      <Input
        inputType="text"
        placeholder={props.placeholder}
        class={props.class}
        change={searchData}
      />
      <Button
        buttonText={SEARCH_TEXT}
        class="button search-btn"
        handleClick={searchValue}
      />
    </div>
  );
};

export default SearchBar;

SearchBar.propTypes = {
  setSearch: PropTypes.string,
  placeholder: PropTypes.string,
  class: PropTypes.string,
};
