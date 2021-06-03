import { Component } from 'react';
import Card from 'react-bootstrap/Card';
import './exercise-card.css';
import ExerciseModal from '../ExerciseModal/ExerciseModal';

class ExerciseCard extends Component {
    state = { showInfo: false };

    handleClick = () => this.setState({ showInfo: !this.state.showInfo });

    render = () => {
        const { exercise, gender } = this.props;

        return (
            <Card role='button' className='exercise-card' onClick={this.handleClick}>
                <Card.Img
                    role='button'
                    aria-label={`${exercise.name} image`}
                    variant='top'
                    src={exercise[gender].image}
                />
                <Card.Body>
                    <Card.Title>{exercise.name}</Card.Title>
                     <ExerciseModal content={exercise} show={this.state.showInfo}/>
                </Card.Body>
                <Card.Footer>
                    <small aria-label='body areas' className="text-muted">
                        {exercise.bodyAreas.toString().split(',').join(', ')}
                    </small>
                </Card.Footer>
            </Card>
        )};
}

export default ExerciseCard;