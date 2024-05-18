import axios from 'axios';
// import * as httpRequest from '../utils/httpRequest'

export const getNetworkers = async () => {
    try {
        const res = await axios.get('https://simstore.osc-fr1.scalingo.io/api/v1/networkers')
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export const getNetworkerById = async (id) => {
    try {
        const res = await axios.get(`https://simstore.osc-fr1.scalingo.io/api/v1/networkers/${id}`)
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export const postNetWorker = async (data) => {
    try {
        const res = await axios.post('https://simstore.osc-fr1.scalingo.io/api/v1/networkers', data)
        return res.data
    } catch (error) {
        console.log(error)
    }
}
export const putNetWorker = async (id, data) => {
    try {
        const res = await axios.put(`https://simstore.osc-fr1.scalingo.io/api/v1/networkers/${id}`, data)
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export const deleNetworker = async (ids) => {
    try {
        const res = await axios.delete('https://simstore.osc-fr1.scalingo.io/api/v1/networkers/', ids)
        return res.data
    } catch (error) {
        console.log(error)
    }
}
export const deleNetworkerById = async (id) => {
    try {
        const res = await axios.delete(`https://simstore.osc-fr1.scalingo.io/api/v1/networkers/${id}`)
        return res.data
    } catch (error) {
        console.log(error)
    }
}