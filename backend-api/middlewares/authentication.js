const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../env')


const verifyJWTDebugger = require('debug')('app:verifyJWT')

const authentication = (req, res, next) => {
  if (req.headers['x-auth-token'])
    req.headers['x-auth-token'] = 'Bearer ' + req.headers['x-auth-token']

  const authHeader =
    req.headers.authorization ||
    req.headers.Authorization ||
    req.headers['x-auth-token']

  verifyJWTDebugger('Auth Header Authorization: ' + authHeader)

  if (!authHeader?.startsWith('Bearer ')) return res.sendStatus(404)//not found error

  const token = authHeader.split(' ')[1]
  verifyJWTDebugger('Auth Header Authorization: ' + token)
  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    

    if (err || !decoded.user || !decoded.user.roles) return res.sendStatus(403)

    req.user = decoded.user;
    next()
  })
}

module.exports = authentication