import { ILogin } from '../@types/login'

const login = async (data: ILogin) => {
  return data.password
}

export { login }
