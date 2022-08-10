import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logout } from '../../store/session';
import { HiOutlineLogout } from 'react-icons/hi';
import './logout.css'


const LogoutButton = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const onLogout = async (e) => {
    await dispatch(logout());
    history.push('/welcome')
  };

  return <HiOutlineLogout size="30px" className="logoutbutt" onClick={onLogout}/>
};

export default LogoutButton;
