const Chats = ({children}) => {
    return (
        <>
            <div className='y-scroll'>
                {children}
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