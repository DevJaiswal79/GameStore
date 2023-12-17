import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: "fc324161169e43cbb2a7a4ac961a47ad"
    }
})