import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from '../inputs/index';
import '../../styles/homepage.css';
import { signupClient } from '../../actions/authAction';


export class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signupDetails: {},
    };
  }
 
  onInputChange = (event) => {
    const { signupDetails } = this.state;
    signupDetails[event.target.id] = event.target.value;
    this.setState({ signupDetails });
  };

  onButtonSubmit = async (event) => {
    event.preventDefault();
    const { signupDetails } = this.state;
    const { signupClient: signup } = this.props;
    signup(signupDetails);
  };

  render() {
    const { signupDetails } = this.state;
    const { auth } = this.props;
    const { redirect, loading } = auth;
    return (
      <>
        <form id="loginUser" onSubmit={this.onButtonSubmit}>
          <Input
            id="firstName"
            type="text"
            title="firstName"
            name="firstName"
            value={signupDetails.firstName}
            placeholder="First Name"
            onChange={this.onInputChange}
            required
          />
          {' '}
          <Input
            id="lastName"
            type="text"
            title="lastName"
            name="lastName"
            value={signupDetails.lastName}
            placeholder="Last Name"
            onChange={this.onInputChange}
            required
          />
          {' '}
          <Input
            id="email"
            type="text"
            title="email"
            name="email"
            value={signupDetails.email}
            placeholder="Email"
            onChange={this.onInputChange}
            required
          />
          {' '}
          <Input
            id="password"
            type="password"
            title="password"
            name="password"
            value={signupDetails.password}
            placeholder="password"
            onChange={this.onInputChange}
            required
          />
          {' '}
          <Input
            id="submit"
            type="submit"
            name=""
            value={loading ? 'loading...' : 'Sign Up'}
            className="primary-btn"
          />
          <footer id="main-footer">
            <p>Banka&copy; 2019</p>
          </footer>
        </form>
        {redirect && <Redirect to="/dashboard" />}
      </>
    );
  }
}

Signup.propTypes = {
  signupClient: PropTypes.func.isRequired,
  auth: PropTypes.shape({ loading: {}, redirect: {} }).isRequired,
};

const mapStatetoProps = ({ auth }) => ({
  auth,
});

export default connect(mapStatetoProps, { signupClient })(Signup);
