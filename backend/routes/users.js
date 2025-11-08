// app.js
import { getUser } from './routes/users';
getUser("admin", (err, rows) => {
  if (err) {
    console.error("DB error:", err);
  } else {
    console.log("User rows:", rows);
  }
});
