let path = [];
let name = [];
let random = [];
let outputPath = [];
let outputName = [];

async function getData(){
    // get data
    const fetchPromise = await fetch('data/data.json');
    const data = await fetchPromise.json();
    for (let i = 0; i < data.symbols.length; i++) {
        name.push(data.symbols[i].name);
        path.push(data.symbols[i].path);
    }
    // randomly select data to use for grid
    randomIndex();
    document.getElementById('remotedata').innerHTML = outputHTML(data);
    // ramdomize display
    let numsName = [1,3,5,7,9,11,13,15,17];
    let nums = [0,2,4,6,8,10,12,14,16];   
    nums = shuffleOutput(nums);
    // update display
    let gridArray = [document.querySelectorAll('.symbol')];
    let names = [document.querySelectorAll('.name')];
    for(let i = 0; i < 9; i++){
        let randomIndex = nums[i];
        gridArray[0][i].style.order = randomIndex;
    }
    for(let i = 0; i < 9; i++){
        let randomIndex = numsName[i];
        names[0][i].style.order = randomIndex;
    }
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
        let pathId = `path_${outputName[i]}`;
        let nameId = `name_${outputName[i]}`;
        html += `<img id="${pathId}" class="symbol" src="${outputPath[i]}" alt="${outputName[i]}">`;
        html += `<p id="${nameId}" class="name">${outputName[i]}</p>`;
    }
    html += `</div>`;
    return html;
}

async function features(){
    await getData();

}

const start = document.querySelector('#start');

start.addEventListener('click', function(){
    features();
    start.style.display = 'none';
})

// let time = 0;
// setInterval(displayTime, 1000);

// function displayTime() {
//     time += 1;
//     document.getElementById("demo").innerHTML = `Time: ${time}`;
// }