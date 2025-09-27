import { createPool } from "mysql";

const pool = createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "test",
  connectionLimit: 10,
});

// the "?"" is the dynamic values

pool.query(`select * from user where id = ?`, [1], (error, result, field) => {
  if (error) {
    return console.log(error);
  }
  //   console.log(field);
  return console.log(result);
});
