// INTENTIONAL SQL INJECTION FOR TRAINING
const db = require('../db');
function getUser(user, callback) {
  const query = "SELECT * FROM users WHERE username = ?";
  db.query(query, [user], callback);
}
module.exports = { getUser };
