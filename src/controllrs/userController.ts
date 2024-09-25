import { Request, Response } from 'express';
import { User } from '../interfaces/user';
import fs from 'fs';
import jsonFile from 'jsonfile';
import path from 'path';

const usersFilePath = path.join(__dirname, '../../src/data/users.json');

const readUsersFromFile = (): User[] => {
    const fileData: User[] = jsonFile.readFileSync(usersFilePath);
    return fileData;
};

const writeUsersToFile = (users: User[]) => {
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
};

//c
export const createUser = (user: User) => {
    const users = readUsersFromFile();
    users.push(user);
    writeUsersToFile(users);
    return user;
};

//r
export const getUsers = (req: Request, res: Response) => {
    const users = readUsersFromFile();
    res.status(200).json(users);
};