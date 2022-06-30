
module.exports = function (req, res, next) {
  if (!req.user) {
    console.log("AUTH FAILED");
    return res
      .status(401)
      .json({
        msg:
          'Middleware sign out'
      });
  }
  next();
};