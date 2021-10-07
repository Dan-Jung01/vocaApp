import React from "react";
import { Link } from "react-router-dom";
import Logout from "./LogOut";

const Navigation = () => (
  <nav className='navContainer'>
    <div className='navLeftSide'>
      <h1 className='navTitle'>
        <Link to='/'>나만의 영어단어장</Link>
      </h1>
      <ul className='navMenu'>
        <li>
          <Link to='/'>Home</Link>{" "}
        </li>
        <li>
          <Link to='/profile'>My Profile</Link>{" "}
        </li>
      </ul>
    </div>
    <div className='navRightSide'>
      <Logout />
    </div>
  </nav>
);
export default Navigation;
