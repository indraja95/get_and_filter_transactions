import React, {useState} from "react";

function TransactionTable({txns}) {
  const [date, setDate] = useState("2019-11-29");
  const [txnsByDate, setTxnByDate] = useState([]);

  const getDate = event => {
    event.preventDefault();
    setDate(event.target.value);
  }

  const getTransactions = () => {
    let trans = txns.filter(txn => {
        return txn.date === date;
    });
    setTxnByDate(trans);
  }

  const sort = () => {
    let sortedTxns = [...txnsByDate].sort((a, b) => a.amount > b.amount ? 1 : -1);
    setTxnByDate(sortedTxns);
  };

  return (
    <div className="layout-column align-items-center mt-50">
      <section className="layout-row align-items-center justify-content-center">
        <label className="mr-10">Transaction Date</label>
        <input id="date" type="date" defaultValue="2019-11-29" onChange= {getDate} />
        <button className="small" onClick = {getTransactions}>Filter</button>
      </section>

      <div className="card mt-50">
          <table className="table">
              <thead>
              <tr className="table">
                  <th className="table-header">Date</th>
                  <th className="table-header">Description</th>
                  <th className="table-header">Type</th>
                  <th className="table-header">
                      <span id="amount" onClick={sort}>Amount ($)</span>
                  </th>
                  <th className="table-header">Available Balance</th>
              </tr>
              </thead>
              <tbody>
              {
                txnsByDate.map((txnByDate,id) => (
                  <tr key = {id}>
                      <td>{txnByDate.date}</td>
                      <td>{txnByDate.description}</td>
                      <td>{txnByDate.type === 1 ? "Debit" : "Credit"}</td>
                      <td>{txnByDate.amount}</td>
                      <td>{txnByDate.balance}</td>
                  </tr>))
              }
              </tbody>
          </table>
      </div>
    </div>
  );
}

export default TransactionTable;
