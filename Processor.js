class Processor{
    static Process(data){
        let spliteRows = data.split("\r\n");
        let rows = [];
       
        spliteRows.forEach(row =>{
            let arr = row.split(",");
            rows.push(arr);
        });

        return rows;
    }
}

module.exports = Processor;