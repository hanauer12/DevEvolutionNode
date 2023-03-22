const passport = require('../../auth/passport');

function validate() {
    return passport.authenticate('jwt-dev-evolution', {session: false});
}

module.exports = validate;