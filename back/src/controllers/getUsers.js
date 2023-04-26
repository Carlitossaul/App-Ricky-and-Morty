const { User } = require("../DB_connection");

const getUsers = async (req, res) => {
  let users = await User.findAll();

  return res.status(200).json(users);
};

module.exports = { getUsers };
