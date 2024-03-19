import axios from "axios";

export const getCategorys = async () => {
    try {
        const res = await axios.get('http://localhost:8088/api/v1/categorys')
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export const postCategory = async (data) => {
    try {
        const res = await axios.post('http://localhost:8088/api/v1/categorys', data)
        return res.data
    } catch (error) {
        console.log(error)
    }
}
export const putCategory = async (id, data) => {
    try {
        const res = await axios.put(`http://localhost:8088/api/v1/categorys/${id}`, data)
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export const delCategory = async (ids = []) => {
    try {
        const res = await axios.delete('http://localhost:8088/api/v1/categorys/', ids)
        return res.data
    } catch (error) {
        console.log(error)
    }
}
export const delCategoryById = async (id) => {
    try {
        const res = await axios.delete(`http://localhost:8088/api/v1/categorys/${id}`)
        return res.data
    } catch (error) {
        console.log(error)
    }
}