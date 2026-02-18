// console.log('hello world');


function getValueFromInput(id){
    const input = document.getElementById(id);
    const value = input.value;
    return value;
}

function getInnerTextFromElement(id){
     const element = document.getElementById(id);
    const innerText = element.innerText;
    return Number(innerText);
}

function setBalance(value){
    const balanceInput = document.getElementById('current-balance');
    balanceInput.innerText = value;
}