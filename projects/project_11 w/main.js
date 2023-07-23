"use sctrict";

let n = 9
let divs
let drob = 7
let volna = [
    [6, 0 / drob],
    [3, 1 / drob], [7, 1 / drob],
    [0, 2 / drob], [4, 2 / drob], [8, 2 / drob],
    [1, 3 / drob], [5, 3 / drob],
    [2, 4 / drob]
    ]
let t = 0

function create_divs() {
    for (let i = 0; i < n; i++) {
        let div = document.createElement("div")
        div.className = "item"
        div.innerText = "T"
        conteiner.append(div)
    }
    divs = document.querySelectorAll(".item")
}

function sinus(x) {
    let ugol = t + Math.PI * x
    let nn = Math.sin(ugol)
    if (( ugol > Math.PI / 2 ) && ( ugol < Math.PI / 2 * 3) ) nn = 1
    return nn
}

function update_divs() {
    for (let i = 0; i < volna.length; i++) {
        divs[volna[i][0]].style.transform = `scale(${sinus(volna[i][1])})`
    }
    t += 0.1
    if (t > Math.PI * 2) t = 0 
}

create_divs()
setInterval(update_divs, 20)