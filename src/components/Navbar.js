import React from 'react';
import { Navbar as BootstrapNavbar } from 'react-bootstrap';

const Navbar = () => (
  <BootstrapNavbar bg="light" expand="lg">
    <BootstrapNavbar.Brand href="#home">
      MyOpenLeaderboard
    </BootstrapNavbar.Brand>
    <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
  </BootstrapNavbar>
);

export default Navbar;
