const Chats = ({messages, currentUser}) => {
    
    return (
        <>
            <div className='chatContainer y-scroll'>
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
                            <p className='fw-bolder m-0'>{message?.user?.Nombre}</p>
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
                    background: #849FFE;
                }
            `}</style>
        </>
    )
}

export default Chats