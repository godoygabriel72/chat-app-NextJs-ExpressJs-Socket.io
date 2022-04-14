const EmailInput = ({ formik }) => {

  return (
    <>
      <div className='form-floating'>
        <input
          name='Nombre'
          className='form-control'
          placeholder='-'
          autoComplete='off'
          type='text'
          value={formik.values.Nombre}
          onChange={formik.handleChange}
        />
        <label htmlFor='email' className='text-secondary'>Nombre</label>
      </div>
    </>
  )
  
}

export default EmailInput