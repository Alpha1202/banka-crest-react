import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';

import App from '../src/components/admindashboard/summaryBox';

const mockStore = configureMockStore();

describe('App', () => {
  const props = {
    setClicked: jest.fn(),
    clicked: '',
  };
  let app;
  let store;
  beforeEach(() => {
    const initialState = {};
    store = mockStore(initialState);

    app = shallow(<App store={store} {...props} />);
  });

  it('renders successfully', () => {
    expect(app).toBeDefined();
  });
});
