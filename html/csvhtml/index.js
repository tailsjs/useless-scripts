const debug = false;
const unicodeError = true; // Will not skip some working CSVs that contain unicode characters. (Basically the � character)
document.getElementById('csvfile').onchange = function(e) {
    if(this.files[0] == null)return;
    if(this.files[0].name.split(".")[this.files[0].name.split(".").length-1] != "csv")return alert("Это не CSV!");
    else{
        var reader = new FileReader();
        reader.readAsText(this.files[0], "UTF-8");
        const file = this.files[0];
        reader.onload = function(e){
            try{
                const result = JSON.parse(csvJSON(e.target.result));
                if(result === {})return alert("Ваш CSV файл повреждён! Скорей всего, он был обфусцирован. Пожалуйста, отремонтируйте CSV перед просмотром.")
                const names = parseNames(result[0]);
                const strings = parseStrings(result);
                document.getElementById("div1").innerHTML = `<center><table border="5"><caption>${file.name}</caption><tbody><tr>${names}</tr>${strings}</tbody></table></center>`;
            }catch(error){
                logger(`${file.name} is broken.`, 1);
                logger(error, 1);
                return alert("Ваш CSV файл повреждён! Скорей всего, он был обфусцирован. Пожалуйста, отремонтируйте CSV перед просмотром.");
            };
        };
    };
};

function parseNames(array){
    const keys = Object.keys(array);
    let parsed = "<th>LINE</th>";
    for(let i = 0; i < keys.length; i++){
        parsed += `<th>${keys[i]}</th>`;
    };
    return parsed;
};
function parseStrings(array){
    const keys = Object.keys(array[0]);
    let parsed = "";
    for(let i = 0; i < array.length; i++){
        let string = `<td>${i+1}</td>`;
        var l = i;
        if(keys.length == Object.keys(array[i]).length){
            for(let i = 0; i < keys.length; i++)string += `<td>${array[l][keys[i]]}</td>`;
            parsed += `<tr>${string}</tr>`;
        }else if(Object.keys(array[i]).length == (1 || 0)){
            for(let i = 0; i < keys.length; i++)string += `<td> </td>`;
            parsed += `<tr>${string}</tr>`;
            logger(`Empty line ${i+1}`, 2);
        }else if(keys.length != Object.keys(array[i]).length){
            for(let i = 0; i < keys.length; i++)string += `<td> </td>`;
            parsed += `<tr>${string}</tr>`;
            logger(`Broken line ${i+1}`, 2)
        };
    };
    return parsed;
};
function csvJSON(csv){
    if(hasUnicode(csv) && !unicodeError)logger("Seems like CSV broken.", 2);
    if(hasUnicode(csv) && unicodeError)return {};
    let lines = csv.split("\n");
    let result = [];
    let headers = lines[0].split(",");
    for(let i = 1; i < lines.length; i++){
        let obj = {};
        let currentline = lines[i].split(",");
        for(let j = 0; j < headers.length; j++){
            obj[headers[j]] = currentline[j];
        };
        result.push(obj);
    };
    return JSON.stringify(result).replace(/\\\"|\\r/gi, "");
};

function logger(text, value = 0){
    if(!debug)return;
    const sub = ["LOG", "ERROR", "WARNING"];
    if(value < 0 || value > sub.length || isNaN(value))return console.log(`[ LOGGER ERROR ] >> Value must be in range from 0 to ${sub.length - 1}!`);
    if(typeof text == "object")text = JSON.stringify(text);
    return console.log(`[ ${sub[value]} ] >> ${text}`);
};
function hasUnicode(str) {
    for (var i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) > 127) return true;
    };
    return false;
};