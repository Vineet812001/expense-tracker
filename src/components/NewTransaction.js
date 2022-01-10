import React from "react";
import { useState } from "react";
import  IconTitle from "./IconTitle";

export const NewTransaction = ({ transaction, dispatch }) => {
  const [amt, setAmount] = useState("");
  const [msg, setMessage] = useState("");

  function addNewTransaction(event) {
    event.preventDefault();
    const entry = {
      id: generateId(),
      amt: amt,
      msg: msg,
      date: new Date().toLocaleDateString(),
    };

    const action = { type: "Update", payload: { entry: entry } };
    dispatch(action);
  }

  return (
    <div className="Trans">
      <div className="Add">
      <IconTitle icon="transaction.svg" title="Add new transaction" />
      </div>

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
          rows="10"
          cols="20"
          required
        />
        <br />
        <button type="submit">Add transaction</button>
      </form>
    </div>
  );
};

function generateId() {
  return Math.floor(Math.random() * 100000000);
}
