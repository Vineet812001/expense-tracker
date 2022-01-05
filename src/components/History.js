import React from "react";
import { Entry } from "./Entry";
import { getTransactionsList } from "./storage";

const transaction = getTransactionsList()

export const History = () => {
  return (
    <div className="history">
      <h4>History</h4>
      <br />
      {transaction.map((entry) => (
        <Entry key={entry.id} {...entry} />
      ))}
    </div>
  )
};
