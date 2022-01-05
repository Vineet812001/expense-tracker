import React from "react";
import { useState } from "react";
import { getTransactionsList, transactionsList } from "./storage";


const transaction = getTransactionsList()

export const NewTransaction = () => {
  const [amt, setAmount] = useState("");
  const [msg, setMessage] = useState("");


  function addNewTransaction(event) {
    event.preventDefault();
    const entry = {
      id:generateId(),
      amt:amt,
      msg:msg,
      date:new Date().toLocaleDateString()
    }
    transaction.push(entry)
    localStorage.setItem(transactionsList,JSON.stringify(transaction))
    alert(JSON.stringify(transaction));
  }

  return (
    <div className="Trans">
      <p>Add new transaction</p>
      <form onSubmit={addNewTransaction}>
        <label htmlFor="Amount">Amount:</label> <br />
        <input
          type="number"
          id="Amount"
          value={amt}
          onChange={(e) => setAmount(e.target.value)}
          required 
        />
        <br />
        <label className="msg" htmlFor="Message">
          Message:
        </label>
        <br />
        <textarea
          type="text"
          id="Message"
          value={msg}
          onChange={(m) => setMessage(m.target.value)}
          rows="10" cols="20"
       required
        />
        <br />
        <button type="submit">Add transaction</button>
      </form>
    </div>
  );
};



function generateId(){
  return Math.floor(Math.random() * 100000000)
}
