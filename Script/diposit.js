// const viewItems = document.getElementById('history');
// console.dir(viewItems)

document.getElementById('add-money-btn')
        .addEventListener('click', function(){
         
            const selectBank = getValueFromInput('select-bank');
            
            if(selectBank === "Select Bank"){
                alert('Select a bank');
            }

            const BankNum = getValueFromInput('account-num');
          
            if(BankNum.length !== 11){
                alert('Invalid Account Number');
            }

            const Amount = getValueFromInput('input-diposite');
            const newBalance = getBalance() + Number(Amount);
            // console.log(newBalance)

            const pin = getValueFromInput('pin-num');
            if(pin === '1234'){
                alert('Add Money Suessfull');
                setBalance(newBalance);

                const history = document.getElementById('history-container');
                const newElement = document.createElement('div');
                newElement.innerHTML = `
        <div class="transaction-card p-5 bg-base-100 flex justify-between rounded-2xl    border-2 border-gray-300 mb-5">
             <div class="flex gap-4 items-center">
                <div>
                    <img class="w-7 h-7" src="assets/opt-1.png" alt="">
                 </div>

                 <div class="">
                    <h3 class="font-semibold text-base">Add Money</h3>
                     <p class="font-normal text-xs">Today 01:44 AM</p>
                 </div>
              </div>

              <div class="items-center flex">
                <i class="fa-solid fa-ellipsis rotate-90"></i>
             </div>
        </div>
                `;   
                history.append(newElement);
                

            }else{
                alert('Invalid Pin')
            }

        })

