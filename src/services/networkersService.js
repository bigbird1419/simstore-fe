import axios from 'axios';
// import * as httpRequest from '../utils/httpRequest'

export const getNetworkers = async () => {
    try {
        const res = await axios.get('http://localhost:8088/api/v1/networkers')
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export const createNetWorker = async (data) => {
    try {
        const res = await axios.post('http://localhost:8088/api/v1/networkers', data)
        return res.data
    } catch (error) {
        console.log(error)
    }
}
export const saveNetWorker = async (id, data) => {
    try {
        const res = await axios.put(`http://localhost:8088/api/v1/networkers/${id}`, data)
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export const deleNetworker = async (ids) => {
    try {
        const res = await axios.delete('http://localhost:8088/api/v1/networkers/', ids)
        return res.data
    } catch (error) {
        console.log(error)
    }
}
export const deleNetworkerById = async (id) => {
    try {
        const res = await axios.delete(`http://localhost:8088/api/v1/networkers/${id}`)
        return res.data
    } catch (error) {
        console.log(error)
    }
}