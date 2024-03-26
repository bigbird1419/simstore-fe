import moment from 'moment'

export default function FormatDate({ createdDate }) {
    const date = moment(createdDate).format('DD/MM/YYYY - HH:mm')
    return (
        <span>{date}</span>
    )
}