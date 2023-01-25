
const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const regexPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,10}$/;

const validation = ({ username, password }) => {
    const errors = {}

    if (!regexEmail.test(username)) errors.username = "El nombre de ususario debe ser un email"
    if (!username) errors.username = "el nombre de usuario no debe estar vacio"
    if (username.length > 35) errors.username = "el nombre de usuario no debe tener mas de 35 caracteres"

    if (!regexPass.test(password)) errors.password = "la contraseña debe tener al menos un dígito numérico , una letra mayúscula y una letra minúscula"
    if (password.length < 6 || password.length > 10) errors.password = "la contraseña debe tener entre 6 y 10 caracteres"

    return errors

}

export default validation