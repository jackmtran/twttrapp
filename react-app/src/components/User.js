import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getTweetsThunk } from "../store/tweets";
import PopulateTweets from './populateTweets'


function User() {
  const [user, setUser] = useState({});
  const { userId }  = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!userId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      setUser(user);
    })();
  }, [userId]);

  useEffect(() => {
    dispatch(getTweetsThunk());
  }, [dispatch]);



  if (!user) {
    return null;
  }

  return (
    <>
  <div className="wrapper">
    <div className="topstuff">
     <img alt="profilepic" className="profilepicture" src={user.profpic}/>
     <a className="profuser">{user.username}</a>
    </div>
    <div className="spacem"><PopulateTweets className="picwide" userId={user.id}></PopulateTweets></div>
    </div>
  </>
);
}
export default User;
