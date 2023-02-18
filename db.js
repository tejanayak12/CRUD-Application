const sqlite3 = require("sqlite3");

const db = new sqlite3.Database(
    "./crud.db",

    sqlite3.OPEN_READWRITE,
    (error) => {
        if (error) {
            console.log("DB ERROR................");
            console.log("error" , error)
        } else {
            console.log("DB WAS CONNECTED>>>>>>>>>>>")
        }
    } 

);

module.exports = db;