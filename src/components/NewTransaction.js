import React from "react";
import { useState } from "react";
export const NewTransaction = () => {
  const [amt, setAmount] = useState("");
  const [msg, setMessage] = useState("");
  function addNewTransaction(event) {
    event.preventDefault();
    alert(msg);
    console.log(amt);
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
        />
        <br />
        <label className="msg" htmlFor="Message">
          Message:
        </label>
        <br />
        <input
          type="text"
          id="Message"
          value={msg}
          onChange={(m) => setMessage(m.target.value)}
        />
        <br />
        <button type="submit">Add transaction</button>
      </form>
    </div>
  );
};
