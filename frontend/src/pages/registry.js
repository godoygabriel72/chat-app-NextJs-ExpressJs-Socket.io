import { useRouter } from 'next/router'
import { useFormik } from 'formik'
import { useEffect } from 'react'
import Image from 'next/image'

import { EmailInput, NameInput, PasswordInput } from '../components/registry'
import styles from '../styles/Registry.module.css'
import userStore from '../store/userStore'
import usePost from '../hooks/usePost'
import LoaderPage from '../components/common/loaderPage'

const Registry = () => {

    const { data, statusCode, error, loading, fetch } = usePost('/auth/signup')
    const { setUser } = userStore()

    const router = useRouter()
    const formik = useFormik({
        initialValues: { Nombre: '', Email: '', Password: '' },
        onSubmit: (values) => {
            fetch(values)
        }
    })

    useEffect(() => {
        setUser(null)
    }, [])

    useEffect(() => {
        if(statusCode === 200) {
            setUser(data)
            router.push('/')
        } else if (statusCode !== 0 && statusCode !== 200) {
            console.log('Aparentemente hay un inconveniente: ', data)
        } else if (error) {
            console.log('Ocurrió un error', error)
        }
    }, [statusCode])

    return (        
        <>
            {loading && <LoaderPage />}
            <div className={styles.contenedor}>
                <form className={styles.formulario} onSubmit={formik.handleSubmit}>
                    <div className='d-flex justify-content-center'>
                    <Image src='/logo.png' alt='logo icon' width={150} height={120} />
                    </div>
                    <h1 className='text-center'>Chat App</h1>
                    <div className='col p-4'>
                        <div className='row mb-4'>
                            <NameInput formik={formik} />
                        </div>
                        <div className='row mb-4'>
                            <EmailInput formik={formik} />
                        </div>
                        <div className='row mb-4'>
                            <PasswordInput formik={formik}/>
                        </div>
                        <div className='row'>
                            <div className='d-grid'>
                            <button className={styles.boton} type='submit'>
                                REGISTRAR
                            </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Registry