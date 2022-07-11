/*eslint-disable*/

import logo from './logo.svg';
import './App.css';
import { Button , Container, Navbar, Nav} from 'react-bootstrap';
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
        <div className='col-md-4'>
          <img src='https://codingapple1.github.io/shop/shoes1.jpg' width="80%"/>
          <h4>Description</h4>
          <p>price</p>
          </div>
        <div className='col-md-4'><img src='https://codingapple1.github.io/shop/shoes2.jpg' width="80%"/>
          <h4>Description</h4>
          <p>price</p></div>
        <div className='col-md-4'><img src='https://codingapple1.github.io/shop/shoes3.jpg' width="80%"/>
          <h4>Description</h4>
          <p>price</p></div>
      </div>
    </div>

    </div>
  );
}

export default App;
