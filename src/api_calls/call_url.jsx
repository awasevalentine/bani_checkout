import axios from "axios"


export const baniBaseUrl =  axios.create({
    baseURL: process.env.REACT_APP_BANI_BASE_URL,

    // params: {
    //     api_key: process.env.REACT_APP_API_KEY,
    // }
})
export const countryCodeBaseUrl =  axios.create({
    baseURL: process.env.REACT_APP_COUNTRY_CODE_URL,
})