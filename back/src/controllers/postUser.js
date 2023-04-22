const { User } = require("../DB_connection.js");

const postUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "Faltan datos",
    });
  }

  try {
    const [user, created] = await User.findOrCreate({
      where: { email, password },
    });
    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Error interno del servidor",
    });
  }
};

module.exports = { postUser };
