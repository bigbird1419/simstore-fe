import { createContext, useEffect, useState } from "react";

import { getCategorys } from '../services/categoryService'

export const CategoryContext = createContext()

export function CategoryProvider({ children }) {
    const [categorys, setCategorys] = useState([])

    useEffect(() => {
        const getData = async () => {
            const res = await getCategorys()
            setCategorys(res.data)
        }
        getData()
    }, [])

    const val = {
        categorys,
        setCategorys
    }

    return (
        <CategoryContext.Provider value={val}>
            {children}
        </CategoryContext.Provider>
    )
}