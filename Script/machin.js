// console.log('hello world');


function getValueFromInput(id){
    const input = document.getElementById(id);
    const value = input.value;
    return value;
}

function getInnerTextFromElement(id){
     const element = document.getElementById(id);
    const innerText = element.innerText;
    return innerText;
}

function setBalance(value){
    const balanceInput = document.getElementById('current-balance');
    balanceInput.innerText = value;
}

function getBalance(){
    const balanceinput = document.getElementById('current-balance');
    const balance= balanceinput.innerText;
    return Number(balance);
}

function showOnly(id){
    // console.log('aldfa')
    const addMoney = document.getElementById('add-money');
    const cashout = document.getElementById('cashout-container');
    const transaction = document.getElementById('history');
    // console.log(transaction)

    addMoney.classList.add('hidden');
    cashout.classList.add('hidden');
    transaction.classList.add('hidden');

    const selected = document.getElementById(id);
    selected.classList.remove('hidden');
}