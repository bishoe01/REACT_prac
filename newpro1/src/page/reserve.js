import { Button, Card, Col, Container, Nav, Row } from "react-bootstrap";
import { Outlet, useNavigate } from "react-router-dom";
import soft from '../img/software.png'
function Reserve(){
    let navigate = useNavigate();
    return(
        <div>
            <h2>예약</h2>
        <Container>
            <Row className="justify-content-md-center">
                <Col>
        <Card style={{ width: '18rem' ,paddingTop: '10rem' }}>
        <Card.Img variant="top" src="./img/software" />
        <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={soft} />
        <Card.Body>
        <Card.Title>소프트웨어 융합대학</Card.Title>
        <Card.Text>
          <span>소프트웨어학부, ICT융합학부</span>
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>
        </Col>
        </Row>
        </Container>

        <Outlet></Outlet>
    </div>
    )

}


export default Reserve;