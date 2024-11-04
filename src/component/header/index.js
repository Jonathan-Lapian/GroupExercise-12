import Logo from "./logo";
import Generation from "./generation";
import React from "react";

const Header = () => {
  return (
    <div>
      <p>
        <Logo />
        <Generation gen="Gen-1/Gen-2/Gen-3/Gen-4" />
      </p>
    </div>
  );
};

export default Header;
