const EmailInput = ({ formik }) => {

  return (
    <>
      <div className='form-floating'>
        <input
          name='Email'
          className='form-control'
          placeholder='-'
          autoComplete='off'
          type='email'
          value={formik.values.Email}
          onChange={formik.handleChange}
        />
        <label htmlFor='email' className='text-secondary'>Correo Electrónico</label>
      </div>
    </>
  )

}

export default EmailInput
