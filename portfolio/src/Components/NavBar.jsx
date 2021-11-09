import React from 'react';
import { ReactNavbar } from "overlay-navbar";
import logo from "../IMG/logo.png";

const NavBar = () => {
  return (
    <>
      <ReactNavbar
        burgerColor="black" burgerColorHover="#59b256" logoWidth="90px"
        navColor1="#fff" logo={logo} logoHoverColor="#59b256" link1Family="Kaushan Script"
        link1Text="Home" link2Text="About" link3Text="Portfolio" link4Text="ContactUs"
        link1Url="/" link2Url="/about" link3Url="/portfolio" link4Url="/contact"
        link1Size="2vmax" link1ColorHover="#59b256"
        link1Margin="1vmax"
        searchIcon={true} searchIconUrl="/search" searchIconColor="#59b256"
        searchIconColorHover="#000"
        cartIcon={false} profileIcon={false} >

      </ReactNavbar>



    </>
  );
}

export default NavBar;