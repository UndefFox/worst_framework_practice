


async function fetchUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();

        if (!response.ok) {
            throw new Error("Connection failed");
        }

        return users;
    }
    catch (error) {
        if (error instanceof TypeError || error instanceof Error) {
            throw Error("Connection failed");
        }
        else if (error instanceof SyntaxError) {
            throw error;
        }
    }
}


async function fetchUserById(id) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}/`);
        const users = await response.json();

        if (!response.ok) {
            return null;
        }

        return users;
    } catch (error) {
        if (error instanceof TypeError || error instanceof Error) {
            throw Error("Connection failed");
        }
        else if (error instanceof SyntaxError) {
            throw error;
        }
    }
}


async function fetchPosts() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const users = await response.json();

        if (!response.ok) {
            throw new Error("Connection failed");
        }

        return users;
    } catch (error) {
        if (error instanceof TypeError || error instanceof Error) {
            throw Error("Connection failed");
        }
        else if (error instanceof SyntaxError) {
            throw error;
        }
    }
}


async function fetchPostsByUserId(userId) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        const users = await response.json();

        if (!response.ok) {
            throw new Error("Connection failed");
        }

        return users;
    } catch (error) {
        if (error instanceof TypeError || error instanceof Error) {
            throw Error("Connection failed");
        }
        else if (error instanceof SyntaxError) {
            throw error;
        }
    }
}



export default {fetchUsers, fetchUserById, fetchPosts, fetchPostsByUserId};


