import axios from "axios";

export const getClientOrders = async (query = '', page = 1, limit = 10, sort = 'id', direction = 'asc') => {
    try {
        const res = await axios.get(`https://simstore.osc-fr1.scalingo.io/api/v1/clientorders?query=${query}&page=${page}&limit=${limit}&sort=${sort}&direction=${direction}`)
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export const getTotalClientOrders = async () => {
    try {
        const res = await axios.get('https://simstore.osc-fr1.scalingo.io/api/v1/clientorders/count')
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export const getClientOrdersById = async (id) => {
    try {
        const res = await axios.get(`https://simstore.osc-fr1.scalingo.io/api/v1/clientorders/${id}`)
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export const getStatistical = async () => {
    try {
        const res = await axios.get('https://simstore.osc-fr1.scalingo.io/api/v1/clientorders/statistical/')
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export const getStatisticalByNetworker = async () => {
    try {
        const res = await axios.get('https://simstore.osc-fr1.scalingo.io/api/v1/clientorders/statistical/sim')
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export const postClientOrder = async (data) => {
    try {
        const res = await axios.post('https://simstore.osc-fr1.scalingo.io/api/v1/clientorders', data)
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export const putClientOrder = async (id, data) => {
    try {
        const res = await axios.put(`https://simstore.osc-fr1.scalingo.io/api/v1/clientorders/${id}`, data)
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export const deleClientOrderById = async (id) => {
    try {
        const res = axios.delete(`https://simstore.osc-fr1.scalingo.io/api/v1/clientorders/${id}`)
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export const delClientOrders = async (ids = []) => {
    try {
        const res = await axios.delete('https://simstore.osc-fr1.scalingo.io/api/v1/clientorders', ids)
        return res.data
    } catch (error) {
        console.log(error)
    }
}