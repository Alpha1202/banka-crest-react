import React, { Component } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import SideNavBar from '../sideNavBar/index';
import UserAccount from '../userAccount/index';
import UserAccountDetails from '../userAccount/accountDetails';
import ImageLink from '../ImageLink/index';
import { fetchAccountDetails, createAccount } from '../../actions/accountAction';
import '../../styles/user-dashboard.css';
import '../../styles/table.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'fade(rgb(141, 138, 138), 88%)',
    color: '#000',
  },
};


class Index extends Component {
  state = {
    modalIsOpen: false,
    form: {
      type: 'savings',
    },
  }

  componentDidMount() {
    const bankaUserEmail = localStorage.getItem('bankaUserEmail');
    this.props.fetchAccountDetails(bankaUserEmail);
  }

  componentDidUpdate(prevProps) {
    const bankaUserEmail = localStorage.getItem('bankaUserEmail');
    if (prevProps.account.newAccount.accountNumber !== this.props.account.newAccount.accountNumber) {
      this.props.fetchAccountDetails(bankaUserEmail);
    }
  }

 onInputChange = ({ target: { name, value } }) => {
   this.setState(prevStae => ({
     ...prevStae,
     form: {
       ...prevStae.form,
       [name]: value,
     },
   }));
 };

 closeModal = () => {
   this.setState({ modalIsOpen: false });
 }

onFormSubmit = async (event) => {
  event.preventDefault();
  const { form } = this.state;
  const type = { ...form };
  const { createAccount } = this.props;
  createAccount(type);
  this.closeModal();
}

openModal = () => {
  this.setState({ modalIsOpen: true });
}

afterOpenModal = () => {
  this.subtitle.style.color = '#f00';
}

render() {
  const { bankaUserfirstName, bankaUserlastName } = localStorage;

  const firstName = bankaUserfirstName;
  const lastname = bankaUserlastName;

  const Name = `${firstName.toUpperCase()} ${lastname.toUpperCase()}`;

  return (
    <div className="wrapper">
      <div className="box-wrapper">
        <SideNavBar openModal={this.openModal} />
        <div className="showcase" id="main">
          <UserAccount
            balance={this.props.account.userAccount.balance ? `$${this.props.account.userAccount.balance}` : 'NOT AVAILABLE'}
            type={this.props.account.userAccount.type ? `${this.props.account.userAccount.type}` : 'NOT AVAILABLE'}
          />
          <div className="div-box">
            <Modal
              isOpen={this.state.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <h2 ref={subtitle => this.subtitle = subtitle}>
                <ImageLink />
              </h2>
              <div className="modal-content">
                <form action="" id="createAccount" onSubmit={this.onFormSubmit}>
                  <div>
                    <label htmlFor="" className="modalTitle">Choose Account Type: </label>
                    <br />
                    <p>
Savings:
                      <input type="radio" name="type" value="savings" id="savings" checked onChange={this.onInputChange} />
                    </p>
                    <p>
Current:
                      <input type="radio" name="type" value="current" id="current" onChange={this.onInputChange} />
                    </p>
                    <span id="accountError" />
                  </div>
                  <br />
                  <input type="submit" id="openAccount" className="primary-btn" value="Open Account" />

                </form>

              </div>

            </Modal>
            <UserAccountDetails
              name={Name || 'NOT AVAILABLE'}
              accountNumber={this.props.account.userAccount.accountnumber || 'NOT AVAILABLE'}
              accountBalance={this.props.account.userAccount.balance || 'NOT AVAILABLE'}
              accountType={this.props.account.userAccount.type || 'NOT AVAILABLE'}
              accountStatus={this.props.account.userAccount.status || 'NOT AVAILABLE'}
            />
           
          </div>
        </div>
      </div>
    </div>
  );
}
}

const mapStatetoProps = ({ auth, account }) => ({
  auth,
  account,
});

export default connect(mapStatetoProps, { fetchAccountDetails, createAccount })(Index);
