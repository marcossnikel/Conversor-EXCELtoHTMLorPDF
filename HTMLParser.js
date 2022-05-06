const ejs = require("ejs");

class HTMLParser {
    static async Parser(table){
        return await ejs.renderFile("./table.ejs",{header: table.header, rows: table.rows});
    }


}

module.exports = HTMLParser;