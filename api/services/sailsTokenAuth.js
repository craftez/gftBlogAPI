var jwt = require('jsonwebtoken'),
    mySecret = "ThisIsMyStrongSecretShhhhh!";

module.exports.issueToken = function(payload) {
  return jwt.sign(
          payload,
          process.env.TOKEN_SECRET || mySecret
        );
};

module.exports.verifyToken = function(token, verified) {
  return jwt.verify(
            token,
            process.env.TOKEN_SECRET || mySecret,
            {},
            verified
         );
};
