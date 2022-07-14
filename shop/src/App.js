/*eslint-disable*/

import logo from './logo.svg';
import './App.css';
import { Button , Container, Navbar, Nav, ModalTitle} from 'react-bootstrap';
import { useState } from 'react';
import data from './data';
import {Routes,Route,Link, useNavigate, Outlet} from 'react-router-dom'
import Detail from './routes/detail';
import About from './routes/About';
import Event from './routes/Event';
import axios from 'axios';
function App() {
  let [shoes,setShoes] = useState(data);
  let navigate = useNavigate();
  let [count,setCount] = useState(0);
  let [dataurl ,setDataurl] = useState("");
  return (
    <div className="App">

<Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home"><img src={process.env.PUBLIC_URL + '/logo192.png'} width="30"></img>React-Project</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
          <Nav.Link onClick={()=>{navigate('/detail/0')}}>Detail</Nav.Link>
          <Nav.Link onClick={()=>{navigate('/about')}}>About</Nav.Link>
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
          axios.get('https://codingapple1.github.io/shop/data2.json')
          .then((newshoe) => {
            setShoes( shoes.concat(newshoe.data))
          })
          .catch((error) => {console.log(error);});

        }}>Button</button>

      </>
      }/>
      <Route path='/detail/:id' element={<Detail shoes={shoes}/>}/>

      <Route path='/about' element={<About/>}>
        <Route path='member' element={<div>Member</div>}></Route>
        <Route path='location' element={<div>location</div>}></Route>
      </Route>

      <Route path='/event' element={<Event/>}>
        <Route path='one' element={<p>첫 주문시 양배추즙 서비스</p>}></Route>
        <Route path='two' element={<p>생일 기념 쿠폰받기<button>CHECK</button></p>}></Route>
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
