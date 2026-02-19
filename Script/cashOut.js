document.getElementById('withdraw-btn')
        .addEventListener('click', function(){
            const agentNum = getValueFromInput('agent-num');
            if(agentNum.length !== 11){
                alert('Invalid Agent Number');
                return;
            }
            const cashOut = getValueFromInput('input-withdraw');

              const pinNum = getValueFromInput('input-pin');
            if(pinNum !== '1234'){
                alert('Invalid Pin Number');
                return;
            }
            // const availableBalance = getInnerTextFromElement('current-balance');
           const balance = getInnerTextFromElement('current-balance');

            const currentBalance = Number(balance) - Number(cashOut);
            if(currentBalance < 0){
                alert('Invalid CashOut Amount');
                return;
            }else{
                alert('CashOut SucessFull');
                setBalance(currentBalance);

                const cashout = document.getElementById('history-container');
                const newElement = document.createElement('div');
                newElement.innerHTML = `
        <div class="transaction-card p-5 bg-base-100 flex justify-between rounded-2xl    border-2 border-gray-300 mb-5">
             <div class="flex gap-4 items-center">
                <div>
                    <img class="w-7 h-7" src="assets/opt-2.png" alt="">
                </div>

                 <div class="">
                    <h3 class="font-semibold text-base">Cash Out</h3>
                     <p class="font-normal text-xs">Today 01:34 AM</p>
                 </div>
             </div>

             <div class="items-center flex">
                <i class="fa-solid fa-ellipsis rotate-90"></i>
             </div>
        </div>
                `;
                cashout.append(newElement);
            }
          


        })