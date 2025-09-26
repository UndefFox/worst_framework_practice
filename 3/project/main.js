import userAPI from "./userFunctions.js"
import orderAPI from "./orderFunctions.js"
import utils from "./utils.js"



async function main() {
    const operationDelay = 100;

    console.info("1. Получение списка активных пользователей");
    const [activeUsers] = await Promise.all([
        userAPI.getActiveUsers(),
        utils.simulateLoading(operationDelay)
    ]);
    console.log(activeUsers);


    console.info("\n\n\n2. Получение детальной информации о первом пользователе (включая его посты)");
    const [user] = await Promise.all([
        userAPI.getUserWithPosts(1),
        utils.simulateLoading(operationDelay)
    ]);
    console.log(user);


    console.info("\n\n\n3. Получение последних постов в системе");
    const [posts] = await Promise.all([
        orderAPI.getRecentPosts(10),
        utils.simulateLoading(operationDelay)
    ]);
    console.log(posts);


    console.info("\n\n\n4. Получение статистики по постам и пользователям");
    const [postsStats] = await Promise.all([
        orderAPI.getPostsStats(),
        utils.simulateLoading(operationDelay)
    ]);
    console.log(postsStats);


    console.info("\n\n\n5. Демонстрация обработки ошибок");
    await utils.retryOperation(() => {throw new Error("Nope lol!")}, 10);
}



main().catch(error => {
   console.log(`Caught error during execution: ${error.message}`);
});


