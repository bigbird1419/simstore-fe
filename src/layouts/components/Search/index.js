import classNames from "classnames/bind"

import styles from './Search.module.css'
import Button from "../../../components/Button"

const cx = classNames.bind(styles)

const contentSearch = [
    'Tìm sim có số 6789 bạn hãy gõ 6789',
    'Tìm sim có đầu 090 đuôi 6789 hãy gõ 090*6789',
    'Tìm sim bắt đầu bằng 0914 đuôi bất kỳ, hãy gõ: 0914*'
]

export default function Search() {
    return (
        <div className="wrapper">
            <div className="container">
                <div className={cx('search-box')}>
                    <div className="bg-colorPrimary border-b border-white">
                        <h1 className="text-white text-md uppercase font-semibold text-center pt-2 pb-2 mb-2">
                            SIM SỐ ĐẸP - Uy Tín Giá Rẻ Nhất
                        </h1>
                    </div>
                    <div className="bg-colorPrimary p-3">
                        <form className="relative border border-white">
                            <input className="w-100 px-3 py-1 outline-none text-md" type="text" placeholder="Nhập số cần tìm" required />
                            <Button
                                className={cx('bg-colorSemiPrimary absolute top-1/2 right-0 translate-y-[-50%] px-3 py-1 text-white text-md font-semibold')}
                            >
                                Tìm Sim
                            </Button>
                        </form>
                        <ul className="mt-2 list-disc pl-3">
                            {contentSearch.map((item, i) => (
                                <li className="text-sm text-white" key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}