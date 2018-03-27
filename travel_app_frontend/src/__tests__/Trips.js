import React from 'react';
import ReactDOM from 'react-dom';
import Trip from '../Trip';
import { mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('renders trips without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Trip />, div);
});

// it('displays trip info from database', () => {
//   const component = mount(<Trip trip={trip} />)
//   expect(headings.text()).toEqual('Las Vegas')
// })
