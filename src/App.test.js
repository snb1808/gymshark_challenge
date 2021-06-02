import { shallow, mount } from 'enzyme';
import App from './App';

describe('App', () => {
  let componentDidMount;
  let getData;

  beforeEach(() => {
    componentDidMount = jest.fn();

    getData = jest.fn().mockResolvedValue({
        exercises: [{
          name: 'Bicep Curls',
          transcript: 'Bicep curls are bicep curls',
          male: { image: 'www.mensimage.com' },
          female: { image: 'www.womensimage.com' },
        },
          {
          name: 'Dumbell Squats',
          transcript: 'Dumbell squats are dumbell squatss',
          male: { image: 'www.mensimage.com' },
          female: { image: 'www.womensimage.com' },
        }]
    })
  });

  it('should render correctly without exercise cards ', () => {
    const component = shallow(<App />);

    expect(component.debug()).toMatchSnapshot();
  });

  it('should call the API to get exercise data', () => {
    const component = mount(<App />);

    expect(getData).toHaveBeenCalled();
  });
});