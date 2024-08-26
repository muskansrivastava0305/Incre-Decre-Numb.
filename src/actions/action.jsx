export const inCreament = (num) => {
    return{
        type: "INCREAMENT",
        payload: num
    }
}

export const deCreament = () => {
    return{
        type: "DECREAMENT"
    }
}

