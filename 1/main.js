


// Task 1
function validateUsername(username) {

    if (!username || typeof(username) !== 'string') {
        return "Parametr 'username' must be a string";
    }
    else if (!(username.length > 4 && username.length < 16)) {
        return "Parametr 'username' must have length of 5-15";
    }


    return null;
}

console.log(" --- Task 1: validateUsername(username) ---------- ");
console.log("validateUsername(new Array())");
console.warn(`\t ${validateUsername(new Array())}`);
console.log("validateUsername(null)");
console.warn(`\t ${validateUsername(null)}`);
console.log("validateUsername(\"ADog\")");
console.warn(`\t ${validateUsername("ADog")}`);
console.log("validateUsername(\"IDKWhatToEvenWriteHere\")");
console.warn(`\t ${validateUsername("IDKWhatToEvenWriteHere")}`);
console.log("validateUsername(\"UndefFox\")");
console.info(`\t ${validateUsername("UndefFox")}`);



// Task 2
function validateEmail(email) {

    if (!email || typeof(email) !== 'string') {
        return "Parametr 'email' must be a string";
    }
    // #C++ is better and it should be allowed
    // else if (let d = email.indefOf('@'); !(d > -1 && email.includes('.', d))) {
    //     return "Email is not in the correct format";
    // }
    let d = email.indexOf('@');
    if (!(d > -1 && email.includes('.', d))) {
        return "Email is not in the correct format";
    }


    return null;
}

console.log(" --- Task 2: validateEmail(email) ---------- ");
console.log("validateEmail(new Array())");
console.warn(`\t ${validateEmail(new Array())}`);
console.log("validateEmail(null)");
console.warn(`\t ${validateEmail(null)}`);
console.log("validateEmail(\"WhatIsIt@com\")");
console.warn(`\t ${validateEmail("WhatIsIt@com")}`);
console.log("validateEmail(\"UndefFox@gmail.com\")");
console.info(`\t ${validateEmail("UndefFox@gmail.com")}`);



// Task 3
function validateAge(age) {

    if (!age || typeof(age) !== 'number') {
        return "Parametr 'age' must be a number";
    }
    else if (age % 1 != 0) {
        return "The number must be whole"
    }


    return null;
}

console.log(" --- Task 3: validateAge(age) ---------- ");
console.log("validateAge(new Array())");
console.warn(`\t ${validateAge(new Array())}`);
console.log("validateAge(null)");
console.warn(`\t ${validateAge(null)}`);
console.log("validateAge(10.5)");
console.warn(`\t ${validateAge(10.5)}`);
console.log("validateAge(21)");
console.info(`\t ${validateAge(21)}`);



// Task 4
function validateAgreement(isAgreed) {

    if (typeof(isAgreed) !== 'boolean') {
        return "Parametr 'isAgreed' must be a boolean";
    }
    else if (!isAgreed) {
        return "They must agree duh!"
    }


    return null;
}

console.log(" --- Task 4: validateAgreement(isAgreed) ---------- ");
console.log("validateAgreement(new Array())");
console.warn(`\t ${validateAgreement(new Array())}`);
console.log("validateAgreement(null)");
console.warn(`\t ${validateAgreement(null)}`);
console.log("validateAgreement(false)");
console.warn(`\t ${validateAgreement(false)}`);
console.log("validateAgreement(true)");
console.info(`\t ${validateAgreement(true)}`);



// Task 5
function validatePhone(phone) {

    if (!phone && typeof(phone) == "undefined") {
        return null;
    }
    else if (phone && typeof(phone) == "string") {
        if (phone.indexOf('+7') != 0) {
            return "Phone number must start with +7";
        }
        else if (phone.length != 12) {
            return "Phone number must be 12 numbers long";
        }


        return null;
    }

    return "Parametr 'phone' must be a string or an undefined";
}

console.log(" --- Task 5: validatePhone(phone) ---------- ");
console.log("validatePhone(new Array())");
console.warn(`\t ${validatePhone(new Array())}`);
console.log("validatePhone(null)");
console.warn(`\t ${validatePhone(null)}`);
console.log("validatePhone(\"+21431230412\")");
console.warn(`\t ${validatePhone("+21431230412")}`);
console.log("validatePhone(\"+7143123041200000\")");
console.warn(`\t ${validatePhone("+7143123041200000")}`);
console.log("validatePhone(\"+78005553535\")");
console.info(`\t ${validatePhone("+78005553535")}`);
let num;
console.log("let num;");
console.log("validatePhone(num)");
console.info(`\t ${validatePhone(num)}`);
