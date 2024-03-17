import Button from '../../../../components/Button'
import routes from '../../../../constants/routes'
import HeaderBannerImg from '../../../../assets/banner.gif'

export default function HeaderBanner() {
    return (
        <div className="wrapper">
            <Button to={routes.home}>
                <img className='w-100' src={HeaderBannerImg} alt={routes.home} />
            </Button>
        </div>
    )
}