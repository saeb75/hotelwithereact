import React,{useState}from 'react';
import axios from 'axios'
import {Route,Switch,NavLink} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import SingleRoom from './pages/SingleRoom'
import Room from './pages/Room'
import Error from './pages/Error'
import './style/sass/App.scss';
import Navbar from './component/Navbar'

import SimpleSlider from './component/Slider'




function App() {
  
  /* let m = [11,22,33,44,55,5,6,8,4,8,2,54,86,84,864,84,684,5848,6,1556,44,684,68]

  let b =m.slice(0,3)
   m.map(item => {
     
    return console.log(item)
  
  })
console.log("--------------------------------------------")
  b.map(item => {
     
    return console.log(item)
  
  })
 */





  return (
    
    <>
    
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/rooms" exact component={Room} />
        <Route path="/about" exact component={About} />
        <Route path="/rooms/:slug" exact component={SingleRoom} />
        <Route exact component={Error} />
      </Switch>
    
     </>
       
  );
}

export default App;
