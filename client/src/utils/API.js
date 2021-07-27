import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  // Gets all pets
  getPets: function() {
    return axios.get("/api/pets");
  },
  // Gets the pet with the given id
  getPet: function(id) {
    return axios.get("/api/pets/" + id);
  },
  // Deletes the pet with the given id
  deletePet: function(id) {
    return axios.delete("/api/pets/" + id);
  },
  // Saves a pet to the database
  savePet: function(petData) {
    return axios.post("/api/pets", petData);
  },
  updatePet: function(id, petData) {
    return axios.put("/api/pets/" + id, petData)
  }
};
