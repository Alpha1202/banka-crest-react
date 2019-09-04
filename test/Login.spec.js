import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';

import { Index as Login } from '../src/components/login';

const mockStore = configureMockStore();


describe('App', () => {
  const props = {
    login: jest.fn(),
    auth: {
      staff: '',
      client: '',
      redirect: '',
    },
  };
  let app;
  let store;
  beforeEach(() => {
    const initialState = {};
    store = mockStore(initialState);

    app = shallow(<Login store={store} {...props} />);
  });

  it('renders successfully', () => {
    expect(app).toBeDefined();
  });
  it('Simulates a event on form  input', () => {
    app.setState({
      loginDetails: {
        email: 'email',
        password: 'password',
      },
    });
    expect(app).toMatchSnapshot();
    expect(app.state().loginDetails.email).toBe('email');
    expect(app.state().loginDetails.password).toBe('password');
  });
  it('Simulates an onSubmit event of form input', () => {
    const event = {
      target: {
        password: {
          id: 'password',
          value: 'password',
          name: 'password',
        },
        email: {
          id: 'email',
          value: 'email',
          name: 'email',
        },
      },
    };

    app.find('Input').at(2).simulate('click', event);
  });
  it('Simulates a form submit event', () => {
    app.setState({
      loginDetails: {
        email: 'test@gmail.com',
      },
      password: {
        password: 'password',
      },
    });
    app.find('form').simulate('submit', { preventDefault: jest.fn() });
  });
  it('Simulates an onchange event on form password input', () => {
    const event = {
      target: {
        id: 'password',
        value: 'password',
        name: 'password',
      },
    };
    app.find('Input').at(1).simulate('change', event);
  });
});
