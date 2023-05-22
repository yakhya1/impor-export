import os from 'os'
export {homedir, hostname, version, type}
import {arr} from './welcome.js'
const homedir = os.homedir();
const hostname = os.hostname();
const version = os.version();
const type = os.type()
console.log(arr)