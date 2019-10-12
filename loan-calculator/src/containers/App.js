import React from "react";
import axios from "../apis/getloanapi";
import GetLoanInput from "../components/GetLoanInput";
import LoanDetails from "../components/LoanDetails";
import "./App.css";

class App extends React.Component {
  state = {
    loanAmount: null,
    loanDuration: null,
    rateofInterest: null,
    monthlyPayment: null,
    loanDetails: []
  };

  componentDidMount() {
    this.setState({
      loanAmount: "500",
      loanDuration: "6"
    });
    const loanDetails = [
      {
        amount: "500",
        numMonths: "6"
      }
    ];
    localStorage.setItem("loanDetails", JSON.stringify(loanDetails));
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
  };

  getLoanDetails = async () => {
    const amount = this.state.loanAmount,
      numMonths = this.state.loanDuration;

    let loanDetails = localStorage.getItem("loanDetails");
    loanDetails = JSON.parse(loanDetails);
    loanDetails.push({ amount, numMonths });
    loanDetails = this.removeDupliactes(loanDetails);
    localStorage.setItem("loanDetails", JSON.stringify(loanDetails));

    const response = await axios.get("/interest", {
      params: {
        amount,
        numMonths
      }
    });

    const rateofInterest = response.data.interestRate + " %",
      monthlyPayment =
        response.data.monthlyPayment.amount +
        " " +
        response.data.monthlyPayment.currency;

    this.setState({
      rateofInterest,
      monthlyPayment,
      loanDetails
    });
  };

  removeDupliactes = values => {
    let concatArray = values.map(eachValue => {
      return Object.values(eachValue).join("");
    });
    let filterValues = values.filter((value, index) => {
      return concatArray.indexOf(concatArray[index]) === index;
    });
    return filterValues;
  };

  render() {
    return (
      <div className="container">
        <div className="header">
          <p>Loan Calculator</p>
        </div>
        <div className="row">
          <div className="col-md-8 col-sm-9">
            <GetLoanInput onInputChange={this.setLoanInputs} />
          </div>
          <div className="col-md-4 col-sm-9">
            <LoanDetails
              rateofInterest={this.state.rateofInterest}
              monthlyPayment={this.state.monthlyPayment}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
