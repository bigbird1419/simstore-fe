import axios from "axios";

export const getClientOrders = async (query = '', page = 1, limit = 10) => {
    try {
        const res = await axios.get(`http://localhost:8088/api/v1/clientorders?query=${query}&page=${page}&limit=${limit}`)
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export const getClientOrdersById = async (id) => {
    try {
        const res = await axios.get(`http://localhost:8088/api/v1/clientorders/${id}`)
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

export const putClientOrder = async (id, data) => {
    try {
        const res = await axios.put(`http://localhost:8088/api/v1/clientorders/${id}`, data)
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export const deleClientOrderById = async (id) => {
    try {
        const res = axios.delete(`http://localhost:8088/api/v1/clientorders/${id}`)
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export const delClientOrders = async (ids = []) => {
    try {
        const res = await axios.delete('http://localhost:8088/api/v1/clientorders', ids)
        return res.data
    } catch (error) {
        console.log(error)
    }
}