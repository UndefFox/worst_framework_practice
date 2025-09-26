


function simulateLoading(delay) {
    return new Promise(resolve => setTimeout(resolve, delay));
}


function withTimeout(promise, timeoutMs) {
    let timeout = new Promise(resolve => setTimeout(resolve, timeoutMs, new Error("Promise timed out!")));

    return Promise.race([timeout, promise]).then(value => {
        return value;
    });
}


function retryOperation(operation, retries)  {
    let retryDelay = 1000;

    operation = new Promise(resolve => {
        resolve(operation());
    });

    for (let i = 0; i < retries; i++) {
        try {
            console.log("test");
            return withTimeout(operation, retryDelay);
        }
        catch (error) {
            retryDelay += 100;

            if (i == retries - 1) {
                return error;
            }
        }
    }
}



export default {simulateLoading, withTimeout, retryOperation};
