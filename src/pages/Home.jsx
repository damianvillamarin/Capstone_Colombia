import React from "react";
import { Container, Row, Col, Card, CardGroup } from 'react-bootstrap';
import './Home.css';

const Home = () => {
    return (
        <Container>
            <Row>
                <Col className="text-center">
                    <h1>Find your park</h1>
                </Col>
            </Row>
            <Row>
                <Col className="text-center">
                <CardGroup>
                    <Card style={{ margin: 30 }} className="app-card">
                        <Card.Img style={{ height: '250px' }} variant="top" src={require(`../images/banner/mountains_banner.jpg`)}/>
                        <Card.Body>
                            <Card.Title>
                                Search Mountains
                            </Card.Title>
                        </Card.Body>
                    </Card>
    
                    <Card style={{ margin: 30 }}>
                        <Card.Img style={{ height: '250px' }} variant="top" src={require(`../images/banner/national_park_banner.png`)}/>
                        <Card.Body>
                            <Card.Title>
                                Explore National Parks
                            </Card.Title>
                        </Card.Body>
                    </Card>
                </CardGroup>
                </Col>
            </Row>
            <Row>
                <Col className="text-center">
                    <h1>About us</h1>
                    <p className="paragraph">Somos una compañía cuyo propósito es publicitar el uso de los parque naturales del país. El objetivo es lograr que las personas los conozcan y puedan encontrar el tipo de parque que mas se acomode a sus gustos. Si sigue nuestras guías podrá encontrar la gran variedad de parques disponibles. La belleza de nuestras montañas le ayudara a encontrar paz y felicidad</p>
                </Col>
            </Row>
        </Container>
    );
}

export { Home };