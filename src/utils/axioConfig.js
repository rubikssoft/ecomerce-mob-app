import axios from "axios";
import storeConfig from "./store";

export default function () {
    let storeDefaults = storeConfig();
    let store = storeDefaults.store
    const token = store.auth.token ? store.auth.token : null;
    const config = {
        headers: {
            "Content-Type": 'application/json',
        },
        "baseURL": "localhost/WC/rubikssoft/ecom/easyshop/shopeasy-backend/api/",
        responseType: "json"
    }

    if (token) {
        config.headers['Authorization'] = 'Bearer ' + token;
    }
    return axios.create(config);
}




