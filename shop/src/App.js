/*eslint-disable*/

import logo from './logo.svg';
import './App.css';
import { Button , Container, Navbar, Nav, ModalTitle} from 'react-bootstrap';
import { createContext, useEffect, useState } from 'react';
import data from './data';
import {Routes,Route,Link, useNavigate, Outlet} from 'react-router-dom'
import Detail from './routes/detail';
import About from './routes/About';
import Event from './routes/Event';
import axios from 'axios';
import Cart from './routes/Cart';

export let Context1 = createContext()
function App() {
  let [shoes,setShoes] = useState(data);
  let navigate = useNavigate();
  let [count,setCount] = useState(0);
  let [dataurl ,setDataurl] = useState("https://codingapple1.github.io/shop/data2.json");
  let [backpack] = useState([10,20,30]);

  
  useEffect(() => {
          count == 1 ? setDataurl("https://codingapple1.github.io/shop/data3.json") : setDataurl("https://codingapple1.github.io/shop/data2.json");
  },[count]);
  
  

  return (
    <div className="App">

<Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home"><img src={process.env.PUBLIC_URL + '/logo192.png'} width="30"></img>React-Project</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
          <Nav.Link onClick={()=>{navigate('/detail/0'); setCurrentPage(true)}}>Detail</Nav.Link>
          <Nav.Link onClick={()=>{navigate('/cart')}}>About</Nav.Link>
          <Nav.Link onClick={()=>{navigate('/event')}}>Event</Nav.Link>
        </Nav>
      </Container>
    </Navbar>


    <Routes>
      <Route path="/" element={
        <>
        <div className='main-bg'></div>
        <div className='container'>
          <div className='row'>
            {
              shoes.map(function(a,i){
                return(<Product 
                  img={`https://codingapple1.github.io/shop/shoes${i+1}.jpg`} 
                  shoes={shoes[i]} 
                  link={`/detail/${i}`}
                ></Product>)
              })}
            </div>
        </div>
        <button onClick={() => {
          axios.get(dataurl)
          .then((newshoe) => {
            console.log(dataurl)
            setShoes( shoes.concat(newshoe.data))
            setCount(1);
          })
          

        }}>Button</button>

      </>
      }/>
      <Route path='/detail/:id' element={
        <Context1.Provider value={{backpack, shoes}}>
      <Detail shoes={shoes}/>
      </Context1.Provider>
      }/>

      <Route path='/about' element={<About/>}>
        <Route path='member' element={<div>Member</div>}></Route>
        <Route path='location' element={<div>location</div>}></Route>
      </Route>

      <Route path='/cart' element={<Cart/>}>

      </Route>

      <Route path="*" element={<div>404 Error</div>}/>
    </Routes>

    </div>
  );
}

function Product(props){
  return(
    <div className='col-md-4'>
          <img src={props.img} width="80%"></img>
          <h4>{props.shoes.title}</h4>
          <p>{props.shoes.price}</p>
    </div>
    
  )
}

export default App;
