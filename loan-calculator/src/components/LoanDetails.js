import React from 'react';
import './LoanDetails.css';

const LoanDetails = ({rateofInterest, monthlyPayment}) => {


    return (
        <div className="container loan-details">
            <div className="form-group">
                <label>Loan Interest</label>
                <p>{rateofInterest}</p>
            </div>
            <div className="form-group">
                <label>Monthly Payment</label>
                <p>{monthlyPayment}</p>
            </div>
        </div>
    )
};

export default LoanDetails;