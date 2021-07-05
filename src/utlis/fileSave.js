import FileSaver from 'file-saver'
import XLSX from 'xlsx'

const htmlToExcel={
    exportExcel (dom,title='默认标题') {
        debugger
        let excelTitle=title;
        /* generate workbook object from table */
        var wb = XLSX.utils.table_to_book(document.querySelector(dom))
        /* get binary string as output */
        var wbout = XLSX.write(wb, { bookType: 'xlsx', bookSST: true, type: 'array' })
        try {
         FileSaver.saveAs(new Blob([wbout], { type: 'application/octet-stream' }), excelTitle+'.xlsx')
        } catch (e) { if (typeof console !== 'undefined') console.log(e, wbout) }
        return wbout
       },
}
export default htmlToExcel