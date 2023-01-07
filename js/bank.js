document.getElementById('deposit-btn').addEventListener('click', function(){
    // get the amount deposited
    const depositInput = document.getElementById('deposit-input');
    const newDepositText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositText);
    
    // set new deposit amount
    const depositTotal = document.getElementById('deposit-total');
    const depositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(depositText);
    const newDepositTotal = previousDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal;

    // update account balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceText = balanceTotal.innerText;
    const previousBalanceAmount = parseFloat(balanceText);
    const newBalanceTotal = previousBalanceAmount + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;

    // clear the deposit input field
    depositInput.value = '';
})