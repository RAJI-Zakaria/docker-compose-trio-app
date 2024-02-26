const { JWT_SECRET } = require('../env');


const authorization = (allowedRoles) => {
    return (req, res, next) => {
        console.log(req?.user)
        if (!req.user.roles || req.user.roles.length<=0) return res.sendStatus(401)
        console.log('req?.user.roles')
        console.log(req?.user.roles)
        console.log('allowedRoles')
        console.log(allowedRoles)

        const intersection = allowedRoles.filter(role => req.user.roles.includes(role));

        if (intersection.length > 0) {
            console.log("At least one allowed role is present in user roles");
        } else {
            return res.sendStatus(401)
        }
       
        
        next()
    }
}

module.exports = authorization;