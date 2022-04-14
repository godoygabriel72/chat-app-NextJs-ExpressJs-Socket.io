const WarningLabel = ({children}) => {
    return <>
        <h1 className='text-end text-danger mb-0'>{children}</h1>
        <style jsx>{`
            h1 {
                font-size: 1rem;
            }
        `}</style>
    </>
}

export default WarningLabel