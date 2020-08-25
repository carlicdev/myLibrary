import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import AddBook from './components/UserForms/AddBook';
import Login from './components/UserForms/Login';
import Signin from './components/UserForms/Signin';
import ProductList from './components/Products/ProductList';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path ='/products' component={ProductList} />
        <Route path='/add' component={AddBook} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Signin} />
      </Switch>
    </div>
  );
}

export default App;
