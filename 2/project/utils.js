

export function calculateTotal(...prices) {
    return prices.reduce((sum, num) => sum + num, 0);
}


export function formatUserInfo(user) {
    const {name, email, isActive} = user;

    return `Пользователь: ${name} (${email}). Status: ${isActive ? "Active" : "Inactive"}`
}
