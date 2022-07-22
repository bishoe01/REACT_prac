import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Navi(){
    let navigate = useNavigate();
    return(
      <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand onClick={() => navigate('/')}>Hanyang</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link onClick={() => navigate('/reserve')}>Reserve</Nav.Link>
              <Nav.Link onClick={() => navigate('/info')}>Info</Nav.Link>
              <Nav.Link onClick={() => navigate('/event')}>Event</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
    )
  }

export default Navi;