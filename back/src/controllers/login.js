const { User } = require("../DB_connection");

const login = async (req, res) => {
  const { email, password } = req.query;
  try {
    if (!email || !password) {
      return res.status(400).json({ message: "ERROR: Faltan datos." });
    }
    const user = await User.findOne({
      where: { email },
    });
    if (!user)
      res.status(404).json({ message: "ERROR: Usuario no encontrado." });
    user.password === password
      ? res.status(200).json({ access: true, id: user.id })
      : res.status(403).json({ message: "ERROR: Contraseña incorrecta." });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
module.exports = { login };
