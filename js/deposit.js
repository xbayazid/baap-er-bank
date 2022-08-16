// Step-1: add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){
    // Step-2: get the deposit amount from the deposit input field 
    //  For input field use .value to get the value inside the input field 
    const depositField= document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    // Step-3: get the current deposit total 
    // for non-this.inputMode(element other than input, textarea) use innerText to get the text

    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // Step-4: add numbers to set the total deposit 
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    // set the deposit total 
    depositTotalElement.innerText = currentDepositTotal;

    // Step-5: get balance current total 
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // Step-6: Calculate current total balance 
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    // set balance total 
    balanceTotalElement.innerText = currentBalanceTotal;


    // Step-7: clear the deposit field 
    depositField.value = '';
})