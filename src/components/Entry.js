import React, { useState } from "react";

export const Entry = ({ msg, date, amt, id, dispatch }) => {
  const [isProfit,setisProfit] = useState(true)
  return (
    <div className="container">
        
      <DeleteButton id={id} dispatch={dispatch} />

      <EntryDetails msg={msg} date={date} amt={amt} isProfit={isProfit} setisProfit={setisProfit} />
    </div>
  );
};

function EntryDetails({ msg, date, amt, isProfit , setisProfit }) {
   
  const red = {color:"#FF7D73"}
  const green = {color:"#30dc80"}

  let style = green;
  if(parseInt(amt)<0){
    style = red
  }
  return (
    <div className="entry">
      <div className="title">
        <p>{date}</p>
        <h2>{msg}</h2>
      </div>
      <h1 style={style}>{amt}</h1>
    </div>
  );
}
export const DeleteButton = ({ id, dispatch }) => {
  function deleteEntry() {
    dispatch({ type: "Delete", payload: { id: id } });
  }
  return (
    <div className="deleteBtn" onClick={deleteEntry}>
      <img src="/icons/delete.svg" alt="" />
    </div>
  );
};
