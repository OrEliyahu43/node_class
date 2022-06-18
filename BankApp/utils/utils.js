import fs from 'fs'


export const parserClients = (path) => {
    return JSON.parse(fs.readFileSync(path, "utf-8"));
};

export const addClient = (usersData, path) => {
    fs.writeFileSync(path, JSON.stringify(usersData));
}
export const updateClient = (userDtata, path) => {
    fs.writeFileSync(path, JSON.stringify(userDtata));
}