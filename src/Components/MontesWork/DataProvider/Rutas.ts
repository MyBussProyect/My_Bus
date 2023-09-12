import axios from "axios";

const BASE_URL = "http://mybuss.somee.com/Ruta/";

export const getRutes = async() => {
    const response =await axios.get(BASE_URL + "Lista").then(response => response.data)
    return await response.response
}