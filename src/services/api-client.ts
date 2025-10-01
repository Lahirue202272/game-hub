import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'b9a6a45f5fd14296bf15386bc91989e6'
    }
})