import { Console } from 'console';
import fs from 'fs'
import uniqid from 'uniqid'

const add = (newUser) => {
    const users = loadUsers()
    const duplicateUsers = users.filter(user => user.email === newUser.email)
    if (duplicateUsers.length === 0) {
        users.push({ ...newUser, id: uniqid() })
        save(users)
        console.log(users);
    } else {
        console.log('email is already exist')
    }
}

const save = (data) => {
    console.log('in save')
    const dataJson = JSON.stringify(data);
    fs.writeFileSync('users.json', dataJson)
}


const deleteUser = (id) => {
    const users = loadUsers()
    const filteredUsers = users.filter(user => user.id !== id)
    if (users.length !== filteredUsers.length) {
        console.log("in")
        save(filteredUsers)

    } else {
        console.log(users)
        console.log(filteredUsers)
        console.log("no user with that specific id")
    }
}

const updateUser = (id,name,email) => {

    const users = loadUsers()
    const userIndex = users.findIndex((user)=> {return user.id === id }) 
    if(userIndex !== -1){
        const updatedUser = {...users[userIndex], name,email} 
        users[userIndex] = updatedUser; 
        save(users)

    }else{
        console.log('no user with that specific id')
    }
}

const loadUsers = () => {
    try {

        const dataBuffer = fs.readFileSync('users.json');
        const dataJson = dataBuffer.toString()
        const data = JSON.parse(dataJson);
        return data;
    } catch (e) {
        return [];
        console.log(e)
    }
}
// add({ name: 'Mob', email: 'mob@example.com' })
console.log(loadUsers());
// console.log(loadUsers())
// deleteUser('arhwsl4h4mmnz');

updateUser()