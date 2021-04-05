import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AuthProvider from './context/AuthContext';
import PrimarySearchAppBar from './components/AppBar';
import PrivateRoute from './components/PrivateRoute';
import Login from './pages/Login';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import SignUp from './pages/SignUp';
import PasswordRecovery from './pages/PasswordRecovery';
import About from './pages/About';

const App = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://docs.opencv.org/master/opencv.js';
    script.async = true;
    script.onload = () => console.log(`OpenCV is loaded`);

    document.body.appendChild(script);
  }, []);

  return (
    <AuthProvider>
      <BrowserRouter>
        <PrimarySearchAppBar />
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/password-recovery" component={PasswordRecovery} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
