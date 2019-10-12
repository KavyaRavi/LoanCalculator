import React from 'react';
import './GetLoanInput.css';
import GetLoanSearch from '../containers/GetLoanSearch';

class GetLoanInput extends React.Component {

    constructor(props) {
        super(props);

        this.loanAmount = React.createRef();
        this.loanDuration = React.createRef();
    }

    validateLoanDuration = () => {
        if(this.loanDuration.current.value <= 5) {
            this.loanDuration.current.value = "6";
            alert("Please enter duration greater than 5");
        } else if (this.loanDuration.current.value > 24) {
            this.loanDuration.current.value = "24"
            alert("Please enter duration less than 25");
        }
        this.props.onInputChange(this.loanAmount.current.value, this.loanDuration.current.value);
        
    }

    setInputFields = (amount, numMonths) => {
        this.loanAmount.current.value = amount;
        this.loanDuration.current.value = numMonths;
        this.props.onInputChange(amount, numMonths);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <GetLoanSearch onclick={this.setInputFields} />
                    </div>
                    <div className="col-md-8">
                        <div className="form-group">
                            <label className="form-input">Loan Amount : </label>
                            <input type="range"
                                    className="form-control ranger"
                                    defaultValue="500"
                                    min="500"
                                    max="5000"
                                    step="500"
                                    ref={this.loanAmount}
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-input">Loan Duration : </label>
                            <input type="tel"
                                    className="form-control"
                                    defaultValue="6"
                                    min="6"
                                    max="24"
                                    ref={this.loanDuration}
                            />
                        </div>
                        <button className="btn btn-info"
                                onClick={this.validateLoanDuration}
                        >Get Details</button>
                    </div>
                </div>
            </div>
        )
    }

};

export default GetLoanInput;