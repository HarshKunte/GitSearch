import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, NavbarText } from 'reactstrap'
import { Link } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa'
import { useState } from 'react';

const Header = () => {


    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <Navbar style={{ backgroundColor: '#2C3335' }} dark expand='md'>
            <NavbarBrand>
                <FaGithub style={{ margin: '0px 20px', marginBottom: '5px', backgroundColor: '#2c3335' }} />
                    GitSearch

            </NavbarBrand>
        </Navbar>
    );
}

export default Header;