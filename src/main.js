/* global document*/

import Account from './Account'

let myAccount = new Account()
let format = transaction => `
<li>${transaction.amount} (${transaction.date})</li>`
let list = document.querySelector('.js-top-transactions')

myAccount.deposit(20000, '2020-01-01')
myAccount.deposit(30000, '2020-01-02')
myAccount.deposit(40000, '2020-01-03')
myAccount.withdraw(50000, '2020-01-04')

list.innerHTML = myAccount.getTopTransactions().map(format).join('')
