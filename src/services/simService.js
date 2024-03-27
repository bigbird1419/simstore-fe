import axios from "axios";

export const getSims = async (query = '', page = 1, limit = 10, categoryCode = '', networkerCode = '', sort = 'id', direction = 'asc') => {
    try {
        const res = await axios.get(`http://localhost:8088/api/v1/sims?query=${query}&page=${page}&limit=${limit}&categoryCode=${categoryCode}&networkerCode=${networkerCode}&sort=${sort}&direction=${direction}`)
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export const getTotalSim = async () => {
    try {
        const res = await axios.get('http://localhost:8088/api/v1/sims/count')
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export const postSim = async (data) => {
    try {
        const res = await axios.post('http://localhost:8088/api/v1/sims', data)
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export const putSim = async (id, data) => {
    try {
        const res = await axios.put(`http://localhost:8088/api/v1/sims/${id}`, data)
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export const delSims = async (ids = []) => {
    try {
        const res = await axios.delete('http://localhost:8088/api/v1/sims', ids)
        return res.data
    } catch (error) {
        console.log(error)
    }
}
export const delSimById = async (id) => {
    try {
        const res = await axios.delete(`http://localhost:8088/api/v1/sims/${id}`)
        return res.data
    } catch (error) {
        console.log(error)
    }
}