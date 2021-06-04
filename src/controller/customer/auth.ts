import { catchError, succesRes } from '../../utils/apiResponse'
import { Request, Response } from 'express'
import { body, param, validationResult } from 'express-validator'
import { DEFAULTS } from '../../utils/constants'

import * as customerAuthService from '../../services/customerAuthService';
import * as videoService from '../../services/videoService';

/**
 * Login
 * @param req
 * @param res
 */
export const login = async (req: Request, res: Response) => {
  try {
    await body('email').isString().notEmpty().run(req)
    await body('password').isString().notEmpty().run(req)

    const validation_result = validationResult(req);
    if (!validation_result.isEmpty()) {
      catchError(validation_result.array(), res)
      return
    }

    const { email, password } = req.body

    const result = await customerAuthService.login({
      email,
      password,
    })

    succesRes(DEFAULTS.SUCCESS, res, result as any)
  } catch (error) {
    //console.log(error);
    catchError(error.message, res)
    return
  }

}


export const testAPi = async (req: Request, res: Response)=>{
  try{  

    const result = await videoService.testAPI(455555);

    succesRes(DEFAULTS.SUCCESS, res, result as any)

  }catch(error){
      catchError(error.message, res)
    return
  }
}
