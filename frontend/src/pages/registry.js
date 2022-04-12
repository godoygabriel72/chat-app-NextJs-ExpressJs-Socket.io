import { useFormik } from 'formik'
import EmailInput from '../components/registy/emailImput'
import PasswordInput from '../components/registy/passwordInput'
import NameInput from '../components/registy/nameInput'
import styles from '../styles/Registry.module.css'
import Head from 'next/head'
import Image from 'next/image'

const Registry = () => {

    const formik = useFormik({
        initialValues: { Nombre: '', Email: '', Password: '' },
        onSubmit: values => console.log(values)
    })

    return (
        <div className={styles.contenedor}>
            <Head>
                <title>Registro</title>
            </Head>
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
                            INICIAR SESIÓN
                        </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Registry