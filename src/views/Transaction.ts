import Transaction from "@models/Transaction";

export function renderHistoryAll(transactions: Transaction[]) {
    return transactions.map(transaction => {
        return {
            accountId: transaction.accountId,
            value: transaction.value,
            createdAt: transaction.createdAt
        }
    })
}