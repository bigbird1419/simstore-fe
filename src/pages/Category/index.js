import { useParams } from 'react-router-dom'
import Sims from '../../components/Sims'

export default function Category() {
    const { category } = useParams()
    return (
        <div className='wrapper'>
            <div className='container'>
                <div className=''>
                    <Sims category={category} networker={category} />
                </div>
            </div>
        </div>
    )
}