
import {
    URL
} from "src/utils/config";

import axios from "axios";


export const createAxioConfig = (token) => {

    return axios.create({
        headers: {
            "Content-Type": 'application/json',
        },
        "baseURL": URL,
        responseType: "json",
        'Authorization': 'Bearer ' + token
    })

}