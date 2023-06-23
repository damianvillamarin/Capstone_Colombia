import React, { useState } from 'react';
import {Container, Form} from 'react-bootstrap';
import Select from "react-select";
import data from "../data/mountains.json"
import Card from 'react-bootstrap/Card';

const options = data.mountains;

const AppCard = (props) => {
    let currentOption = options.filter(e => e.name === props.children);

    if (currentOption.length > 0) {
        return(
            <Card style={{ width: '30rem' }} className="app-card">
                <Card.Img variant="top" src={require(`../images/mountains/${currentOption[0].img}`)} />
                <Card.Body>
                    <Card.Title>
                        {currentOption[0].name}
                    </Card.Title>
                    <Card.Text>
                        {currentOption[0].desc}
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

const Mountains = () => {
    const [selectedOption, setSelectedOption] = useState(0);
    
    return (
        <Container>
            <Form>
                <Form.Group className="mb-3" controlId="control">
                    <Form.Label>Select a mountain:</Form.Label>
                    <Select
                        onChange={setSelectedOption}
                        options={options}
                        getOptionLabel={(option) => option.name}
                        getOptionValue={(option) => option.name}
                    />
                </Form.Group>
            </Form>
            <AppCard>
                {selectedOption.name}
            </AppCard>
        </Container>
    );
}

export { Mountains };