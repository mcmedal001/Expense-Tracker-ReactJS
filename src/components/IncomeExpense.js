import React from 'react'

export default function IncomeExpense(props) {
  return (
    <div className="d-flex justify-content-center">
      <div className="bg-primary text-white mr-3 p-3 bordered">
        <p>Income</p>
        <div> ${props.income} </div>
      </div>
      <div className="bg-danger text-white p-3 bordered">
        <p>Expense</p>
        <div> ${props.expense} </div>
      </div>
    </div>
  )
}
