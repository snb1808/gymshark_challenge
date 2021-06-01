import { Component } from "react";
import Card from "react-bootstrap/Card";

class ExerciseCard extends Component {
    state = { showInfo: false };

    handleClick = () => this.setState({ showInfo: !this.state.showInfo });

    render = () => {
        const { exercise, sex } = this.props;

        return (
            <Card onClick={this.handleClick}>
                <Card.Img variant="top" src={exercise[sex].image}/>
                <Card.Body>
                    <Card.Title>{exercise.name}</Card.Title>
                    {this.state.showInfo && <Card.Text dangerouslySetInnerHTML={{__html: exercise.transcript}}/>}
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">{exercise.bodyAreas.toString().split(',').join(', ')}</small>
                </Card.Footer>
            </Card>
        )};
}

export default ExerciseCard;