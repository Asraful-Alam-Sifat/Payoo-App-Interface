document.getElementById('pay-bill-btn')
        .addEventListener('click', function(){
            // console.log('safasg')
            const selectPayOpt = getValueFromInput('select-pay');
            // console.log(selectPayOpt)
            if(selectPayOpt === 'Select Bank'){
                alert('Please Select A Bank');
                return;
            }

            const billerNum = getValueFromInput('biller-num');
            // console.log(billerNum)
            if(billerNum.length !== 11){
                alert('Invalid Biller Account Number');
                return;
            }
            const payAmmount = getValueFromInput('input-pay-amount');
            // console.log(payAmmount);
            const balance = getBalance();
            // console.log(balance)
            const newBalance = balance - Number(payAmmount);
            if(newBalance < 0 ){
                alert('Invalid Pay Amount');
                return;
            }
            const pin = getValueFromInput('pin-num-for-payBill');
            // console.log(pin)
            if(pin !== '1234'){
                alert('Invalid Pin Number');
                return;
            }else{
                alert('Bill Pay Succesfull');
                setBalance(newBalance);

                const payBill = document.getElementById('history-container');
                const newElement = document.createElement('div');
                newElement.innerHTML = `
                                        <div class="transaction-card p-5 bg-base-100 flex justify-between rounded-2xl    border-2 border-gray-300 mb-5">
             <div class="flex gap-4 items-center">
                <div>
                    <img class="w-7 h-7" src="assets/opt-5.png" alt="">
                </div>

                 <div class="">
                    <h3 class="font-semibold text-base">Pay Bill</h3>
                     <p class="font-normal text-xs">Today 07:45 AM</p>
                 </div>
             </div>

             <div class="items-center flex">
                <i class="fa-solid fa-ellipsis rotate-90"></i>
             </div>
        </div>
                `;
                payBill.append(newElement);
            }


        })