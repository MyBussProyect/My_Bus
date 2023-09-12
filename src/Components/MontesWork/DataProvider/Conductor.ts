import axios from "axios"
import { BASE_URL, DriverLogin } from "./Constants"

export const AddDriver = async(driver:DriverLogin) => {
    axios.post(BASE_URL + "Conductor/Crear",driver).then((res) => {
        alert(res.data.message);
    }).catch ((err) => {
        console.log(err);
        alert("Hubo un error con tu registro")
    });
}