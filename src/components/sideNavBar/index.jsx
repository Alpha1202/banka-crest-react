import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import image from '../../assets/logo.png';
import logOut from '../Logout';


export const Index = ({ openModal }) => (
  <div className="side top-box">
    <div className="left-image">
      <figure>
        <Link to="/"><img src={image} alt="Logo" /></Link>
        <figcaption>
          <strong>Banka</strong>
        </figcaption>
      </figure>
    </div>
    <hr />
    <div className="left-links">
      <ul>
        <li>
          <Link to="#dashboard" className="selected">
            <i className="fas fa-home fa-1x" />
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/dashboard" id="links" onClick={openModal}>
            <i className="fas fa-envelope-open" />
            Create Account
          </Link>
        </li>
        <li>
          <Link to="#" id="links" onClick={() => logOut()}>
            <i className="fas fa-envelope-open" />
            Logout
          </Link>
        </li>
      </ul>
    </div>
  </div>
);

const mapStatetoProps = ({ auth, account }) => ({
  auth,
  account,
});

export default connect(mapStatetoProps)(Index);
