import classNames from "classnames/bind";
import { useEffect, useState } from "react";

import styles from './Sims.module.css'
import Pagination from '../Pagination'
import { getSims } from '../../services/simService'
import Sim from "../Sim";
import Loader from "../Loader";

const cx = classNames.bind(styles)

function Sims({ query, category = '' }) {
    const [sims, setSims] = useState([])
    const [totalPage, setTotalPage] = useState(0)
    const [curPage, setCurPage] = useState(1)
    const [direction, setDirection] = useState('asc')
    const [isLoading, setIsLoading] = useState(true)

    const getData = async (curPage, query, category, direction) => {
        setIsLoading(true)
        const res = await getSims(query, curPage, 10, category, category, 'price', direction)
        setSims(res.data)
        setTotalPage(res.totalPage)
        setIsLoading(false)
    }

    useEffect(() => {
        getData(curPage, query, category, direction)
    }, [curPage, query, category, direction])

    return (
        <div className="wrapper">
            {isLoading ? <Loader /> :
                <div className={cx('my-4')}>
                    <div>
                        {category.length === 0 &&
                            <div className="row">
                                <div className="col-6">
                                    {/* <select>
                                    <option>Sắp xếp theo giá</option>
                                    <option>Sắp xếp theo nhà mạng</option>
                                </select> */}
                                </div>
                                <div className="col-6">
                                    <div className="flex justify-end mb-4">
                                        <select className=" rounded-md border-colorPrimary border-1 outline-none" onChange={e => setDirection(e.target.value)} value={direction}>
                                            <option value={'asc'}>Giá thấp đến cao</option>
                                            <option value={'desc'}>Giá cao đến thấp</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        }
                        {sims?.length > 0 ?
                            <div className="row">
                                {sims?.map((sim) => (
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12" key={sim.id}>
                                        <Sim sim={sim} />
                                    </div>
                                ))}
                            </div>
                            :
                            <h1 className="text-center text-xl font-bold text-colorSecondary">Không còn sim loại này</h1>
                        }
                    </div>
                    <div>
                        <Pagination curPage={curPage} totalPage={totalPage} setCurPage={setCurPage} />
                    </div>
                </div>}
        </div>
    )
}

export default Sims