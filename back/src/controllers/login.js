const { User } = require("../DB_connection");

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ msg: "Faltan Datos" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ msg: "Usuario no encontrado" });
    }
    if (user.password !== password) {
      return res.status(403).json({ msg: "Contraseña incorrecta" });
    } else {
      return res.status(200).json({ access: true });
    }
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};
module.exports = { login };
