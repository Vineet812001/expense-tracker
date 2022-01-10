import React from "react";
import IconTitle from "./IconTitle";

export default function Balance({ transaction }) {
  const balance = getNetBalance(transaction);
  const red = { color: "#FF7D73" };
  const green = { color: "#30dc80" };

  let style = green;
  if (parseInt(balance) < 0) {
    style = red;
  }
  return (
    <div className="balance">
      <div>
        <IconTitle icon="balance.svg" title="Your Balance" />
        <h1 style={style}>{balance}</h1>
      </div>
    </div>
  );
}

export function getNetBalance(transaction) {
  let bal = 0;
  transaction.map((item) => {
    bal = bal + parseInt(item.amt);
    return 0;
  });
  return bal;
}
