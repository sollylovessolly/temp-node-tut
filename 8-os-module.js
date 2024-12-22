const os = require('os')
//info abt current user
const user = os.userInfo()
console.log(user);
// method returns system uptime in seconds
console.log(`the system uptime is ${os.uptime()} SEConds`);

const curentOS = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),    
}
console.log(curentOS);
