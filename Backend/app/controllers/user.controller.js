exports.allAccess = (req, res) => {
  res.status(200).send("Join our community and SIGN IN .......");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content will be availble here.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content will be available here.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content will be available here.");
};
