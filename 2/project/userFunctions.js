
import {users} from './data.js';


export function createUser({name = null, email = null}) {
    // Let's be real, database should be sorted by ID anyways
    let id = users[users.length - 1].id + 1;
    let active = true;

    let user = {id: id, name: name, email: email, active: active};

    users.push(user);

    return user;
}


// Couldn't find any good way to utilize deconstruction, so decided against it
export function findUserById(id) {
    let user = users.find(user => user.id === id);

    if (user)
        return {name: user.name, email: user.email};
    else
        return null;
}


export function updateUser(id, updatedFields) {
    let i = users.findIndex(user => user.id === id);


    if (i !== -1) {
        // Small check that makes sure we are only updating existing values.
        // Seems like the best way of filtering out required values right now.
        let newUser = {...users[i], ...updatedFields};

        users[i] = {...users[i], ...{name: newUser.name, email: newUser.email}};

        return users[i];
    }
    else {
        return null;
    }
}
