import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';

import { Signup } from '../src/components/signup';

const mockStore = configureMockStore();

describe('App', () => {
  const props = {
    signup: jest.fn(),
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

    app = shallow(<Signup store={store} {...props} />);
  });

  it('renders successfully', () => {
    expect(app).toBeDefined();
  });
  it('Simulates a event on form input', () => {
    app.setState({
      signupDetails: {
        firstName: 'Eze',
        lastName: 'test',
        email: 'email',
        password: 'password',
      },
    });
    expect(app).toMatchSnapshot();
    expect(app.state().signupDetails.email).toBe('email');
    expect(app.state().signupDetails.password).toBe('password');
    expect(app.state().signupDetails.firstName).toBe('Eze');
    expect(app.state().signupDetails.lastName).toBe('test');
  });
  it('Simulates a form submit event', () => {
    app.setState({
      signupDetails: {
        email: 'test@gmail.com',
      },
      password: {
        password: 'password',
      },
      firstName: {
        firstName: 'test',
      },
      lastName: {
        lastName: 'test',
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
    app.find('Input').at(3).simulate('change', event);
  });
});
