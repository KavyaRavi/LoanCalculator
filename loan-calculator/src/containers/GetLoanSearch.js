import React from 'react';
import GetLoanItem from '../components/GetLoanItem';

const GetLoanSearch = ({onclick}) => {

    const loanQueries = JSON.parse(localStorage.getItem("loanDetails"));
    const loanQueryList = loanQueries.map((loanQuery, i) => {
        return <GetLoanItem loanQuery={loanQuery} key={i} onclick={onclick} />
    })

    return (
        <div className="container">
            {loanQueryList}
        </div>
    )

}

export default GetLoanSearch;