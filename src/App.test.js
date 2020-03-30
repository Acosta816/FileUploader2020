import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from './App';


describe('TestSuite: App Component', ()=> {

  it('Smoke: renders without crashing', ()=> {
    const div = document.createElement('div');

    ReactDOM.render(<App/> , div);
    ReactDOM.unmountComponentAtNode(div);
  })

})