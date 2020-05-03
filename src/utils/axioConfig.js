import axios from "axios";
import storeConfig from "../store";
let storeDefaults = storeConfig();
let store = storeDefaults.store

function select(state) {
    return state.auth.token
}




export default function () {
    console.log('axio config called');
    let token = select(store.getState())
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    const config = {
        headers: {
            "Content-Type": 'application/json',
        },

        // "baseURL": "http://192.168.100.63/WC/rubikssoft/ecom/easyshop/shopeasy-backend/api/",
        "baseURL": " https://www.rubikssoft.com/shopeasy-backend/api/",
        responseType: "json"
    }

    return axios.create(config);
}




