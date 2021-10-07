import React from "react";
import { authService } from "fbase";
import { useHistory } from "react-router";
import { RiLogoutBoxRLine } from "react-icons/ri";

const Logout = () => {
  const history = useHistory();

  const onLogOutClick = () => {
    authService.signOut();
    history.push("/");
  };
  return (
    <div className='navLogOutBtn'>
      {/* <button onClick={onLogOutClick}>Log Out</button> */}
      <RiLogoutBoxRLine onClick={onLogOutClick} size={25} className='icon' />
    </div>
  );
};
export default Logout;
