document.getElementById('withdraw-btn')
        .addEventListener('click', function(){
            const agentNum = getValueFromInput('agent-num');
            if(agentNum.length !== 11){
                alert('Invalid Agent Number');
                return;
            }
            const cashOunt = getValueFromInput('input-withdraw');

              const pinNum = getValueFromInput('input-pin');
            if(pinNum !== '1234'){
                alert('Invalid Pin Number');
                return;
            }
            // const availableBalance = getInnerTextFromElement('current-balance');
           const balance = getInnerTextFromElement('current-balance');

            const currentBalance = Number(balance) - Number(cashOunt);
            if(currentBalance < 0){
                alert('Invalid CashOut Amount');
                return;
            }else{
                alert('CashOut SucessFull');
                setBalance(currentBalance);
            }
          


        })