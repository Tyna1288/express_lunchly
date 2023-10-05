
/** Database for Lunchly. */

const pg = require("pg");

const db = new pg.Client("postgresql://postgres:1234567@localhost:5433/lunchly");

db.connect();

module.exports = db;



