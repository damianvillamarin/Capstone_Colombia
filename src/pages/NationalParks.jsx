import React, { useState } from 'react';
import {Container, Form, Row, Col, Card} from 'react-bootstrap';
import Select from "react-select";
import data from "../data/nationalparks.json";
import datastate from "../data/locations.json";
import dataparktypes from "../data/parktypes.json";

const options = data.parks;

const AppCard = (props) => {
    let currentOption = options.filter(e => e.State === props.children);

    if (currentOption.length > 0) {
        return(
            <Card style={{ width: '30rem' }} className="app-card">
               
                <Card.Body>
                    <Card.Title>
                        {currentOption[0].City}
                    </Card.Title>
                    <Card.Text>
                        {currentOption[0].Fax}
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    } else {
        return(
            <></>
        );
    }
}


const NationalParks = () => {
    const [selectedOption, setSelectedOption] = useState(0);
    
    return (
        <Container>
            <Row className="text-center">
                <h1>National Park Search</h1>
            </Row>
            <Row>
                <Col>
                    <h1>Radio Button</h1>
                    <Form>
                        <div key={`checkbox`} className="mb-3">
                            <Form.Check 
                                type={'checkbox'}
                                label={`By Location`}
                                id={`1`}
                            />
                            <Form.Check
                                disabled
                                type={'checkbox'}
                                label={`By Park Type`}
                                id={`2`}
                            />
                        </div>
                    </Form>
                </Col>
                <Col>
                    <h1>Select</h1>
                    <Form>
                        <Form.Group className="mb-3" controlId="control">
                            <Form.Label>Select a Park:</Form.Label>
                            <Select
                                onChange={setSelectedOption}
                                options={options}
                                getOptionLabel={(option) => option.State}
                                getOptionValue={(option) => option.State}
                            />
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
            <Row>
                <AppCard>
                    {selectedOption.State}
                </AppCard>
            </Row>
        </Container>
    );
}

export { NationalParks };