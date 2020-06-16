import React, {useState} from 'react';

export default function AddIncomeExpense(props) {

  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState("income");
  const [date, setDate] = useState("");

  const handleDescription = (event) => {
    setDescription(event.target.value);
  }

  const submitData = () => {
    props.result({
      description, amount, type, date
    });

    setDescription("");
    setAmount(0);
    setType("income");
    setDate("");

  }

  return (
    <div>
      <div className="form-group" style={{marginTop: "250px"}}>
        <label htmlFor="">Description</label>
        <input type="text"
          value={description}
          onChange={handleDescription}
          className="form-control" name="" id="" placeholder="Enter description"/>
      </div>
      <div className="form-group">
        <label htmlFor="">Amount</label>
        <input type="number"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
          className="form-control" name="" id="" placeholder="Enter Amount"/>
      </div>
      <div className="form-group">
        <label htmlFor="">Select Type</label>
        <select className="form-control" name="" id="" onChange={(e) => setType(e.target.value)}>
          <option>income</option>
          <option>expense</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="">Date</label>
        <input type="text"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="form-control" name="" id="" placeholder="Enter Date"/>
      </div>
      <button className="btn btn-success" onClick={submitData}>
        Submit
      </button>
    </div>
  )
}
