import classNames from "classnames/bind";
import { memo, useEffect, useState } from "react";

import styles from './Sims.module.css'
import Pagination from '../Pagination'
import { getSimsByCategory } from '../../services/simService'
import Sim from "../Sim";
import Loader from "../Loader";

const cx = classNames.bind(styles)

function Sims({ query, category = '', networker = '' }) {
    const [sims, setSims] = useState([])
    const [totalPage, setTotalPage] = useState(0)
    const [curPage, setCurPage] = useState(1)
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        const getData = async () => {
            const res = await getSimsByCategory(query, curPage, 10, category, networker)
            setSims(res.data)
            setTotalPage(res.totalPage)
            setIsLoading(false)
        }
        getData()
    }, [curPage, query, category, networker])

    return (
        <div className="wrapper">
            {isLoading ? <Loader /> :
                <div className={cx('my-4')}>
                    <div>
                        {sims.length > 0 ?
                            <div className="row">
                                {sims.map((sim) => (
                                    <div className="col-6" key={sim.id}>
                                        <Sim sim={sim} />
                                    </div>
                                ))}
                            </div>
                            :
                            <h1>Không còn sim loại này</h1>
                        }
                    </div>
                    <div>
                        <Pagination curPage={curPage} totalPage={totalPage} setCurPage={setCurPage} />
                    </div>
                </div>}
        </div>
    )
}

export default memo(Sims)