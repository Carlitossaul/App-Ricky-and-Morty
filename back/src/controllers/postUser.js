const { User } = require("../DB_connection.js");

const postUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const [user, created] = await User.findOrCreate({
      where: { email, password },
    });
    return res.status(200).json({ message: "User created successfully!" });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

module.exports = { postUser };
