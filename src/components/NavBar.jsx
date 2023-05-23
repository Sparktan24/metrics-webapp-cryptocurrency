import { NavLink } from 'react-router-dom';

import React from 'react';

const NavBar = () => (
  <nav>
    <div>
      <NavLink to="/HomePage">Back</NavLink>
      <NavLink to="/CoinsDetail">CoinDetails</NavLink>
    </div>
  </nav>
);

export default NavBar;
