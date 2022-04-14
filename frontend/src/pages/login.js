import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import StaticPage from '../components/staticPage'
import useGetAll from '../hooks/useGetAll'

const Login = () => {

    const [userList, setUserList] = useState([])
    const { data, statusCode, loading } = useGetAll('/users')
    const router = useRouter()

    useEffect(() => {
        if (statusCode === 200) {
            data.length? setUserList(data) : router.push('/registry')
        }
    }, [statusCode])

    const handleUserSelect = (Email) => {
        console.log(Email)
    }

    return (data?.length && !loading)?
        (
            <div className='position-absolute h-100 w-100 d-flex justify-content-center align-items-center'>
                <div className='card' style={{width: '25rem'}}>
                    <div className='card-body'>
                        <h5 className='card-title'>Elige una cuenta</h5>
                        <p className='card-text'>Si no cuentas con una, puedes registrarte primero</p>
                    </div>
                    <ul className='list-group list-group-flush'>
                        {userList.map((user, index) =>
                            <li className='list-group-item py-1 px-5 outlineHover' key={index} onClick={() => handleUserSelect(user?.Email)}>
                                <p className='fw-bolder m-0'>{user?.Nombre}</p>
                                <p className='fw-light m-0'>{user?.Email}</p>
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
        ) :
        (
            <StaticPage />
        )
}

export default Login