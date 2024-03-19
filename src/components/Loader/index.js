import { ClipLoader } from 'react-spinners'

export default function Loader() {
    return (
        <div
            className='fixed top-0 right-0 bottom-0 left-0 flex justify-center items-center z-50'
        >
            <ClipLoader color="#4e6bff" speedMultiplier={1} />
        </div>
    )
}