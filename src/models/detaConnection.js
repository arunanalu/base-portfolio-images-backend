const { Deta } = require('deta');

const deta = Deta('e07bt6oy_JYV1TZv97veVquSc6f3DLbMQoQAkZqdb');

const users = deta.Base('users'); 

module.exports = users;