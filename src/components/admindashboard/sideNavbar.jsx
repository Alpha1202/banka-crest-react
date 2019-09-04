import React, { Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import '../../styles/user-dashboard.css';
import '../../styles/admin-dashboard.css';
import '../../styles/table.css';
import logOut from '../Logout';
import { fetchAllAccount, fetchAllActiveAccounts, fetchAllDormantAccount } from '../../actions/accountAction';
import Store from '../../store/index';


export const SideBar = ({ clicked, setClicked }) => (
  <Fragment>
    <div className="left-links">
      <ul>
        <li key={1} id="nav-acc">
          <Link
            to="#"
            id="side-users"
            className={clicked === 0 ? ' selected' : ''}
            onClick={() => {
              fetchAllAccount()(Store.dispatch);
              setClicked(0);
            }}
          >
            <i className="fas fa-users" />
              All Accounts
          </Link>
        </li>
        <li key={2} id="nav-active">
          <Link
            to="#"
            id="side-active"
            className={clicked === 1 ? ' selected' : ''}
            onClick={() => {
              fetchAllActiveAccounts()(Store.dispatch);
              setClicked(1);
            }}
          >
            <i className="fas fa-chart-line" />
              Active Accounts
          </Link>
        </li>
        <li key={3} id="nav-dormant">
          <Link
            to="#"
            id="side-deactive"
            className={clicked === 2 ? ' selected' : ''}
            onClick={() => {
              fetchAllDormantAccount()(Store.dispatch);
              setClicked(2);
            }}
          >
            <i className="fas fa-bell-slash" />
              Dormant Accounts
          </Link>
        </li>
        <li key={3} id="nav-dormant">
          <Link
            to="/"
            id="side-deactive"
            onClick={() => {
              logOut();
            }}
          >
            <i className="fas fa-bell-slash" />
              Logout
          </Link>
        </li>
      </ul>
    </div>
  </Fragment>
);

const mapStatetoProps = state => ({
  account: state.accounts,
});

export default connect(
  mapStatetoProps,
)(SideBar);
