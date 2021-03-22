import React from "react";
import Search from "./Search";

function Header({searchFilter}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search searchFilter={searchFilter}/>
    </header>
  );
}

export default Header;
