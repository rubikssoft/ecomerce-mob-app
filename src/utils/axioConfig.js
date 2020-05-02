import axios from "axios";
import storeConfig from "../store";
let storeDefaults = storeConfig();
let store = storeDefaults.store
// store.subscribe(listener)

function select(state) {
    return state.auth.token
}

// function listener() {
//     let token = select(store.getState())
//     axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
// }


export default function () {
    console.log('axio config called');
    let token = select(store.getState())
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    const config = {
        headers: {
            "Content-Type": 'application/json',
        },
        "baseURL": "http://192.168.100.63/WC/rubikssoft/ecom/easyshop/shopeasy-backend/api/",
        responseType: "json"
    }

    return axios.create(config);
}




