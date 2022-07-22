import './App.css';
import {useState} from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Navi from './Navbar';
import { Link, Route, Routes,useNavigate, Outlet} from 'react-router-dom';
import Event from './page/event';
import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import Icon from 'awesome-react-icons/lib/cjs/Icon';
import Reserve from './page/reserve';
import Info from './page/info';
function App() {
  return (
    <div className="App">
      <Navi></Navi>


    <Routes>
      <Route path="/" element = { <div>this is home</div>}></Route>
      <Route path="/reserve" element = { <Reserve></Reserve>}>
      <Route path="software" element = {<div>Software</div>}/>
      <Route path="culture" element = { <Reserve/>}/>
      </Route>
      <Route path="/info" element = {<Info></Info>}></Route>
      <Route path="/event" element = { <Event/>}></Route>
      


    </Routes>




    </div>
    
  );
}



export default App;
