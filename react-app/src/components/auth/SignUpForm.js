import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import './signup.css'

const SignUpForm = ({setShowModal}) => {

  let errorsObj = {content: ''};

  const [reactErrors, setReactErrors] = useState(errorsObj);

  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();

    let error = false;
    errorsObj = {...errorsObj};
    if(username === '') {
      errorsObj.username = "Requires a username!";
      error = true;
    } else if (username.length < 3 || username.length > 10) {
      errorsObj.username = "Usernames must be 4 - 10 character.";
      error = true;
    }
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
    if(repeatPassword === '') {
      errorsObj.repeatPassword = "Requires password!";
      error = true;
    } else if (repeatPassword !== password) {
      errorsObj.repeatPassword = "Passwords must match!";
      error = true;
    }

    setReactErrors(errorsObj);


    if(!error) {
      console.log(password, "sadfasdf")
      if (password === repeatPassword) {
        const data = await dispatch(signUp(username, email, password));
        if (data) {
          setErrors(data)
        }
      }
    }
  }

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    setShowModal(false)
    return <Redirect to='/tweets' />;

  }

  return (
    <form onSubmit={onSignUp}>
      <div className="errors">
          {Object.values(reactErrors).map((error, idx) => <p key={idx}>{error}</p>)}
      </div>
      <div className="errors">
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>

      <div>
        <label>* Username</label>
        <input
          type='text'
          name='username'
          className="inputssign"
          onChange={updateUsername}
          value={username}
        ></input>
      </div>

      <div>
        <label>* Email</label>
        <input
          type='text'
          name='email'
          className="inputssign"
          onChange={updateEmail}
          value={email}
        ></input>
      </div>

      <div>
        <label>* Password</label>
        <input
          type='password'
          name='password'
          className="inputssign"
          onChange={updatePassword}
          value={password}
          required={true}
        ></input>
      </div>

      <div>
        <label>* Repeat Password</label>
        <input
          type='password'
          name='repeat_password'
          className="inputssign"
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
        ></input>
      </div>
      <button className="getin" type='submit'>Sign Up</button>
    </form>
  );
};

export default SignUpForm;
