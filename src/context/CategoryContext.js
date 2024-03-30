import { createContext, useEffect, useState } from "react";

import { getCategorys, postCategory, putCategory, delCategoryById } from '../services/categoryService'

export const CategoryContext = createContext()

export function CategoryProvider({ children }) {
    const [categorys, setCategorys] = useState([])

    const getData = async () => {
        const res = await getCategorys()
        setCategorys(res?.data)
    }
    const postData = async (data) => {
        const res = await postCategory(data)
        getData()
        return res
    }
    const putData = async (id, data) => {
        const res = await putCategory(id, data)
        getData()
        return res
    }
    const deleteData = async (id) => {
        const res = await delCategoryById(id)
        getData()
        return res
    }

    useEffect(() => {
        getData()
    }, [])

    const val = {
        categorys,
        setCategorys,
        postData,
        putData,
        deleteData
    }

    return (
        <CategoryContext.Provider value={val}>
            {children}
        </CategoryContext.Provider>
    )
}