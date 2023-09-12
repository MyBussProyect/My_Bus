import axios from "axios"
import { BASE_URL, UserLogin } from "./Constants"



export const AddUser = async (user:UserLogin) => {
   await axios.post(`${BASE_URL}User/Add`,user).then((res) => {
        alert(res.data.message);
   }).catch((err) => {
        alert(err.response.data.message)
   })
}
