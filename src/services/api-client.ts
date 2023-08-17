import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "d9632292ab8e4033ac1c77c00c1c1c60"
    }
})