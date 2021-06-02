import React from 'react';
import Header from '../Header';
import { shallow } from 'enzyme';

describe('Header', () => {
   it('should render correctly', () => {
       const component = shallow(<Header />)

       expect(component.debug()).toMatchSnapshot();
   });
});