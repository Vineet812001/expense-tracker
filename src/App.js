import "./App.scss";
import Header from "./components/Header";
import Balance from "./components/Balance";
import { NewTransaction } from "./components/NewTransaction";
import { History } from "./components/History";
import { useEffect, useReducer } from "react";
import { getTransactionsList, transactionsList } from "./components/storage";

function setFavIcon(){
  const icon = document.getElementById("favicon");
  icon.href = "icons/logo (1).svg"
}

function App() {
  const transaction = getTransactionsList();
  const Title = "Expense Tracker"



  useEffect(() => {
    document.title = Title
 }, []);

  function reducer(transaction, action) {
    if (action.type === "Update") {
      const list =[action.payload.entry, ...transaction]
      localStorage.setItem(transactionsList, JSON.stringify(list));
      return list;
    } else if (action.type === "Delete") {
      const list = transaction.filter(
        (entry) => entry.id !== action.payload.id
      );
      localStorage.setItem(transactionsList, JSON.stringify(list));
      return list;
    }
  }
  const [transactions, dispatch] = useReducer(reducer, transaction);
  return (
    <div className="App">
      <Header />
      <div className="content">
        <div>
          <Balance transaction={transactions} />
          <NewTransaction transaction={transactions} dispatch={dispatch} />
        </div>
        <History transaction={transactions} dispatch={dispatch} />
      </div>
    </div>
  );
}

export default App;
