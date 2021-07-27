import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import { makeStyles } from "@material-ui/core/styles";
import {
Button,
Checkbox
} from "@material-ui/core";

function Pets() {
  // Setting our component's initial state
  const [pets, setPets] = useState([])
  const [formObject, setFormObject] = useState({})

  // Load all pets and store them with setPets
  useEffect(() => {
    loadPets()
  }, [])

  // Loads all pets and sets them to pets
  function loadPets() {
    API.getPets()
      .then(res => 
        setPets(res.data)
      )
      .catch(err => console.log(err));
  };

  // Deletes a pet from the database with a given id, then reloads pets from the db
  function deletePet(status) {
    API.deletePet(status)
      .then(res => loadPets())
      .catch(err => console.log(err));
  }

  function updatePet(status) {
    API.updatePet(status)
      .then(res => loadPets())
      .catch(err => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  // When the form is submitted, use the API.savePet method to save the pet data
  // Then reload pets from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.name && formObject.status) {
      API.savePet({
        name: formObject.name,
        // species: formObject.species,
        status: formObject.status
      })
        .then(res => loadPets())
        .catch(err => console.log(err));
    }

    
  };

    return (
      <Container fluid>
        <Row>
        {/* list of available pets */}
          <Col size="md-6">
            <Jumbotron>
              <h2>Available Pets</h2>
            </Jumbotron>
            
 <List>
                {pets.map(pet => (
                  <ListItem key={pet.name}>
                    <Link to={"/pets/" + pet._id}>
                    
                      <strong>
                        {pet.name} by {pet.status}
                      </strong>
                    </Link>
                    {/* <DeleteBtn onClick={() => updatePet(pet._id)} /> */}
                    <DeleteBtn onClick={() => deletePet(pet._id)} />
                  </ListItem>
                ))}
              </List>
            
            
          </Col>
{/* submit form */}
<form>
{/* <TextArea
                onChange={handleInputChange}
                name="synopsis"
                placeholder="Synopsis (Optional)"
              /> */}
              {/* <FormBtn
                onChange={!(formObject.name && formObject.status)}
                onClick={handleFormSubmit}
              >
                Update Status
              </FormBtn> */}
            </form>

          {/* list of sold pets */}
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h2>SOLD</h2>
            </Jumbotron>
            {pets.length ? (
              <List>
                {pets.map(pet => (
                  <ListItem key={pet.name}>
                    <Link to={"/pets/" + pet.status}>
                    
                      <strong>
                        {pet.name} by {pet.status}
                      </strong>
                    </Link>
                    {/* <DeleteBtn onClick={() => deletePet(pet._id)} /> */}
                    <DeleteBtn onClick={() => deletePet(pet._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }


export default Pets;
