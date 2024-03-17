export default function ClientOrderItems({data, className}) {
    return (
        <div className="wrapper p-2 border-b border-b-gray-400">
            <div className="text-sm">
                <h3 className="text-colorSecondary font-bold">{data.clientName}</h3>
                <p>Đặt Sim: <span className="font-bold">{data.simNumber}</span></p>
                <p>Vào Ngày: {data.createdDate}</p>
            </div>
        </div>
    )
}