import React from "react";
import {
  // existing code
  useSubmit,
  useNavigation,
  useLoaderData,
} from "react-router-dom";

function Search({ onChange }) {
  const handleChange = (e) => {
    onChange && onChange(e.target.value.trim());
  };
  return (
    <form onSubmit={(e) => e.preventDefault()} id="search-form" role="search">
      <input
        id="q"
        onChange={handleChange}
        className="form-control"
        type="search"
      />
    </form>
  );
}

export default Search;
