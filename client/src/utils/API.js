import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  // Gets all pets
  getpets: function() {
    return axios.get("/api/pets");
  },
  // Gets the pet with the given id
  getpet: function(id) {
    return axios.get("/api/pets/" + id);
  },
  // Deletes the pet with the given id
  deletepet: function(id) {
    return axios.delete("/api/pets/" + id);
  },
  // Saves a pet to the database
  savepet: function(petData) {
    return axios.post("/api/pets", petData);
  }
};
