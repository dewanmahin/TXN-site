// getInputValue() use for collect all input value
function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const newInputText = inputField.value;
    const inputAmount = parseFloat(newInputText);
    // clear the deposit input field
    inputField.value = '';
    return inputAmount;
}

// handle deposit
document.getElementById('deposit-btn').addEventListener('click', function(){
    // get the amount deposited
    /* const depositInput = document.getElementById('deposit-input');
    const newDepositText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositText); */
    const newDepositAmount = getInputValue('deposit-input');
    
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
})

// handle withdraw
document.getElementById('withdraw-btn').addEventListener('click', function(){
    // get the amount Withdrew
    /* const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(newWithdrawText); */
    const newWithdrawAmount = getInputValue('withdraw-input');

    // set new withdraw amount
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawText = withdrawTotal.innerText;
    const previousWithdrawAmount = parseFloat(withdrawText);
    const newWithdrawTotal = previousWithdrawAmount + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    // update account balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceText = balanceTotal.innerText;
    const previousBalanceAmount = parseFloat(balanceText);
    const newBalanceTotal = previousBalanceAmount - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;
})