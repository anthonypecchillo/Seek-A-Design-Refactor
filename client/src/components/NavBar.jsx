/*
 * Copyright 2019-present Seek-A-Design, LLC. All Rights Reserved.
 */

import React from 'react';
import { NavLink, Link } from "react-router-dom";
import styled from 'styled-components';

const NavList = styled.ul`
  align-self: end;

  display: flex;
  font-family: AlexandriaFLF;
  font-size: 20px;
  height: var(--height);
  letter-spacing: 0.5px;
  line-height: 65px;
  list-style: none;
  margin: 0 20px 10px 20px;
  padding: 0;
  position: relative;

  --height: 60px;
  --border-radius: calc(var(--height) / 2.3);

  &:after {
    border: 5px solid rgb(90, 91, 94);
    border-radius: var(--border-radius);
    content: '';
    display: block;
    left: 0; right: 0; top: 0; bottom: 0;
    pointer-events: none;
    position: absolute;
    z-index: 2;
  }

  & > li {
    background-color: white;
    flex: 1;
    position: relative;
    text-align: center;
    transition: all 0.1s ease-out;
  }

  & > li:first-child {
    border-radius: var(--border-radius) 0 0 var(--border-radius);
  }

  & > li:last-child {
    border-radius: 0 var(--border-radius) var(--border-radius) 0;
  }

  & > li:hover {
    background-color: rgb(77, 26, 75);
    color: white;
    cursor: pointer;
  }

  & > li:hover > ul {
    color: white;
    transform: scaleY(1);
    visibility: visible;
  }

  & > li:not(:last-child):after {
    background-color: inherit;
    border: 4px solid rgb(90, 91, 94);
    border-bottom-color: transparent;
    border-left-color: transparent;
    content: '';
    display: block;
    height: calc(var(--height) * 0.700125);
    position: absolute;
    right: calc(var(--height) * -0.33);
    top: calc(var(--height) * 0.15);
    transform: rotate(45deg);
    width: calc(var(--height) * 0.700125);
    z-index: 1;
  }
`;

const NavDropMenu = styled.ul`
  animation: left-handed-people-are-wrong 1.25s ease-in-out infinite;
  animation-direction: alternate;
  background-color: rgb(77, 26, 75);
  border: 4px solid rgb(77, 26, 75);
  border-top: 1px dashed white;
  color: inherit;
  display: block;
  left: 0; right: 0;
  line-height: 24px;
  list-style: none;
  padding: 0;
  position: absolute;
  text-align: left;
  /* text-transform: uppercase; */
  top: calc(100% - 3px);
  visibility: hidden;
  z-index: 3;
  /* transform: scaleY(1);
  transform-origin: top;
  visibility: visible; */

  & > li {
    overflow: hidden;
    padding: 4px;
    text-overflow: ellipsis;
    width: 100%;
    white-space: nowrap;
  }

  & > li:before {
    content: '•';
    margin-right: 4px;
    margin-top: -1px;
  }

  & > li:first-child {
    padding-top: 8px;
  }

  & > li:hover {
    color: goldenrod;
  }
`;

const NavListItemText = styled.span`
  font-family: AlexandriaFLF-Bold;
  font-size: 22px;
`;

const Icon = styled.i`
  font-size: 33px;
  margin-left: 15px;
  margin-right: 15px;
`;

const NotOrange = styled.div`
  color: rgb(90, 91, 94);
  transition: all 0.1s ease-out;

  &:hover {
    color: white;
  }
`;

class NavBar extends React.Component {
  constructor() {
    super();
    this.state = {
      // someStateVariable: null;
    }

    // this.someMethod = this.someMethod.bind(this);
  }

  // someMethod() {
  //   console.log('Ship it!');
  // }

  render() {
    return (
      <NavList>
        <li>
          <NavLink to="/">
            <NotOrange>
              <Icon className="fas fa-home fa-lg"/>
              <NavListItemText>HOME</NavListItemText>
            </NotOrange>
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects">
            <NotOrange>
              <Icon className="fas fa-desktop fa-lg"/>
              <NavListItemText>PROJECTS</NavListItemText>
            </NotOrange>
          </NavLink>
          <NavDropMenu>
            <li>WEDDING PACKAGES</li>
            <li>OCCASION INVITATIONS</li>
            <li>OTHER GOODIES</li>
          </NavDropMenu>
        </li>
        <li>
          <NavLink to="/about">
            <NotOrange>
              <Icon className="fas fa-user fa-lg"/>
              <NavListItemText>ABOUT ME</NavListItemText>
            </NotOrange>
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact">
            <NotOrange>
              <Icon className="fas fa-envelope fa-lg"/>
              <NavListItemText>CONTACT</NavListItemText>
            </NotOrange>
          </NavLink>
        </li>
      </NavList>
    );
  }
}

export default NavBar;
