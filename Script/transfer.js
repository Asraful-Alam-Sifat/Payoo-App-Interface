// console.log('alfda')

document.getElementById('transfer-btn')
        .addEventListener('click', function(){
            // console.log('alkd')
            const userNum = getValueFromInput('transfering-user-num');
            // console.log(userNum)
            if(userNum.length !== 11){
                alert('Invalid User Account Number');
                return;
            }
            const ammount = getValueFromInput('transfer-amount');
            const balance = getBalance();
            // console.log(balance)
            const newBalance = balance - Number(ammount);
            if(newBalance < 0 ){
                alert('Invalid Transfer Ammount');
                return;
            }
            const pin =getValueFromInput('pin-for-transfer');
            if(pin !== '1234'){
                alert('Invalid Pin Number');
                return;
            }else{
                alert('Transfer Sucessfull');
                setBalance(newBalance);

                const transferMoney = document.getElementById('history-container');
                const newElement = document.createElement('div');
                newElement.innerHTML = `
                        <div class="transaction-card p-5 bg-base-100 flex justify-between rounded-2xl    border-2 border-gray-300 mb-5">
             <div class="flex gap-4 items-center">
                <div>
                    <img class="w-7 h-7" src="assets/opt-3.png" alt="">
                </div>

                 <div class="">
                    <h3 class="font-semibold text-base">Transfer Money</h3>
                     <p class="font-normal text-xs">Today 04:28 AM</p>
                 </div>
             </div>

             <div class="items-center flex">
                <i class="fa-solid fa-ellipsis rotate-90"></i>
             </div>
        </div>
                `;
                transferMoney.append(newElement);
            }
        })