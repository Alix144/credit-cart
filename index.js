

function change(){
    let nameEl = document.getElementById("name");
    let txt = nameEl.value;

    let cardname = document.getElementById("ca");
    cardname.innerText = txt; 
}

function change2(){
    const numberEl = document.getElementById("number");
    let txt = numberEl.value;

    const cardnum = document.getElementById("rd");
    cardnum.innerText = txt; 
}

function change3(){
    const mm = document.getElementById("mm");
    let txt = mm.value;

    const date1El = document.getElementById("s1");
    date1El.innerText = txt; 
}

function change4(){
    const yy = document.getElementById("yy");
    let txt = yy.value;

    const date2El = document.getElementById("s2");
    date2El.innerText = txt; 
}
