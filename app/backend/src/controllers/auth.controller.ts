import { Response, Request, response } from 'express';
import {StatusCodes} from 'http-status-codes'
import  {IUser}  from "../interfaces/IAuth.User.Service"
import AuthService from '../services/auth.service';

export default class AuthController { 
  constructor(private authServ: AuthService) {
   this.authServ = new AuthService();   
  }

  async login(req: Request, res: Response) {
    const key = await this.authServ.login(req.body);
    res.status(200).json({token: key});
  }

  getUserRole(req: Request, res: Response) {
    const token = req.headers.authorization as string;    
    const value = this.authServ.getUserRole(token) as IUser;    

    const response = {
      role: value['role']
    }
    res.status(200).json(response);
  } 

}
