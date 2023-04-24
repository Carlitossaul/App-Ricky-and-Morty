const { User } = require("../DB_connection.js");

const postUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password)
      res.status(400).json({ message: "ERROR: Faltan datos." });
    const [user, created] = await User.findOrCreate({
      where: { email, password },
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = { postUser };
