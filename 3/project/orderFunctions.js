import api from "./api.js"



async function getRecentPosts(limit) {
    try {
        let posts = await api.fetchPosts();

        posts.sort((a, b) => b.id - a.id);

        return posts.slice(0, limit);
    }
    catch (error) {
        throw `Couldn't complete the request. Reason: ${error}`;
    }
}


async function getPostsByTitleSearch(searchTerm) {
    try {
        let posts = await api.fetchPosts();

        searchTerm = searchTerm.toLowerCase();

        return posts.filter(post => post.title.toLowerCase().includes(searchTerm));
    }
    catch (error) {
        throw `Couldn't complete the request. Reason: ${error}`;
    }
}


async function getPostsStats() {
    try {
        const [users, posts] = await Promise.all([
            api.fetchUsers(),
            api.fetchPosts()
        ]);

        let totalPostCount = posts.length;
        let totalUserCount = users.length;
        let counts = [];
        posts.forEach(post => {
            if (counts[post.userId]) {
                counts[post.userId]++;
            }
            else {
                counts[post.userId] = 1;
            }

        });

        let avarage = counts.reduce((prev,current) => prev += current) / counts.length;

        return {
            totalPostCount: totalPostCount,
            totalUserCount: totalUserCount,
            userPostCountAvarage: avarage
        };
    }
    catch (error) {
        throw `Couldn't complete the request. Reason: ${error}`;
    }
}



export default {getRecentPosts, getPostsByTitleSearch, getPostsStats};
