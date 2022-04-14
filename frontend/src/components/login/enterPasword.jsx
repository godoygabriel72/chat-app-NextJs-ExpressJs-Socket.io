import { PasswordInput } from '../registry'
import { CgCloseO } from 'react-icons/cg'
import { useFormik } from 'formik'
import WarningLabel from '../common/warningLabel'

const EnterPassword = ({onSave, onResetUser, email, incorrectPassword}) => {

    const formik = useFormik({
        initialValues: { Password: '' },
        onSubmit: (values) => {
            onSave({Email: email, Password: values.Password})
        }
    })

    return (
        <div className='position-absolute h-100 w-100 d-flex justify-content-center align-items-center'>
            <form className='card' style={{width: '25rem'}} onSubmit={formik.handleSubmit}>
                <div className='card-body pb-0'>
                    <h5 className='card-title'>Ingresa la contraseña</h5>
                    <div className='d-flex justify-content-between'>
                        <p className='card-text mb-0'>{email}</p>
                        <CgCloseO size={25} color='gray' className='cursorPointer' onClick={() => onResetUser(null)}/>
                    </div>
                </div>
                <div className='card-body d-grid gap-2'>
                    <PasswordInput formik={formik} />
                    {incorrectPassword && <WarningLabel>Contraseña incorrecta</WarningLabel>}
                    <button type='sumbit' className='btn btn-outline-primary rounded-0 mt-3'>
                        Iniciar Sesión
                    </button>
                </div>
            </form>
        </div>
    )
}

export default EnterPassword