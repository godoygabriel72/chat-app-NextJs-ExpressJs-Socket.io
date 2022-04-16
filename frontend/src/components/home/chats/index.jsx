import { useEffect, useRef, useState } from 'react'
import { IoIosClose } from 'react-icons/io'
import Content from './messageContent'
import ConfirmDeleteModal from './confirmDeleteModal'

const Chats = ({messages, currentUser, onDelete}) => {

    const chatParent = useRef(null)
    const [messageToDelete, setMessageToDelete] = useState(null)

    useEffect(() => {
        //Credit: https://stackoverflow.com/questions/37620694/how-to-scroll-to-bottom-in-react by Kai arnold
        const domNode = chatParent.current
        domNode && (domNode.scrollTop = domNode.scrollHeight)
     })

     const handleCloseModal = () => {
        setMessageToDelete(null)
     }

     const handleOpenModal = (selectedMessage) => {
        setMessageToDelete(selectedMessage)
     }

     const handleConfirmModal = () => {
        onDelete(messageToDelete)
        setMessageToDelete(null)
     }
    
    return (
        <>
            <ConfirmDeleteModal show={messageToDelete} onClose={handleCloseModal} onSave={handleConfirmModal} />
            <div className='chatContainer y-scroll' ref={chatParent}>
                {messages.map((message, index) =>
                    (currentUser?.id !== message?.user?.id)?
                        <div className='py-1' key={index}>
                            <div className='otherMessageBox'>
                                <Content userName={message?.user?.Nombre} messageContent={message?.content} />
                            </div>
                        </div> : 
                        <div className='py-1 d-flex justify-content-end' key={index}>
                            <div className='myMessageBox'>
                                <Content userName='Tú' messageContent={message?.content} />
                                <div className='messageArea'>
                                    <IoIosClose size={30} className='cursorPointer' onClick={() => handleOpenModal(message)}/>
                                </div>
                            </div>
                        </div>
                )}
            </div>
            <style jsx>{`
                .chatContainer {
                    width: 100%;
                    height: 90%;
                    overflow: scroll;
                    padding-bottom: 0.5rem;
                }             
                .otherMessageBox {
                    display: inline-block;
                    border-radius: 3px 18px 18px 18px;
                    background: #FFFFFF;
                }   
                .myMessageBox {
                    display: inline-block;
                    position: relative;
                    border-radius: 18px 3px 18px 18px;
                    background: #6F45A1;
                    color: white;
                }
                .messageArea {
                    display: flex;
                    justify-content: flex-end;
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    opacity: 0;
                    border-radius: 18px 3px 18px 18px;
                    top: 0;
                }
                .messageArea:hover {
                    opacity: 1;
                }
            `}</style>
        </>
    )
}

export default Chats