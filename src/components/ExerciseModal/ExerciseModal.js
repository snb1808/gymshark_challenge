import { Modal, Button } from 'react-bootstrap';
import './exercise-modal.css';

const ExerciseModal = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby='modal-title'
            centered
            backdrop='static'
            keyboard={false}
            aria-describedby='description'
        >
            <Modal.Header closeButton>
                <Modal.Title id='modal-title' tabindex='0'>
                    {props.content.name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Directions:</h4>
                <p id='description' dangerouslySetInnerHTML={{__html: props.content.transcript}}/>
            </Modal.Body>
            <Modal.Footer>
                <Button className='modal-button'>OK</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ExerciseModal;