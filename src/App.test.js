import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  it('should render correctly without exercise cards ', () => {
    const component = shallow(<App />);

    expect(component.debug()).toMatchSnapshot();
  });
});