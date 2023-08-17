import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: "900d52558fff46cf96f5c00c01a34a74"
    }
})