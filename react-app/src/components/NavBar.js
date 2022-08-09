
import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector} from "react-redux";
import LogoutButton from './auth/LogoutButton';
import { FaTwitter } from "react-icons/fa"
import { RiHome7Fill } from "react-icons/ri"
import { AiOutlineUser } from "react-icons/ai"
import './NavBar.css'


const NavBar = () => {
  const history = useHistory();


  const user = useSelector((state) => state.session.user)


  const forHOME = (e) => {
    e.preventDefault();
    history.push('/tweets')
  }

  if (user) {
  return (
    <nav>
      <div className="fix">
        <li>
        <FaTwitter onClick={forHOME} size="28px" className="birdy"/>
        </li>
        <li className="underbird">
          <NavLink to='/tweets' exact={true} className='active'>
          <RiHome7Fill size="28px"className="homebutt" /><a>          Home</a>
          </NavLink>
        </li>
        <li className="underbird">
          <NavLink to='/users' exact={true} className='active'>
          <AiOutlineUser size="28px"className="homebutt" /><a>            Profiles</a>
          </NavLink>
        </li>
        <li className="underbird">
        <LogoutButton/>
        </li>
        </div>
    </nav>
  );
  }
  else {
    return null;
  }
}

export default NavBar;
