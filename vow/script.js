let path = [];
let name = [];
let random = [];
let outputPath = [];
let outputName = [];

async function getData(){
    const fetchPromise = await fetch('data/data.json');
    const data = await fetchPromise.json();
    for (let i = 0; i < data.symbols.length; i++) {
        name.push(data.symbols[i].name);
        path.push(data.symbols[i].path);
    }
    randomIndex();
    shuffleOutput(outputPath);
    shuffleOutput(outputName);
    document.getElementById('remotedata').innerHTML = outputHTML(data);
}

function randomIndex(){
    let i = 0;
    while(i < 9){
        let randomIndex = Math.floor(Math.random() * name.length);
        if(!random.includes(randomIndex)){
            random.push(randomIndex);
            i++;
        }
    }
    console.log(random.length);
    i = 0;
    while(i < 9){
        let num = random[i];
        outputPath.push(path[num]);
        outputName.push(name[num]);
        i++;
    }
}

function shuffleOutput(array) {
    var m = array.length, t, i;
    // While there remain elements to shuffle…
    while (m) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    return array;
} 

function outputHTML(data){
    let html = `<div id="grid">`;
    for(let i = 0; i < 9; i++){
        html += `<img src="${outputPath[i]}" alt="${outputName[i]}">`;
        html += `<p>${outputName[i]}</p>`;
    }
    html += `</div>`;
    return html;
}

getData();