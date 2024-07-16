let $ = document.querySelector.bind(document);
let $$ = document.querySelectorAll.bind(document);

let listCounter = $$('.counter');


function count(element){
    let numberElement = element.querySelector('h2');
    let to = parseInt(numberElement.textContent);
    let count = 0;
    let time = 250;
    let step = Math.round(to/time);
    let counting = setInterval(()=>{
        count+= step;
        if(count > to){
            numberElement.innerHTML = to;
            clearInterval(counting);
        }else{
            numberElement.innerHTML = count;
        }
    },1)
}

listCounter.forEach(item =>{
    count(item);
})