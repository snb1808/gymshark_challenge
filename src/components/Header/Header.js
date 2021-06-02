import {
    Form,
    FormControl,
    Navbar,
    ToggleButton,
    ToggleButtonGroup,
} from 'react-bootstrap';
import logo from '../../Gymshark_logo.svg';
import './header.css';

const Header = ({ setGender, gender: selectedGender, filterExercises }) => {
    const genders = [{ gender: 'male', text: 'Men' }, { gender: 'female', text: 'Women' }];

    return (
        <Navbar bg="light" expand="lg" sticky='top'>
            <img aria-label='gymshark logo' className='header-image' src={logo}/>
            <Navbar.Brand>Exercise List</Navbar.Brand>
            <ToggleButtonGroup name='gender-toggle' className="mb-2">
                {genders.map(({ gender, text }) => (
                    <ToggleButton
                        type='radio'
                        variant='secondary'
                        name='radio'
                        value={gender}
                        checked={selectedGender === gender}
                        onChange={() => setGender(gender)}
                    >
                        {text}
                    </ToggleButton>
                ))}
            </ToggleButtonGroup>
            <div className='search-container'>
                <Form inline>
                    <FormControl
                        type="text"
                        placeholder="Search muscle to train"
                        className="mr-sm-2"
                        onChange={filterExercises}
                    />
                </Form>
            </div>
        </Navbar>
    );
}

export default Header;