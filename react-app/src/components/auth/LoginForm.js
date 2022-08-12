import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import './loginform.css'
import { FaTwitter } from 'react-icons/fa'

const LoginForm = () => {


  let errorsObj = {content:''}
  const [reactErrors, setReactErrors] = useState(errorsObj);

  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();

    let error = false;
    errorsObj = {...errorsObj};

    if(email === '') {
      errorsObj.email = "Requires email!";
      error = true;
    } else if (!email.includes("@") || !email.includes(".")) {
      errorsObj.email = "Please input a valid email address.";
      error = true;
    }
    if(password === '') {
      errorsObj.password = "Requires password!";
      error = true;
    }

    setReactErrors(errorsObj);

    if(!error) {
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const demoUser = async (e) => {
    e.preventDefault();
    const DemoEmail = "demo@aa.io"
    const DemoPassword = "password"
    const data = await dispatch(login(DemoEmail, DemoPassword));
    if (data) {
      setErrors(data);
    }
  };

  if (user) {
    return <Redirect to='/tweets'/>;
  }

  return (
    <form className="loginform" onSubmit={onLogin}>
      <div className="errors">
        {Object.values(reactErrors).map((error, idx) => <a key={idx}>{error}</a>)}
      </div>
      <div className="errors">
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
      <div className="formback">
        <label htmlFor='email'>* Email</label>
        <input className="inputsforLogin"
          name='email'
          type='text'
          placeholder='Email'
          value={email}
          onChange={updateEmail}
        />
      </div>
      <div className="formback">
        <label htmlFor='password'>* Password</label>
        <input
         className="inputsforLogin"
          name='password'
          type='password'
          placeholder='Password'
          value={password}
          onChange={updatePassword}
        />
        <button type='submit'>Login</button>
        <button type='submit' className="button" onClick={demoUser}>Demo User</button>
      </div>
    </form>
  );
};

export default LoginForm;
