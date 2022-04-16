import { Modal, Form } from 'react-bootstrap'
import Image from 'next/image'

const SelectUserIcon = ({show, onClose, onSave}) => {

    const animalList = ['bufalo.png', 'bufalo2.png', 'bufalo3.png', 'canguro.png', 'conejo.png', 'gato.png', 'gato2.png', 'gorila.png', 'hipopotamo.png', 'jabali.png', 'leopardo.png', 'lobo.png', 'mapache.png', 'mono.png', 'pardo.png', 'perezoso.png', 'perro.png', 'perro2.png', 'pinguino.png', 'rinoceronte.png', 'tigre.png', 'venado.png']

    return (
        <Modal  show={show} 
                onHide={onClose} 
                aria-labelledby='contained-modal-title-vcenter' 
                centered 
                className='font-montserrat'>
            <Form>
                <Modal.Header closeButton>
                    <Modal.Title>Seleccione un nuevo avatar</Modal.Title>
                </Modal.Header>
                <Modal.Body className='d-flex justify-content-center'>
                    <div className='text-center'>
                        {animalList.map((fileName, index) => 
                            <div className='userIcon center' key={index}>
                                <Image  src={`/animal_avatar_set/${fileName}`} 
                                        className='cursorPointer' 
                                        alt='userIcon' width={50} height={50} 
                                        onClick={() => onSave(fileName)}/>
                            </div>
                        )}
                    </div>
                </Modal.Body>
            </Form>
            <style jsx>{`
                .userIcon {
                    display: inline-block;
                    justify-content: center;
                    width: 3rem;
                    height: 3rem;
                    border-radius: 50%;
                    position: relative;
                    overflow: hidden;
                }
            `}</style>
      </Modal>
    )
}

export default SelectUserIcon