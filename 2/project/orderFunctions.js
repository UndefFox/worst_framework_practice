import {orders} from './data.js';


export function getUserOrders(userId) {
    return orders.filter(order => order.userId === userId);
}


export function addProductToOrder(orderId, newProduct) {
    let i = orders.findIndex(order => order.id === orderId);

    if (i !== -1) {
        orders[i].products = [...orders[i].products, newProduct];
        return orders[i];
    }
    else {
        return null;
    }
}


export function getOrderSummary(orderId) {
    let order = orders.find(order => order.id === orderId);

    // Wasn't mentioned in the task, but why we don't check that id exists?
    if (order) {
        // Why?? Isn't it just waste of memory doing it this way instead of
        // directly placing values into requtired fields. Not like JS can
        // optimize it out.
        const { products, total, status, userId } = order;

        return {productsCount: products.length, total: `$${total.toFixed(2)}`,
            status: status.toUpperCase(), userId: userId};
    }
    else {
        return null;
    }
}
