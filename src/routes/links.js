const express = require('express')

const { getUsers, createUsers, updateUsersById, deleteUsersById } = require('../controllers/UsersManuel')

const router = express.Router()

router.get('/api/Users', getUsers)
router.post('/api/Users', createUsers)

module.exports = router