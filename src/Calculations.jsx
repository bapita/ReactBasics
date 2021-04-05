
const add = (a,b) => {
    return (a+b);
}
const div = (a,b) => {
    return (a/b).toFixed(2);
}

const subs = (a,b) => {
    return (a-b);
}
const mult = (a,b) => {
    return (a*b);
}

export default add;
export {div, subs, mult};