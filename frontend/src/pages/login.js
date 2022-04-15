import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import StaticPage from '../components/common/staticPage'
import useGetAll from '../hooks/useGetAll'
import usePost from '../hooks/usePost'
import {ChooseUser , EnterPassword} from '../components/login'
import userStore from '../store/userStore'
import LoaderPage from '../components/common/loaderPage'

const Login = () => {

    const [ selectedUser, setSelectedUser ] = useState(null)
    const [ userList, setUserList ] = useState([])

    const _getAllUsers = useGetAll('/users')
    const _signin = usePost('/auth/signin')

    const { setUser } = userStore()
    const router = useRouter()

    useEffect(() => {
        setUser(null)
    }, [])

    useEffect(() => {
        if (_getAllUsers?.statusCode === 200) {
            _getAllUsers?.data.length? setUserList(_getAllUsers?.data) : router.push('/registry')
        }
    }, [_getAllUsers?.statusCode])

    useEffect(() => {
        if (_signin.statusCode === 200) {
            router.push('/')
            setUser(_signin.data)
        }
    }, [_signin.statusCode])

    const handleUserSelect = (usuario) => {
        setSelectedUser(usuario)
    }

    const handleResetUser = () => {
        setSelectedUser(null)
    }

    const handleSubmitForm = (credentials) => {
        _signin.fetch(credentials)
    }

    /**
     * Si la lista tiene usuarios (length > 0) y ya finalizó la petición !(loading === false) la condición es verdadera y se muestra:
     *      a) La card EnterPassword si es que selectedUser tiene un objeto, que es un truly value.
     *      b) La card ChooseUser si es que selectedUser es null, que es un falsy value.
     * Si la lista de usuarios está vacía (length === 0) y ya finalizó la petición !(loading === false), la condición es falsa
     *      y se muestra StaticPage para tapar el flasheo de esta página hasta que el useEffect realice la redirección a /registry.
     */
    return (_getAllUsers.data?.length && !_getAllUsers.loading)? 
                (selectedUser? 
                    <>
                        {_signin.loading && <LoaderPage />}
                        <EnterPassword  onSave={handleSubmitForm} 
                                        onResetUser={handleResetUser} 
                                        email={selectedUser?.Email}
                                        incorrectPassword={_signin.statusCode === 401}/> 
                    </> :
                    <ChooseUser userList={userList} onClick={handleUserSelect} />
                ) : 
                <StaticPage />
}

export default Login