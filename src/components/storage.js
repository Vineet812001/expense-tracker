
export const transactionsList = "transactions";

const localStorageTransactions = JSON.parse(
  localStorage.getItem(transactionsList)
);

let transaction =
  localStorage.getItem(transactionsList) !== null
    ? localStorageTransactions
    : [];

export function getTransactionsList(){
return transaction
}
