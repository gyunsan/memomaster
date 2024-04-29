import React from "react";
import { useCookies } from "react-cookie";

import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";




export default function Nav() {
  const [cookies, setCookie, removeCookie] = useCookies(['Email', 'AuthToken']); // get cookies
  const hasSession = Boolean(cookies.Email && cookies.AuthToken) // check if both Email and AuthToken exist

  const signOut = () => {
    console.log("signout")
    removeCookie("Email");
    removeCookie("AuthToken");
    window.location.reload();
  };

  return (
    <Navbar>
      <NavbarBrand>
        <img src="/logo.svg" alt="Memo Master" width={35} height={35} />
        <p className="font-bold text-tiny">{' '}Memo Master</p>
      </NavbarBrand>
      <NavbarContent justify="end">
        {hasSession && ( // only render if there's an active session
          <NavbarItem>
            <Button as={Link} onClick={signOut}  color="default" variant="light">
              Sign Out
            </Button>
          </NavbarItem>
        )}
      </NavbarContent>
    </Navbar>
  );
}