const Processor = require("./Processor");
const Reader = require("./Reader");
const Table = require("./Table");
const Writer = require('./Writter');
const HTMLParser = require("./HTMLParser");
const leitor = new Reader();
const PDFWriter = require("./PDFWritter");
const escritor = new Writer();

leitor.Reader("./Planilha.csv");

async function main(){
    let data = await leitor.Reader("./Planilha.csv");
    let ProcessOfData =  Processor.Process(data);
    let users = new Table(ProcessOfData);

    let html = await HTMLParser.Parser(users)
    
    escritor.Write(Date.now()+ ".html",html);
    PDFWriter.WritePDF(Date.now()+ ".PDF",html);
}
main();