import React, {useState} from "react";
import "./App.css";

import AddIncomeExpense from "./components/AddIncomeExpense";
import Balance from "./components/Balance";
import IncomeExpense from "./components/IncomeExpense";
import List from "./components/List";

function App() {

  const [balance, setBalance] = useState(0);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  const [transactions, setTransactions] = useState([
  ])

  const getDataFromAddIncomeExpense = (data) => {

    let newTransactions = [...transactions, data];
    setTransactions(newTransactions);

    calculate(newTransactions);
  }

  const calculate = (data) => {

    let totalIncome = 0;
    let totalExpense = 0;
    data.forEach((item, index) => {
      if(item.type === "income"){
        totalIncome = parseInt(totalIncome) + parseInt(item.amount)
      }
      if(item.type === "expense"){
        totalExpense = parseInt(totalExpense) + parseInt(item.amount)
      }
    })

    setIncome(totalIncome);
    setExpense(totalExpense);
    setBalance(totalIncome - totalExpense);
  }
  
  const getTransactiontoRemove = (data) => {

    let getNewTransaction = transactions.filter((item, index) => data !== index  );

    setTransactions(getNewTransaction);

    calculate(getNewTransaction);
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="bg-light">
              <div className="my-container">
              <Balance overallBalance={balance} />
              <IncomeExpense income={income} expense={expense} />
              <List transactions={transactions} removeTransaction={getTransactiontoRemove}  />
              </div>
            </div>
          </div>
          <div className="col-md-6">
              <AddIncomeExpense result={getDataFromAddIncomeExpense} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
