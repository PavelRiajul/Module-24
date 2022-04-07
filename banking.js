document.getElementById('deposit-submit').addEventListener('click', function () {
const depositInput = document.getElementById('deposit-input')
const depositText = depositInput.value
const depositAmount = parseFloat(depositText)
//update deposit total

const depositTotal = document.getElementById('deposit-total')
const previousDepositText = depositTotal.innerText
const previousDepositAmount = parseFloat(previousDepositText)
const newDepositTotal = previousDepositAmount + depositAmount
depositTotal.innerText = newDepositTotal

//update balance
const balanceTotal = document.getElementById('balance-total')
const balanceTotalText = balanceTotal.innerText
const balanceAmount = parseFloat(balanceTotalText)
const newBalanceTotal = balanceAmount + depositAmount
balanceTotal.innerText = newBalanceTotal


//clear
depositInput.value = '';
})

//handle withdraw

document.getElementById('withdraw-submit').addEventListener('click', function (){
    const withDrawInput = document.getElementById('withdraw-input')
    const withdrawAmountText = withDrawInput.value
    const newWithdrawAmount = parseFloat(withdrawAmountText)
    console.log(newWithdrawAmount)

    //withdraw total
    const withdrawTotal = document.getElementById('withdraw-total')
    const previousWithdrawText = withdrawTotal.innerText
    const previousWithdrawTotal = parseFloat(previousWithdrawText)
    const newWithdrawTotal =  previousWithdrawTotal + newWithdrawAmount
    withdrawTotal.innerText = newWithdrawTotal

    //update balance
    const balanceTotal = document.getElementById('balance-total')
    const balanceTotalText = balanceTotal.innerText
    const balanceAmount = parseFloat(balanceTotalText)
    const newBalanceTotal =  balanceAmount -  newWithdrawAmount
    balanceTotal.innerText = newBalanceTotal

    //clear
    withDrawInput.value = ''
})