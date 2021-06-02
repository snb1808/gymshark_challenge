import { Modal, Button } from 'react-bootstrap';
import './exercise-modal.css';

const ExerciseModal = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.content.name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Directions:</h4>
                <p dangerouslySetInnerHTML={{__html: props.content.transcript}}/>
            </Modal.Body>
            <Modal.Footer>
                <Button className='modal-button'>OK</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ExerciseModal;