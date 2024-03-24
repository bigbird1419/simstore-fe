import axios from "axios";

export const getClientOrders = async (query = '', page = 1, limit = 10) => {
    try {
        const res = await axios.get(`http://localhost:8088/api/v1/clientorders?query=${query}&page=${page}&limit=${limit}`)
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export const postClientOrder = async (data) => {
    try {
        const res = await axios.post('http://localhost:8088/api/v1/clientorders', data)
        return res.data
    } catch (error) {
        console.log(error)
    }
}