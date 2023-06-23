import React, { useState } from 'react';
import {Container, Form} from 'react-bootstrap';
import Select from "react-select";
import data from "../data/nationalparks.json";
import datastate from "../data/locations.json";
import dataparktypes from "../data/parktypes.json";
import Card from 'react-bootstrap/Card';

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
            <AppCard>
                {selectedOption.State}
            </AppCard>
        </Container>
    );
}

export { NationalParks };