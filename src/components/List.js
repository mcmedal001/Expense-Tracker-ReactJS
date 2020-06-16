import React from 'react'

export default function List(props) {
  

  const deleteTransaction = (data) => {
    props.removeTransaction(data)
  }

  return (
    <div>
      {
        props.transactions.map((item, index) => (
          <div key={index} className="border p-3 bg-secondary text-white mb-4">
            <p><strong>Description</strong> {item.description} </p>
            <p><strong>Amount</strong> {item.amount} </p>
            <p><strong>Date</strong> {item.date} </p>
            <p><strong>Type</strong> {item.type} </p>

            <button className="btn-danger mt-2" onClick={ () => deleteTransaction(index) }>
              Delete
            </button>
          </div>
        ))
      }
    </div>
  )
}
