require("dotenv").config();

module.exports = {
  // If using onine database
  development: {
    use_env_variable: "DATABASE_URL_DEVELOPMENT",
    url: process.env.DATABASE_URL_DEVELOPMENT,
    dialect: "postgres",
  },

  // test: {
  //   use_env_variable: "DATABASE_URL_TEST",
  // },
  // development: {
  //   database: "bookapp",
  //   username: "jeff",
  //   password: "password",
  //   host: "localhost",
  //   dialect: "postgres",
  // },

  test: {
    use_env_variable: "DATABASE_URL_TEST",
    url: process.env.DATABASE_URL_TEST,
    dialect: "postgres",
  },

  production: {
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    dialect: "postgres",
  },
};
