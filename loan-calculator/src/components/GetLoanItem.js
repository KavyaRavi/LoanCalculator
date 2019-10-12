import React from 'react';
import './GetLoanItem.css';

const GetLoanItem = ({loanQuery, onclick}) => {

    return (
        <div className="loan-item" onClick={() => {
            onclick(loanQuery.amount, loanQuery.numMonths);
        }}>
            <div className="row">
                <div className="col-md-6">
                    <label>Loan amount</label>
                    <p>{loanQuery.amount}</p>
                </div>
                <div className="col-md-6">
                    <label>Loan duration</label>
                    <p>{loanQuery.numMonths}</p>
                </div>
            </div>
            <hr></hr>
        </div>
    )
}

export default GetLoanItem;