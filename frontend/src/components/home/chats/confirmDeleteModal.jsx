import { Modal, Button, Form } from "react-bootstrap"

const ConfirmDeleteModal = ({show, onClose, onSave}) => {

    return (
        <Modal  show={show} 
                onHide={onClose} 
                aria-labelledby='contained-modal-title-vcenter' 
                centered 
                className='font-montserrat'>
            <Form>
                <Modal.Header closeButton>
                    <Modal.Title>Eliminar Mensaje</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Label>Estás seguro de que deseas eliminar este mensaje</Form.Label>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='outline-secondary' onClick={onClose}>Cancelar</Button>
                    <Button variant='outline-danger' onClick={onSave}>Eliminar</Button>
                </Modal.Footer>
            </Form>
      </Modal>
    )
}

export default ConfirmDeleteModal