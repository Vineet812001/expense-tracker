import React from 'react'
import { getTransactionsList, transactionsList } from './storage'




const transaction = getTransactionsList()


export const Entry = ({msg , date , amt, id}) => {
    
    return (
    <div className='container'>
        <DeleteButton id={id} />
        
         <EntryDetails msg={msg} date={date} amt={amt}  /> 
    </div>   
    )
}

function EntryDetails({msg , date , amt, id}){
  return(
        <div className='entry'>
            <div className="title">
            <p>{date}</p>
            <h2>{msg}</h2>
            </div>
            <h1>{amt}</h1>
        </div>
  )
}
export const DeleteButton = ({id}) => {
    function deleteEntry(){
        const list=transaction.filter((entry)=> entry.id !== id)
        localStorage.setItem(transactionsList , JSON.stringify(list))
    }
    return (
 
    <div className="deleteBtn" onClick={deleteEntry}>
        <img src="/icons/delete.svg" alt="" />
    </div>
    )
}




