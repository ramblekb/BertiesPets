import { Container, TableBody } from "@material-ui/core";
import React, { useState} from "react";
import Navmenu from '../components/Navmenu';


function ThirdPage(props){

  const [pets, setObj] = useState([]);

  // function onClick(e) {

  // const petObj = {
  //   name: name,
  //   status: petStatus,
  //   species: species,
  //   _id: id
  // }
  // load all pets from database
  function loadPets(props) {
    API.getPets().then( (response) => {
      setPets(response.data);
    });
  }
  // acts like componentDidMount, fires when the page first loads
  useEffect(() => {
    loadPets();
  }, []);


    return(
      <Container>
      {/* <button onClick={() => this.setState({ liked: true })}>
        Like
      </button> */}
      <Navmenu />
      <Container>
       {pets.map((pet) => ( 
        <Container key={pet.name} >
      
        </Container>

       ))}
       </Container>
       </Container>

     ) 
    }

export default ThirdPage;