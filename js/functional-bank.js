// getInputValue() use for collect all input value
function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const newInputText = inputField.value;
    const inputAmount = parseFloat(newInputText);
    // clear the deposit input field
    inputField.value = '';
    return inputAmount;
}

// updateTotal() used for update transactions details
function updateTotal(totalId, amount){
    const totalAmount = document.getElementById(totalId);
    const amountText = totalAmount.innerText;
    const previousAmount = parseFloat(amountText);
    const newTotalAmount = previousAmount + amount;
    totalAmount.innerText = newTotalAmount;
}

// balanceUpdate() update present account balance
function updateBalance(newDepositAmount, isAdd){
    const balanceTotal = document.getElementById('balance-total');
    const balanceText = balanceTotal.innerText;
    const previousBalanceAmount = parseFloat(balanceText);
    if(isAdd == true){
        const newBalanceTotal = previousBalanceAmount + newDepositAmount;
        balanceTotal.innerText = newBalanceTotal;
    }else{
        const newBalanceTotal = previousBalanceAmount - newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;
    }
}

// handle deposit
document.getElementById('deposit-btn').addEventListener('click', function(){
    // get the amount deposited
    const newDepositAmount = getInputValue('deposit-input');
    
    // set new deposit amount
    updateTotal('deposit-total', newDepositAmount);

    // update account balance
    updateBalance(newDepositAmount, true);
})

// handle withdraw
document.getElementById('withdraw-btn').addEventListener('click', function(){
    // get the amount Withdrew
    const newWithdrawAmount = getInputValue('withdraw-input');

    // set new withdraw amount
    updateTotal('withdraw-total', newWithdrawAmount);

    // update account balance
    updateBalance(newWithdrawAmount, false);
})