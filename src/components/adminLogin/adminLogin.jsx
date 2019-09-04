import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from '../inputs/index';
import '../../styles/homepage.css';
import { loginStaff } from '../../actions/authAction';


export class AdminLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginDetails: {},
    };
  }

  onInputChange = (event) => {
    const { loginDetails } = this.state;
    loginDetails[event.target.id] = event.target.value;
    this.setState({ loginDetails });
  };

  onButtonSubmit = async (event) => {
    event.preventDefault();
    const { loginDetails } = this.state;
    const { loginStaff: login } = this.props;
    login(loginDetails);
  };

  render() {
    const { loginDetails } = this.state;
    const { auth} = this.props;
    const { loading, redirect } = auth;
    return (
      <>
        <form id="loginUser" onSubmit={this.onButtonSubmit}>
          <Input
            id="email"
            type="text"
            title="email"
            name="email"
            value={loginDetails.email}
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
            value={loginDetails.password}
            placeholder="password"
            onChange={this.onInputChange}
            required
          />
          {' '}
          <Input
            id="submit"
            type="submit"
            name=""
            value={loading ? 'loading...' : 'Sign In'}
            className="primary-btn"
          />
          <div className="links">
            <Link to="/">Forgot Password</Link>
          </div>
          <div className="or">
            <div className="bar" />
            <span>OR</span>
            <div className="bar" />
          </div>
          <footer id="main-footer">
            <p>Banka&copy; 2019</p>

          </footer>
        </form>
        {redirect && <Redirect to="/admindashboard" />}
      </>
    );
  }
}

AdminLogin.propTypes = {
  loginStaff: PropTypes.func.isRequired,
  auth: PropTypes.shape({ loading: {}, redirect: {} }).isRequired,
};

const mapStatetoProps = ({ auth }) => ({
  auth,
});

export default connect(mapStatetoProps, { loginStaff })(AdminLogin);
