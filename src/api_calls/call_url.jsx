import axios from "axios"


export const baniBaseUrl =  axios.create({
    baseURL: process.env.REACT_APP_BANI_BASE_URL,
    // Headers: {
    //     Accept: 'application/json'
    // },
    // params: {
    //     api_key: process.env.REACT_APP_THE_MOVIE_KEY,
    //     append_to_response: "videos"
    // }
})
export const countryCodeBaseUrl =  axios.create({
    baseURL: process.env.REACT_APP_COUNTRY_CODE_URL,
    // params: {
    //     api_key: process.env.REACT_APP_THE_MOVIE_KEY,
    //     append_to_response: "videos"
    // }
})