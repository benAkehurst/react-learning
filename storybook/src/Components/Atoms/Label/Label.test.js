import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Label from './Label';

configure({ adapter: new Adapter() });

describe('<Label />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Label>Label</Label>);
  });

  it('should render the compoent', () => {
    expect(wrapper).toBeTruthy();
  });
});
