import React from 'react';
import login from './views/login/login';
import register from './views/register/register';
import { BrowserRouter as Router , Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/Login" exact component={login}></Route>
        <Route path="/Register" exact component={register}></Route>
      </Router> 
    </div>
  );
}

export default App;

