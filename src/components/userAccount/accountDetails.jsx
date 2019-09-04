import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import '../../styles/user-dashboard.css';
import '../../styles/table.css';
import { fetchAccountDetails } from '../../actions/accountAction';


export class AccountDetails extends Component {
    state = {
      userAccount: {},
    }
    
    render() {
     
      return (
        <section className="boxes boxes-small box-account">
          <div className="box account">
            <Link id="account-details">
              <h1>Account Details:</h1>
              <span />
              <div className="table">
                <div className="table-row" id="accountTable">
                  <div className="table-head">Name :</div>
                  <div className="table-body">{this.props.name}</div>
                </div>
                <div className="table-row">
                  <div className="table-head">Account Number :</div>
                  <div className="table-body">{this.props.accountNumber}</div>
                </div>
                <div className="table-row">
                  <div className="table-head">Account Balance</div>
                  <div className="table-body">{this.props.accountBalance}</div>
                </div>
                <div className="table-row">
                  <div className="table-head">Account Type</div>
                  <div className="table-body">{this.props.accountType}</div>
                </div>
                <div className="table-row">
                  <div className="table-head">Account Status</div>
                  <div className="table-body">{this.props.accountStatus}</div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      );
    }
}

const mapStatetoProps = ({ account }) => ({
  account,
});

export default connect(mapStatetoProps, { fetchAccountDetails })(AccountDetails);
