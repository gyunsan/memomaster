const Pool = require("pg").Pool;
require("dotenv").config();
var parse = require("pg-connection-string").parse;

var config = parse(process.env.POSTGRES_URI);

const pool = new Pool(config);

module.exports = pool;
