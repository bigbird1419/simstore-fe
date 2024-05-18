import Button from '../components/Button'
import { saveAs } from 'file-saver';
import { utils, write } from 'xlsx';

export const ExportCSV = ({ csvData, fileName }) => {

    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.xlsx';

    const exportToCSV = (csvData, fileName) => {
        const ws = utils.json_to_sheet(csvData);
        const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
        const excelBuffer = write(wb, { bookType: 'xlsx', type: 'array' });
        const data = new Blob([excelBuffer], { type: fileType });
        saveAs(data, fileName + fileExtension);
    }

    return (
        <Button primary onClick={() => exportToCSV(csvData, fileName)}>Xuất PDF</Button>
    )
}