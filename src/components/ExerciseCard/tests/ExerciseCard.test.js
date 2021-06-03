import { shallow } from 'enzyme';
import ExerciseCard from '../ExerciseCard';

describe('ExerciseCard', () => {
    it('should render correctly', () => {
        const props = { exercise: {
            name: 'Bicep Curls',
                transcript: 'Bicep curls are bicep curls',
                male: { image: 'www.mensimage.com' },
                female: { image: 'www.womensimage.com' },
                bodyAreas: ['Arms', 'Biceps'],
            },
            gender: 'female',
        };

        const component = shallow(<ExerciseCard {...props}/>);

        expect(component.debug()).toMatchSnapshot();
    });
})