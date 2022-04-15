import { useState } from 'react'
import { BsEye, BsEyeSlash } from 'react-icons/bs'

const PasswordInput = ({ formik }) => {

  const [showPassword, setShowPassword] = useState(false)

  return (
    <>
      <div className='input-group'>
        <div className='form-floating flex-grow-1'>
          <input
            name='Password'
            className='form-control'
            placeholder='-'
            autoComplete='off'
            type={showPassword ? 'text' : 'password'}
            value={formik.values.Password}
            onChange={formik.handleChange}
          />
          <label htmlFor='password' className='px-0 text-secondary'>Contraseña</label>
        </div>
        <span className='input-group-text bg-white cursorPointer' onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? <BsEyeSlash /> : <BsEye />}
        </span>
      </div>
    </>
  )
  
}

export default PasswordInput
