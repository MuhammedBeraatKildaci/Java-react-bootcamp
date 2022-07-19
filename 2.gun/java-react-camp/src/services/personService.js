import axios from "axios";

export default class PersonService {
  getPerson() {
    return axios.get("http://localhost:8080/");
  }
}
