const Content = ({userName, messageContent}) => {
    return (
        <div className='ps-4 pe-5 py-2'>
            <p className='fw-bolder m-0'>{userName}</p>
            <p className='fw-light m-0'>{messageContent}</p>
        </div>
    )
}

export default Content