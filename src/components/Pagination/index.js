import classNames from "classnames/bind"
import { memo, useCallback, useEffect, useState } from "react"

import styles from './Pagination.module.css'
import Button from "../Button"

const cx = classNames.bind(styles)

function Pagination({ totalPage, curPage, setCurPage = () => { } }) {
    const [pages, setPages] = useState([])

    const handlePrevPage = useCallback(() => {
        if (curPage > 1) {
            setCurPage(val => val - 1)
        }
    }, [curPage, setCurPage])
    const handleNextPage = useCallback(() => {
        if (curPage < totalPage + 1) {
            setCurPage(val => val + 1)
        }
    }, [curPage, setCurPage, totalPage])
    const handleSetCurPage = useCallback((page) => {
        setCurPage(page)
    }, [setCurPage])

    useEffect(() => {
        const arr = []
        for (let i = curPage - 2; i <= totalPage; i++) {
            if (arr.length < 5 && i > 0) {
                arr.push(i)
            }
        }
        setPages(arr)
    }, [totalPage, curPage])

    return (
        <div className="wrapper">
            <div className="container">
                {pages.length > 0 &&
                    <div className="mt-6 flex justify-end">
                        <Button normal onClick={() => handlePrevPage()}
                            className={cx('block text-sm px-3 py-1 m-2', curPage === 1 ? 'cursor-not-allowed' : 'bg-colorPrimary text-white')}
                        >
                            <i className="fa-solid fa-angle-left"></i>
                        </Button>

                        {pages.map((page) => (
                            <Button key={page} normal onClick={() => handleSetCurPage(page)}
                                className={cx('block text-sm px-3 py-1 m-2', page === curPage ? 'bg-colorPrimary text-white' : 'border border-2 border-cyan-400')}
                            >
                                {page}
                            </Button>
                        ))}
                        <Button normal onClick={() => handleNextPage()}
                            className={cx('block text-sm px-3 py-1 m-2', curPage === totalPage + 1 ? 'cursor-not-allowed' : 'bg-colorPrimary text-white')}
                        >
                            <i className="fa-solid fa-angle-right"></i>
                        </Button>
                    </div>
                }
            </div>
        </div>
    )
}

export default memo(Pagination)