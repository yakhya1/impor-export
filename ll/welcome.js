import os from 'os'
const type = os.type()
const arr = `Привет, юзер. Вижу ты зашел с ${type}`
console.log(arr);
export {arr}