import express from 'express';
import {getUsers} from '../controllrs/userController';

const userRouter = express.Router();

userRouter.get('/users', getUsers);

export default userRouter 