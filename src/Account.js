import { sortBy, first } from 'underscore'

class Account {
  constructor() {
    this.transactions = []
  }

  getTopTransactions() {
    let getSortKey = transaction => -Math.abs(transaction.amount)
    let sortedTransactions = sortBy(this.transactions, getSortKey)
    return first(sortedTransactions, 3)
  }

  deposit(amount, date) {
    this.transactions.push({amount, date})
  }

  withdraw(amount, date) {
    this.transactions.push({amount: -amount, date})
  }
}

export default Account