import { useState } from 'react'
import { MdSend } from 'react-icons/md'

const MessageInput = ({onSave}) => {

    const [message, setMessage] = useState('')

    const handleSubmit = event => {
        event.preventDefault()
        onSave(message)
        setMessage('')
    }

    const handleChange = event => {
        setMessage(event.target.value)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input  type='text' 
                        placeholder='Ingrese su mensaje' 
                        className='form-control' 
                        autoFocus
                        value={message}
                        onChange={handleChange}
                        autoComplete='off'/>
                <button type='submit'>
                    <MdSend size={40} color='white'/>
                </button>
            </form>
            <style jsx>{`
                form {
                    width: 100%;
                    height: 10%;
                    display: flex;
                    align-items: flex-start
                }
                button {
                    background: none;
                    border: none;
                    margin: 0 0 0 1rem;
                }
            `}</style>
        </>
    )
}

export default MessageInput