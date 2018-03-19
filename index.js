const crypto = require('crypto');
const cipher = crypto.createCipher('aes192', 'a password');

let encrypted = cipher.update('some clear text data', 'utf8', 'hex');
encrypted += cipher.final('hex');
console.log(encrypted);


const decipher = crypto.createDecipher('aes192', 'a password');

var encrypte ='ca981be48e90867604588e75d04feabb63cc007a8f8ad89b10616ed84d815504';
let decrypted = decipher.update(encrypte, 'hex', 'utf8');
decrypted += decipher.final('utf8');
console.log(decrypted);
