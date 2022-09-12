// get input value with the function
function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldValue = inputField.value;
    const newInputAmount = parseFloat(inputFieldValue);
    // clear the input field
    inputField.value = '';

    return newInputAmount;
}

// update total transaction using function
function updateTotalAmount(totalFieldId, newTransactionAmount){
    const transactionTotal = document.getElementById(totalFieldId);
    const transactionTotalText = transactionTotal.innerText;
    const previousTransactionAmount = parseFloat(transactionTotalText);
    
    transactionTotal.innerText = previousTransactionAmount + newTransactionAmount;
}

// deposit button event handler
document.getElementById('deposit-btn').addEventListener('click', function(){
    // get the amount deposited
    const newDepositAmount = getInputValue('deposit-input')

    // update deposit total
    updateTotalAmount('deposit-total', newDepositAmount);
    
    // update account balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;
})

// withdraw button event handler
document.getElementById('withdraw-btn').addEventListener('click', function(){
    // get the amount withdrew
    const newWithdrawAmount = getInputValue('withdraw-input');

    // update withdraw total
    updateTotalAmount('withdraw-total', newWithdrawAmount);

    // update account balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;
})