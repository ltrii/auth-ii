
module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/auth.sqlite3'
    },
    migrations: {
      directory: './data/migrations',
    },
  }

};