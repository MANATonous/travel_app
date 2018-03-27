import React from 'react';
import ReactDOM from 'react-dom';
import Register from '../pages/Register';
import { mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

it('renders without crashing', ()=>{
  const div = document.createElement('div')
  ReactDOM.render(<Register />, div)
})

// it('', ()=>{
//
// })
