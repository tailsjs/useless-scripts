document.getElementById('csvfile').onchange = function(e) {
    if(this.files[0].name.split(".")[this.files[0].name.split(".").length-1] != "csv")return alert("Это не CSV!");
    else{
        var reader = new FileReader();
        reader.readAsText(this.files[0], "UTF-8");
        const file = this.files[0];
        reader.onload = function(e){
            const result = JSON.parse(csvJSON(e.target.result));
            const names = parseNames(result[2]);
            const strings = parseStrings(result);
            document.getElementById("div1").innerHTML = `<center><table border="1"><caption>${file.name}</caption><tbody><tr>${names}</tr>${strings}</tbody></table></center>`;
        };
    };
};

function parseNames(array){
    const keys = Object.keys(array);
    let parsed = "";
    for(let i = 0; i < keys.length; i++){
        parsed += `<th>${keys[i]}</th>`;
    };
    return parsed;
};
function parseStrings(array){
    const keys = Object.keys(array[0]);
    let parsed = "";
    for(let i = 0; i < array.length; i++){
        let string = "";
        var l = i;
        if(keys.length == Object.keys(array[i]).length){
        for(let i = 0; i < keys.length; i++){
            string += `<td>${array[l][keys[i]]}</td>`;
        };
        parsed += `<tr>${string}</tr>`;
        }else{
            console.log(`Empty line ${i}`);
        };
    };
    return parsed;
};
function csvJSON(csv){
    var lines=csv.split("\n");
    var result = [];
    var headers=lines[0].split(",");
    for(var i=1;i<lines.length;i++){
        var obj = {};
        var currentline=lines[i].split(",");
        for(var j=0;j<headers.length;j++){
            obj[headers[j]] = currentline[j];
        };
        result.push(obj);
    };
    return JSON.stringify(result).replace(/\\\"|\\r/gi, "");
};