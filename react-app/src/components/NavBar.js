
import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import { FaTwitter } from "react-icons/fa"
import { RiHome7Fill } from "react-icons/ri"

import './NavBar.css'
const NavBar = () => {

  const history = useHistory();

  const forHOME = (e) => {
    e.preventDefault();
    history.push('/tweets')
  }


  return (
    <nav>
      <div>
        <li>
        <FaTwitter onClick={forHOME} size="24px" className="birdy"/>
        </li>
        <li className="underbird">
          <NavLink to='/tweets' exact={true} className='active'>
          <RiHome7Fill size="18px"className="homebutt" /> Home
          </NavLink>
        </li>
        <li className="underbird">
          <NavLink to='/login' exact={true} className='active'>
            Login
          </NavLink>
        </li>
        <li className="underbird">
          <NavLink to='/sign-up' exact={true} className='active'>
            Sign Up
          </NavLink>
        </li>
        <li className="underbird">
          <NavLink to='/users' exact={true} className='active'>
            Users
          </NavLink>
        </li>
        <li className="underbird">
          <LogoutButton />
        </li>
        </div>
    </nav>
  );
}

export default NavBar;
