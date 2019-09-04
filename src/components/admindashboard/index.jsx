import React, { Fragment, useState } from 'react';
import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import '../../styles/user-dashboard.css';
import '../../styles/admin-dashboard.css';
import '../../styles/table.css';
import { fetchAllAccount as dispatchAccounts } from '../../actions/accountAction';
import image from '../../assets/logo.png';
import Toggle from './toggle';
import SideNavBar from './sideNavbar';
import SummaryBox from './summaryBox';
import AccountList from './accountList';

export const AdminDashboard = ({ account: { allAccounts, activeAccounts, dormantAccounts } }) => {
  const [clicked, setClicked] = useState(0);
  let currAccounts = clicked === 0 ? allAccounts : activeAccounts;
  currAccounts = clicked === 2 ? dormantAccounts : currAccounts;
  return (
    <Fragment>
        <div className='wrapper'>
          <div className='header'>
            <Toggle />
          </div>
          <div className='box-wrapper'>
            <div className='side top-box'>
              <div className='left-image'>
                <figure>
                  <img src={image} alt='Logo' />
                  <figcaption>
                    <strong>Banka</strong>
                  </figcaption>
                </figure>
              </div>
              <hr />
              <SideNavBar
                clicked={clicked}
                setClicked={setClicked}
              />
            </div>
            <div className='showcase' id='main'>
              <div className='div-box'>
                <SummaryBox
                  clicked={clicked}
                  setClicked={setClicked}
                />
                <AccountList 
                  account={currAccounts}
                  clicked={clicked}
                />
              </div>
            </div>
          </div>
        </div>
        <footer>
          <p>Banka</p>
        </footer>
      </Fragment>
  );
};
  
const mapStatetoProps = ({ account }) => ({ account });

const didMount = () => {
  dispatchAccounts();
};

export default compose(
  connect(
    mapStatetoProps,
  ),
  lifecycle({
    componentDidMount: didMount,
  }),
)(AdminDashboard);
