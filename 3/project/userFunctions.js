import api from "./api.js"



async function getActiveUsers() {
    try {
        let users = await api.fetchUsers();

        return users.filter((e, i) => i % 2);
    }
    catch (error) {
        throw `Couldn't complete the request. Reason: ${error}`;
    }
}


async function getUserWithPosts(userId) {
    try {
        const [users, posts] = await Promise.all([
            api.fetchUserById(userId),
            api.fetchPostsByUserId(userId)
        ]);

        return {...users, posts: {...posts}};
    }
    catch (error) {
        throw `Couldn't complete the request. Reason: ${error}`;
    }
}


async function findUserByEmail(email) {
    try {
        let users = await api.fetchUsers();

        let result = users.find(user => user.email === email);

        if (result) {
            return result;
        }

        return null;
    }
    catch (error) {
        throw `Couldn't complete the request. Reason: ${error}`;
    }
}



export default {getActiveUsers, getUserWithPosts, findUserByEmail};
