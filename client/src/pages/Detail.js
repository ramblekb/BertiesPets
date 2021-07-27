import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { Input, TextArea, FormBtn } from "../components/Form";

import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { makeStyles } from "@material-ui/core/styles";
import {
Button,
Checkbox
} from "@material-ui/core";
// import Checkboxes from "../components/Checkboxes";
import CheckboxesGroup from "../components/CheckboxesGroup";
function Detail(props) {
  const [pet, setPet] = useState({})
  const [pets, setPets] = useState([])

  const [formObject, setFormObject] = useState({})

  // Load all bets and store them with setBets
  useEffect(() => {
    loadPets()
  }, [])

  // Loads all bets and sets them to bets
  function loadPets() {
    API.getPets()
      .then(res => 
        setPets(res.data)
      )
      .catch(err => console.log(err));
  };
  // When this component mounts, grab the bet with the _id of props.match.params.id
  // e.g. localhost:3000/bets/599dcb67f0f16317844583fc
  const {id} = useParams()
  useEffect(() => {
    API.getPet(id)
      .then(res => setPet(res.data))
      .catch(err => console.log(err));
  }, [])

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.status) {
      API.savePet({
        status: formObject.status
      })
        .then(res => loadPets())
        .catch(err => console.log(err));
    }
  };

  function handleButtonClick(event) {
    event.preventDefault();
    if (formObject.status === true) {
      API.savePet({
        status: formObject.status
      })
        .then(res => loadPets())
        .catch(err => console.log(err));
    }
  };

  return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {pet.name} by {pet.status}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Synopsis</h1>
              <p>
                {pet.synopsis}
              </p>
            </article>
            {/* <Button color="secondary" onClick={handleButtonClick}>AVAILABLE</Button>
<Button color="secondary">PENDING</Button>
<Button color="secondary">SOLD</Button>
<Button>UPDATE</Button> */}
<CheckboxesGroup />
<FormBtn
                disabled={!(formObject.name && formObject.status)}
                onClick={handleFormSubmit}
              >
                Submit Pet
              </FormBtn>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Pets</Link>
          </Col>
        </Row>
      </Container>
    );
  }


export default Detail;
