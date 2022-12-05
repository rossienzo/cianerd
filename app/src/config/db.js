const fs = require("fs");
const path = require("path");

// Caminho do arquivo json
const dataFile = (path.join(__dirname, '../data/client.json')).replace(/\\/g, '/');

class DB 
{
    insert(data)
    {
        return new Promise((reject, resolve) => {
            // carrega as informações contidas no json
            const dataObject = JSON.parse(fs.readFileSync(dataFile, "utf-8"));
            let datas = dataObject;

            if(!(dataObject.indexOf("[") && dataObject.indexOf("]")))
            {
                datas = new Array;
                datas.push(dataObject);
            }
            // insere na lista 
            datas.push(data);

            // define a numeração atual do id
            data.id = datas.length;
            const dataString = JSON.stringify(datas, null, 2);
            
            // insere os dados no arquivo json
            fs.writeFileSync(dataFile, dataString, "utf-8", (err) => {
                if(err)
                {
                    reject(console.log(err));
                    return false;
                }
                
                resolve("Os dados foram salvos.");
                return true;
            });
        });
    }
}

module.exports = new DB;




