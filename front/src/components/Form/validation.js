
const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const regexPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,10}$/;

const validation = ({ username, password }) => {
    const errors = {}

    if (!regexEmail.test(username)) errors.username = "Su usuario debe ser un email"
    if (!username) errors.username = "Por favor, complete este campo..."
    if (username.length > 35) errors.username = "su usuario no debe ser mayor a 35 caracteres"

    if (!regexPass.test(password)) errors.password = "la contraseña debe tener al menos un numero , una letra mayúscula y una letra minúscula"
    if (password.length < 6 || password.length > 10) errors.password = "la contraseña debe tener entre 6 y 10 caracteres"
    if (password.length === 0) errors.password = "Por favor, complete este campo..."

    return errors

}

export default validation