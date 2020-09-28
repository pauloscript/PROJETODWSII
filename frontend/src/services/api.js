import axios from "axios";

const baseURL = "http://localhost:8080/calcados";

class Api {
  getCalcados() {
    return axios.get(baseURL + "/all");
  }

  createCalcado(calcado) {
    return axios.post(baseURL + "/add/", calcado);
  }

  editCalcado(calcado) {
    return axios.put(baseURL + "/update/" + calcado.id_Calcado, calcado);
  }

  deleteCalcado(id) {
    return axios.delete(baseURL + "/delete/" + id);
  }
}

export default new Api();
