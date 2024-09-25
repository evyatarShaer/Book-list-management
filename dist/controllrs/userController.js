"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = exports.createUser = void 0;
const fs_1 = __importDefault(require("fs"));
const jsonfile_1 = __importDefault(require("jsonfile"));
const path_1 = __importDefault(require("path"));
const usersFilePath = path_1.default.join(__dirname, '../../src/data/users.json');
const readUsersFromFile = () => {
    const fileData = jsonfile_1.default.readFileSync(usersFilePath);
    return fileData;
};
const writeUsersToFile = (users) => {
    fs_1.default.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
};
//c
const createUser = (user) => {
    const users = readUsersFromFile();
    users.push(user);
    writeUsersToFile(users);
    return user;
};
exports.createUser = createUser;
//r
const getUsers = (req, res) => {
    const users = readUsersFromFile();
    res.status(200).json(users);
};
exports.getUsers = getUsers;
