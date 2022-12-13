const json = `{
    "Alfa":"α",
    "Beta":"β",
    "Gamma":"γ",
    "Work_Function":"φ",
    "Lambda":"𝝀",
    "Pi":"π",
    "Sigma":"∑",
    "Variance":"σ2"
}` 

const symbols = JSON.parse(json)

const keys = Object.keys(symbols)
const values = Object.values(symbols)
const len = Object.keys(symbols).length

const main_container = document.querySelector("#main_container")
let div = Object.keys(symbols)

for(i=0; i < len; i++) {
    div[i] = document.createElement('div');
    main_container.append(div[i]);
    div[i].setAttribute("class","box"); 
}

div = document.querySelectorAll('.box');
let h1 = Object.keys(symbols);
let title = Object.keys(symbols);
let button = Object.keys(symbols);
const button_id = []
const sym = []
for(i=0; i < len; i++) {

    h1[i] = document.createElement('h2');
    title[i] = document.createElement('h3');
    button[i] = document.createElement('button');

    h1[i].innerText = values[i];
    title[i].innerText = keys[i];
    button[i].innerText = "copy";

    div[i].append(title[i]);
    div[i].append(h1[i]);
    div[i].append(button[i]);

    h1[i].setAttribute("class","main"); 
    button[i].setAttribute("class",`copy_${keys[i]}`);
    button_id.push(`copy_${keys[i]}`);
    sym.push(values[i])
    title[i].setAttribute('class',"title") 
}


for(i=0; i < len; i++) {

    document.querySelector(`.${button_id[i]}`).addEventListener("click",function(e){
        // console.log(e.path[1].childNodes[1].innerText)
        copy = e.path[1].childNodes[1].innerText
        navigator.clipboard.writeText(copy);
        // console.log(e.target.getAttribute('class'))
        elm = document.querySelector(`.${e.target.getAttribute('class')}`)
        
        for(i=0; i < len; i++) {
            lm = document.querySelectorAll("button")[i]
            lm.innerText = 'copy'
            lm.style.backgroundColor="white";
            lm.style.color = 'black';
        }


        elm.style.backgroundColor=" #00308F";
        elm.style.color = 'white';
        elm.innerText = 'copied!';

        
    })


}

  


