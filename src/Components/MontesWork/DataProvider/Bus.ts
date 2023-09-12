import axios from "axios"
import { BASE_URL, BusGetter } from "./Constants"


export const getBuses = async() => {
    let BusList:Array<BusGetter> = []
    await axios.get(BASE_URL+"Bus/Lista?limit=10").then(res => BusList = res.data.response)
    console.log(BusList);
    return BusList
}