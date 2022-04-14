const Chats = ({messages}) => {
    return (
        <>
            <div className='y-scroll'>
                {messages.map((message, index) =>
                    <h1 key={index}>{message.message}</h1>
                )}
            </div>
            <style jsx>{`
                div {
                    width: 100%;
                    height: 90%;
                    overflow: scroll;
                }                
            `}</style>
        </>
    )
}

export default Chats