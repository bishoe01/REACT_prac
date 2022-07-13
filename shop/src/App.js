/*eslint-disable*/

import logo from './logo.svg';
import './App.css';
import { Button , Container, Navbar, Nav, ModalTitle} from 'react-bootstrap';
import { useState } from 'react';
import data from './data';

function App() {
  let [shoes] = useState(data);
  return (
    <div className="App">
     <Navbar bg="dark" variant="dark">
      
        <Container>
          <Navbar.Brand href="#home"><img src={process.env.PUBLIC_URL + '/logo192.png'} width="30"></img>React-Project</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Project</Nav.Link>
            <Nav.Link href="#pricing">Launguage</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    <div className='main-bg'></div>

    <div className='container'>
      <div className='row'>
        {
          shoes.map(function(a,i){
            return(<Product img={`https://codingapple1.github.io/shop/shoes${i+1}.jpg`} title={shoes[i].title} price={shoes[i].price}></Product>)
          })

        }
        </div>
    </div>

    </div>
  );
}

function Product(props){
  return(
    <div className='col-md-4'>
          <img src={props.img} width="80%"/>
          <h4>{props.title}</h4>
          <p>{props.price}</p>
          </div>
  )
}

export default App;
