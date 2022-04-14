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

    if (!_getAllUsers?.data?.length && _getAllUsers?.loading) return <StaticPage />

    return (!selectedUser? 
        <ChooseUser userList={userList} onClick={handleUserSelect} /> :
        <>
            {_signin.loading && <LoaderPage />}
            <EnterPassword  onSave={handleSubmitForm} 
                            onResetUser={handleResetUser} 
                            email={selectedUser?.Email}
                            incorrectPassword={_signin.statusCode === 401}/> 
        </>
    )
}

export default Login