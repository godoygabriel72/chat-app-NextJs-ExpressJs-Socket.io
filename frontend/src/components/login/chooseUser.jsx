import Link from 'next/link'
import Image from 'next/image'

const ChooseUser = ({userList, onClick}) => {

    const handleClick = onClick

    return (
        <div className='position-absolute h-100 w-100 d-flex justify-content-center align-items-center px-3'>
            <div className='card' style={{width: '25rem'}}>
                <div className='card-body'>
                    <h5 className='card-title'>Elige una cuenta</h5>
                    <p className='card-text'>Si no cuentas con una, puedes registrarte primero</p>
                </div>
                <ul className='list-group list-group-flush'>
                    {userList.map((user, index) =>
                        <li className='list-group-item py-1 px-4 outlineHover d-flex cursorPointer' 
                            key={index} 
                            onClick={() => handleClick(user)}>
                            <Image  src={(user?.Avatar)? `/animal_avatar_set/${user?.Avatar}` : '/user.png'} 
                                    className='cursorPointer' 
                                    alt='userIcon' width={50} height={50} 
                                    onClick={() => onSave(fileName)}/>
                            <div className='mx-2'>
                                <p className='fw-bolder m-0'>{user?.Nombre}</p>
                                <p className='fw-light m-0'>{user?.Email}</p>
                            </div>
                        </li>
                    )}
                </ul>
                <div className='card-body'>
                    <Link href='/registry'>
                        <a className='text-decoration-none d-grid gap-2'>
                            <button className='btn btn-outline-primary rounded-0'>
                                Regístrate
                            </button>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ChooseUser