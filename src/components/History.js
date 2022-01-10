import React from "react";
import { Entry } from "./Entry";
import IconTitle from "./IconTitle";

export const History = ({ transaction, dispatch }) => {
  return (
    <div className="history">
      <div className="his">
        <IconTitle icon="History.svg" title="History" />
      </div>
      <br />
      {transaction.map((entry) => (
        <Entry key={entry.id} dispatch={dispatch} {...entry} />
      ))}
    </div>
  );
};
