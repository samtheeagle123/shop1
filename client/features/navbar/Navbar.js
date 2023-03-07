import React from "react";
import { useSelector } from "react-redux";
import NavbarLoggedIn from "./NavbarLoggedIn";
import NavbarLogin from "./NavbarLogin";
import NavbarAdmin from "./NavbarAdmin"

const Navbar = () => {
  const isLoggedIn = useSelector(state => !!state.auth.me.id);
  const isAdmin = useSelector(state => state.auth.me.isAdmin)


  return (
    <div>
      <h1>FS-App-Template</h1>
      <div>
        {/* {isLoggedIn && isAdmin ? (
          <NavbarAdmin />
          <NavbarLoggedIn />
        ) : (
          <NavbarLogin />
        )} */}

        {(() => {
          if (isAdmin) {
            return (
              <NavbarAdmin />
            )
          } else if (isLoggedIn) {
            return (
              <NavbarLoggedIn />
            )
          } else {
            return (
              <NavbarLogin />
            )
          }
        })()}
      </div>
      <hr />
    </div>
  );
};

export default Navbar;
