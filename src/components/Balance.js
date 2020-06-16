import React from 'react'

export default function Balance(props) {
  return (
    <div className="d-flex flex-column align-items-center">
        <p>Overall Balance</p>
        <h4>$ {props.overallBalance} USD</h4>
    </div>
  )
}
