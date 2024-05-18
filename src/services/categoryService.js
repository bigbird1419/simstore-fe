import axios from "axios";

export const getCategorys = async () => {
    try {
        const res = await axios.get('https://simstore.osc-fr1.scalingo.io/api/v1/categorys')
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export const getCategoryById = async (id) => {
    try {
        const res = await axios.get(`https://simstore.osc-fr1.scalingo.io/api/v1/categorys/${id}`)
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export const postCategory = async (data) => {
    try {
        const res = await axios.post('https://simstore.osc-fr1.scalingo.io/api/v1/categorys', data)
        return res.data
    } catch (error) {
        console.log(error)
    }
}
export const putCategory = async (id, data) => {
    try {
        const res = await axios.put(`https://simstore.osc-fr1.scalingo.io/api/v1/categorys/${id}`, data)
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export const delCategory = async (ids = []) => {
    try {
        const res = await axios.delete('https://simstore.osc-fr1.scalingo.io/api/v1/categorys/', ids)
        return res.data
    } catch (error) {
        console.log(error)
    }
}
export const delCategoryById = async (id) => {
    try {
        const res = await axios.delete(`https://simstore.osc-fr1.scalingo.io/api/v1/categorys/${id}`)
        return res.data
    } catch (error) {
        console.log(error)
    }
}