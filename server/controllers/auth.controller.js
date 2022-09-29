// signin , signup , update

/*
  signup user
  required : {
    req.body.email,
    req.body.password,
    req.body.nickname,
  }
*/
const signup = (req, res) => {
  res.send("signup");
};

/*
  signin user
  required : {
    req.body.email,
    req.body.password
  }
*/
const signin = (req, res) => {
  res.send("signin");
};

module.exports = {
  signin,
};
