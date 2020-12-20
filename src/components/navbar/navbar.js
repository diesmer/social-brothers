import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const Navbar = () => {

    const Header = styled.div`
    position: relative;
    width: 100%;
    height: 250px;
    background-color: white;`

    const MenuButton2 = styled.button`
    position: absolute;
    top:50px;
    right: 100px;
    font-size: 18px;
    letter-spacing: 0;
    line-height: 21px;
    background:white;
    border: white;`
    const MenuButton1 = styled.button`
    position: absolute;
    top:50px;
    right: 150px;
    font-size: 18px;
    letter-spacing: 0;
    line-height: 21px;
    background:white;
    border: white;`

    return (
            <Header>
                <MenuButton1><Link to={'/'}>Home</Link></MenuButton1>
                <MenuButton2><Link to={'/blog'}>Blog</Link></MenuButton2>
            </Header>
    );
}