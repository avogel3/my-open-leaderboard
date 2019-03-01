import React from 'react';
import { Navbar as BootstrapNavbar } from 'react-bootstrap';

const Navbar = () => (
  <BootstrapNavbar bg="primary" variant="dark" expand="lg">
    <BootstrapNavbar.Brand href="#home">
      MyOpenLeaderboard - {new Date().getFullYear()}
    </BootstrapNavbar.Brand>
  </BootstrapNavbar>
);

export default Navbar;
