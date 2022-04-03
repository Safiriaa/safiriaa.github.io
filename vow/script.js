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
        let pathId = `path_${i}`;
        let nameId = `name_${i}`;
        html += `<img id="${pathId}" class="symbol" src="${outputPath[i]}" alt="${outputName[i]}">`;
        html += `<p id="${nameId}" class="name">${outputName[i]}</p>`;
    }
    html += `</div>`;
    return html;
}

// 
async function features(){
    await getData();
    let pathClick;
    let nameClick;
    let hideIndex;
    detectClicked();
    // if match, hide, else reset board
    // if all hide then win
}

function detectClicked(){
    const path_0 = document.querySelector('#path_0');
    const path_1 = document.querySelector('#path_1');
    const path_2 = document.querySelector('#path_2');
    const path_3 = document.querySelector('#path_3');
    const path_4 = document.querySelector('#path_4');
    const path_5 = document.querySelector('#path_5');
    const path_6 = document.querySelector('#path_6');
    const path_7 = document.querySelector('#path_7');
    const path_8 = document.querySelector('#path_8');
    const name_0 = document.querySelector('#name_0');
    const name_1 = document.querySelector('#name_1');
    const name_2 = document.querySelector('#name_2');
    const name_3 = document.querySelector('#name_3');
    const name_4 = document.querySelector('#name_4');
    const name_5 = document.querySelector('#name_5');
    const name_6 = document.querySelector('#name_6');
    const name_7 = document.querySelector('#name_7');
    const name_8 = document.querySelector('#name_8');
    path_0.addEventListener('click', function(){
        pathClick = outputName[0];
        first.innerHTML = outputName[0];
        hideIndex = 0;
        if(pathClick === nameClick) {
            document.querySelector(`#path_${hideIndex}`).style.border = '5px solid gold';
            document.querySelector(`#name_${hideIndex}`).style.border = '5px solid gold';
        }
    })
    name_0.addEventListener('click', function(){
        nameClick = outputName[0];
        second.innerHTML = outputName[0];
        hideIndex = 0;
        if(pathClick === nameClick) {
            document.querySelector(`#path_${hideIndex}`).style.border = '5px solid gold';
            document.querySelector(`#name_${hideIndex}`).style.border = '5px solid gold';
        }
    })
    path_1.addEventListener('click', function(){
        pathClick = outputName[1];
        first.innerHTML = outputName[1];
        hideIndex = 1;
        if(pathClick === nameClick) {
            document.querySelector(`#path_${hideIndex}`).style.border = '5px solid gold';
            document.querySelector(`#name_${hideIndex}`).style.border = '5px solid gold';
        }
    })
    name_1.addEventListener('click', function(){
        nameClick = outputName[1];
        second.innerHTML = outputName[1];
        hideIndex = 1;
        if(pathClick === nameClick) {
            document.querySelector(`#path_${hideIndex}`).style.border = '5px solid gold';
            document.querySelector(`#name_${hideIndex}`).style.border = '5px solid gold';
        }
    })
    path_2.addEventListener('click', function(){
        pathClick = outputName[2];
        first.innerHTML = outputName[2];
        hideIndex = 2;
        if(pathClick === nameClick) {
            document.querySelector(`#path_${hideIndex}`).style.border = '5px solid gold';
            document.querySelector(`#name_${hideIndex}`).style.border = '5px solid gold';
        }
    })
    name_2.addEventListener('click', function(){
        nameClick = outputName[2];
        second.innerHTML = outputName[2];
        hideIndex = 2;
        if(pathClick === nameClick) {
            document.querySelector(`#path_${hideIndex}`).style.border = '5px solid gold';
            document.querySelector(`#name_${hideIndex}`).style.border = '5px solid gold';
        }
    })
    path_3.addEventListener('click', function(){
        pathClick = outputName[3];
        first.innerHTML = outputName[3];
        hideIndex = 3;
        if(pathClick === nameClick) {
            document.querySelector(`#path_${hideIndex}`).style.border = '5px solid gold';
            document.querySelector(`#name_${hideIndex}`).style.border = '5px solid gold';
        }
    })
    name_3.addEventListener('click', function(){
        nameClick = outputName[3];
        second.innerHTML = outputName[3];
        hideIndex = 3;
        if(pathClick === nameClick) {
            document.querySelector(`#path_${hideIndex}`).style.border = '5px solid gold';
            document.querySelector(`#name_${hideIndex}`).style.border = '5px solid gold';
        }
    })
    path_4.addEventListener('click', function(){
        pathClick = outputName[4];
        first.innerHTML = outputName[4];
        hideIndex = 4;
        if(pathClick === nameClick) {
            document.querySelector(`#path_${hideIndex}`).style.border = '5px solid gold';
            document.querySelector(`#name_${hideIndex}`).style.border = '5px solid gold';
        }
    })
    name_4.addEventListener('click', function(){
        nameClick = outputName[4];
        second.innerHTML = outputName[4];
        hideIndex = 4;
        if(pathClick === nameClick) {
            document.querySelector(`#path_${hideIndex}`).style.border = '5px solid gold';
            document.querySelector(`#name_${hideIndex}`).style.border = '5px solid gold';
        }
    })
    path_5.addEventListener('click', function(){
        pathClick = outputName[5];
        first.innerHTML = outputName[5];
        hideIndex = 5;
        if(pathClick === nameClick) {
            document.querySelector(`#path_${hideIndex}`).style.border = '5px solid gold';
            document.querySelector(`#name_${hideIndex}`).style.border = '5px solid gold';
        }
    })
    name_5.addEventListener('click', function(){
        nameClick = outputName[5];
        second.innerHTML = outputName[5];
        hideIndex = 5;
        if(pathClick === nameClick) {
            document.querySelector(`#path_${hideIndex}`).style.border = '5px solid gold';
            document.querySelector(`#name_${hideIndex}`).style.border = '5px solid gold';
        }
    })
    path_6.addEventListener('click', function(){
        pathClick = outputName[6];
        first.innerHTML = outputName[6];
        hideIndex = 6;
        if(pathClick === nameClick) {
            document.querySelector(`#path_${hideIndex}`).style.border = '5px solid gold';
            document.querySelector(`#name_${hideIndex}`).style.border = '5px solid gold';
        }
    })
    name_6.addEventListener('click', function(){
        nameClick = outputName[6];
        second.innerHTML = outputName[6];
        hideIndex = 6;
        if(pathClick === nameClick) {
            document.querySelector(`#path_${hideIndex}`).style.border = '5px solid gold';
            document.querySelector(`#name_${hideIndex}`).style.border = '5px solid gold';
        }
    })
    path_7.addEventListener('click', function(){
        pathClick = outputName[7];
        first.innerHTML = outputName[7];
        hideIndex = 7;
        if(pathClick === nameClick) {
            document.querySelector(`#path_${hideIndex}`).style.border = '5px solid gold';
            document.querySelector(`#name_${hideIndex}`).style.border = '5px solid gold';
        }
    })
    name_7.addEventListener('click', function(){
        nameClick = outputName[7];
        second.innerHTML = outputName[7];
        hideIndex = 7;
        if(pathClick === nameClick) {
            document.querySelector(`#path_${hideIndex}`).style.border = '5px solid gold';
            document.querySelector(`#name_${hideIndex}`).style.border = '5px solid gold';
        }
    })
    path_8.addEventListener('click', function(){
        pathClick = outputName[8];
        first.innerHTML = outputName[8];
        hideIndex = 8;
        if(pathClick === nameClick) {
            document.querySelector(`#path_${hideIndex}`).style.border = '5px solid gold';
            document.querySelector(`#name_${hideIndex}`).style.border = '5px solid gold';
        }
    })
    name_8.addEventListener('click', function(){
        nameClick = outputName[8];
        second.innerHTML = outputName[8];
        hideIndex = 8;
        if(pathClick === nameClick) {
            document.querySelector(`#path_${hideIndex}`).style.border = '5px solid gold';
            document.querySelector(`#name_${hideIndex}`).style.border = '5px solid gold';
        }
    })
}

const start = document.querySelector('#start');
const first = document.querySelector('#first');
const second = document.querySelector('#second');
start.addEventListener('click', function(){
    features();
    start.style.display = 'none';
    first.style.display = 'block';
    second.style.display = 'block';
})



// let time = 0;
// setInterval(displayTime, 1000);

// function displayTime() {
//     time += 1;
//     document.getElementById("demo").innerHTML = `Time: ${time}`;
// }