import { useEffect, useRef } from 'react'

const Chats = ({messages, currentUser}) => {

    const chatParent = useRef(null)

    useEffect(() => {
        //Credit: https://stackoverflow.com/questions/37620694/how-to-scroll-to-bottom-in-react by Kai arnold
        const domNode = chatParent.current
        domNode && (domNode.scrollTop = domNode.scrollHeight)
     })
    
    return (
        <>
            <div className='chatContainer y-scroll' ref={chatParent}>
                {messages.map((message, index) =>
                    (currentUser?.id !== message?.user?.id)?
                        <div className="py-1" key={index}>
                            <div className='otherMessageBox'>
                                <p className='fw-bolder m-0'>{message?.user?.Nombre}</p>
                                <p className='fw-light m-0'>{message?.content}</p>
                            </div>
                        </div> : 
                        <div className="py-1 d-flex justify-content-end" key={index}>
                        <div className='myMessageBox'>
                            <p className='fw-bolder m-0'>Tú</p>
                            <p className='fw-light m-0'>{message?.content}</p>
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
                    padding: 0.5rem 2rem;
                    background: #FFFFFF;
                }   
                .myMessageBox {
                    display: inline-block;
                    border-radius: 18px 3px 18px 18px;
                    padding: 0.5rem 2rem;
                    background: #6F45A1;
                    color: white;
                }
            `}</style>
        </>
    )
}

export default Chats