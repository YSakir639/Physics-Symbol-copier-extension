const json = `{
    "Pi":"π",
    "Lambda":"𝝀",
    "Work_Function":"φ",
    "Gamma":"γ",
    "Beta":"β",
    "Alfa":"α",
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

    div[i].append(h1[i]);
    div[i].append(title[i]);
    div[i].append(button[i]);

    h1[i].setAttribute("class","main"); 
    button[i].setAttribute("class",`copy_${keys[i]}`);
    button_id.push(`copy_${keys[i]}`);
    sym.push(values[i])
    title[i].setAttribute('class',"title") 
}


for(i=0; i < len; i++) {

    document.querySelector(`.${button_id[i]}`).addEventListener("click",function(e){
        // console.log(e.path[1].childNodes[0].innerText)
        copy = e.path[1].childNodes[0].innerText
        navigator.clipboard.writeText(copy);
        // console.log(e.target.getAttribute('class'))
        elm = document.querySelector(`.${e.target.getAttribute('class')}`)
        elm.style.backgroundColor="#1aff1a";
        elm.innerText = 'copied!';

        
    })


}

  


