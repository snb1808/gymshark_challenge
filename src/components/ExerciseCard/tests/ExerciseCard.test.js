import { shallow } from 'enzyme';
import ExerciseCard from '../ExerciseCard';

describe('ExerciseCard', () => {
    let component;

    beforeEach(() => {
        const props = { exercise: {
                name: 'Bicep Curls',
                transcript: 'Bicep curls are bicep curls',
                male: { image: 'www.mensimage.com' },
                female: { image: 'www.womensimage.com' },
                bodyAreas: ['Arms', 'Biceps'],
            },
            gender: 'female',
        };

        component = shallow(<ExerciseCard {...props}/>);
    });

    it('should render correctly', () => {
        expect(component.debug()).toMatchSnapshot();
        expect(component.state().showInfo).toBe(false);
    });

    it('should set the state for a card when it is clicked', () => {
        component.simulate('click');

        expect(component.state().showInfo).toBe(true);
    });
})