const knex = require('knex')
const config = require('./knexfile')
const env = process.env.NODE_ENV || 'development'
const connection = knex(config[env])


const getCreators = (db = connection) => {
  return db('creators')
}

const getUsers = (db = connection) => {
  return db('users')
}

const addUser = (db = connection) => {
  console.log(user)
  return db('user')
  
  
}



module.exports = {
  getCreators,
  getUsers,
  addUser
}
