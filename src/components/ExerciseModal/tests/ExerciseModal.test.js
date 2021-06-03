import { shallow } from 'enzyme';
import ExerciseModal from '../ExerciseModal';

describe('ExerciseModal', () => {
    it('should render correctly', () => {
        const props = {
            content: {
                name: 'Exercise name',
                transcript: 'Exercise transcript',
            },
        };

        const component = shallow(<ExerciseModal {...props} />);

        expect(component.debug()).toMatchSnapshot();
    });
});