const chefReceived = (orderNo) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.getElementById(orderNo).innerText = 'Chef has recieved the order and has started preparing'
            resolve(orderNo)
        }, 2000)
    })
}

const pizzaSauceAdded = (orderNo) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.getElementById(orderNo).innerText = 'Pizza sauce added'
            resolve(orderNo)
        }, 10000)
    })
}

const firstCheese = (orderNo) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.getElementById(orderNo).innerText = 'First layer of cheese added'
            resolve(orderNo)
        }, 5000)
    })
}

const toppingsAdded = (orderNo) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.getElementById(orderNo).innerText = 'Toppings added'
            resolve(orderNo)
        }, 12000)
    })
}

const secondCheese = (orderNo) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.getElementById(orderNo).innerText = 'Second layer of cheese added'
            resolve(orderNo)
        }, 5000)
    })
}

const pizzaBaked = (orderNo) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.getElementById(orderNo).innerText = 'Pizza baked!'
            resolve(orderNo)
        }, 15000)
    })
}

const oreganoAdded = (orderNo) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.getElementById(orderNo).innerText = 'Oregano added and packed'
            resolve(orderNo)
        }, 8000)
    })
}

const packageRecieved = (orderNo) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.getElementById(orderNo).innerText = 'Package recieved at counter'
            resolve(orderNo)
        }, 2000)
    })
}
