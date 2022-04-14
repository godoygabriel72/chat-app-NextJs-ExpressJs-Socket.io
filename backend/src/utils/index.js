import bcryptjs from 'bcryptjs'

export const encryptPassword = async (password) => {
    const salt = await bcryptjs.genSalt(10)
    return await bcryptjs.hash(password, salt)
  }
  
  export const comparePassword = async (password, passwordHash) => {
    return await bcryptjs.compare(password, passwordHash);
  }
  