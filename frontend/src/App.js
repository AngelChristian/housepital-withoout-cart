import React from 'react';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import HomeScreen from './components/Screens/HomeScreen/HomeScreen.js';
import loginScreen from './components/Screens/LoginScreen.js';
import registerScreen from './components/Screens/RegisterScreen.js';
import profileScreen from './components/Screens/ProfileScreen.js';
import PaymentScreen from './components/Screens/PaymentScreen.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UserEditScreen from './components/Screens/UserEditScreen.js';
import UserListScreen from './components/Screens/UserListScreen.js';
import Chat from './components/Chat/Chat.js';
import Join from './components/Join/Join.js';
import NearBy from './components/NearBy.js';

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <main className='py-3'>
          <Route path='/login' component={loginScreen} />
          <Route path='/register' component={registerScreen} />
          <Route path='/profile' component={profileScreen} />
          <Route path='/payment' component={PaymentScreen} />
          <Route path='/' component={HomeScreen} exact />
          <Route path='/admin/userlist' component={UserListScreen} />
          <Route path='/admin/user/:id/edit' component={UserEditScreen} />
          <Route path='/onlinechat' exact component={Join} />
          <Route path='/chat' component={Chat} />
          <Route path='/nearbyhospital' component={NearBy} exact />
        </main>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
