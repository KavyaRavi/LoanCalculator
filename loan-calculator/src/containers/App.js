import React from 'react';
import axios from '../apis/getloanapi';
import GetLoanInput from '../components/GetLoanInput';
import LoanDetails from '../components/LoanDetails';
import './App.css';

class App extends React.Component {

    state = {loanAmount: null, loanDuration: null, rateofInterest: null, monthlyPayment: null};

    componentDidMount() {
        this.setState({
            loanAmount: "500",
            loanDuration: '6'
        });
        setTimeout(() => {
            this.getLoanDetails();
        }, 500);
    }

    setLoanInputs = (loanAmount, loanDuration) => {
        this.setState({
            loanAmount,
            loanDuration
        });
        setTimeout(() => {
            this.getLoanDetails();
        }, 500);
    }

    getLoanDetails = async () => {
        const amount = this.state.loanAmount, 
            numMonths = this.state.loanDuration;

        const response = await axios.get('/interest', {
            params: {
                amount,
                numMonths
            }
        });

        const rateofInterest = response.data.interestRate + " %",
            monthlyPayment = response.data.monthlyPayment.amount + " " + response.data.monthlyPayment.currency;

        this.setState({
            rateofInterest,
            monthlyPayment 
        });
    }

    render() {
        return (
            <div className="container">
                <div className="header">
                    <p>Loan Calculator</p>
                </div>
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <GetLoanInput onInputChange={this.setLoanInputs} />
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <LoanDetails rateofInterest={this.state.rateofInterest} monthlyPayment={this.state.monthlyPayment} />
                    </div>
                </div>
            </div>
        )
    }

};

export default App;