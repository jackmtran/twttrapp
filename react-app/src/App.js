import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';
import TweetsPage from './components/tweetsPage';
import CreateTweetsPage from './components/createTweet'
import EditTweetsPage from './components/editTweet'
import CreateCommentsPage from './components/createComment';
import EditCommentsPage from './components/editComment';
import Splash from './components/splash'
import Footer from "./components/footer";
import TweetsComments from './components/populatecomments'




function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/' exact={true}>
          <Splash />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/tweets/create' exact={true}>
          <CreateTweetsPage />
        </ProtectedRoute>
        <ProtectedRoute path='/tweets' exact={true}>
          <TweetsPage />
        </ProtectedRoute>
        <ProtectedRoute path='/tweets/:id' exact={true}>
          <EditTweetsPage />
        </ProtectedRoute>
        <ProtectedRoute path='/comments/create/:id'>
          <CreateCommentsPage />
        </ProtectedRoute>
        <ProtectedRoute path='/comments/:id'>
          <EditCommentsPage />
        </ProtectedRoute>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
    <Footer/>
    </>
  );
}

export default App;
