// INTENTIONALLY VULNERABLE
require('dotenv').config();
const password = process.env.DB_PASSWORD;
module.exports = { password };
