import React from 'react';
import axios from '../apis/getloanapi';
import GetLoanInput from '../components/GetLoanInput';
import './App.css';

class App extends React.Component {

    state = {loanAmount: null, loanDuration: null};

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

        let amount = this.state.loanAmount, numMonths = this.state.loanDuration;

        const response = await axios.get('/interest', {
            params: {
                amount: amount,
                numMonths: numMonths
            }
        });

        console.log(response);

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
                </div>
            </div>
        )
    }

};

export default App;