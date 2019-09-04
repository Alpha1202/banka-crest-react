import React from 'react';


const AccountList = ({ account: accounts, clicked}) => {
  const data = accounts.map((account, i) => {
    const elKey = `${i}-${account.accountnumber}`;
    return (
      <div key={elKey}>
        <div className="table-row2" id="getAccountDetails" data-href="#">
        <div className="table-content" onClick="testJS('${account.accountnumber}'
      )"><a href="#">{account.accountnumber}</a></div>
        <div className="table-content"><a href="#">${account.owneremail}</a></div>
        <div className="table-content"><a href="#">$${account.balance}</a></div>
        <div className="table-content"><a href="#">${account.status}</a></div>
        <div className="table-content"><a href="#">${account.type}</a></div>
      </div>
      </div> 
    );
  });
  let title = clicked === 0 ? 'All Accounts' : 'Active Accounts';
  title = clicked === 2 ? 'Dormant Accounts' : title;
  return (

    <div className="list">
    <div className="list-header">
      <h3 className="tableText">{title}</h3>
    </div>
    <div className="table-row2">
      <div className="table-header">AC Number</div>
      <div className="table-header">Email</div>
      <div className="table-header">Balance</div>
      <div className="table-header">Status</div>
      <div className="table-header">Type</div>
    </div>
    {data}
  </div>
  );
};
export default AccountList;
