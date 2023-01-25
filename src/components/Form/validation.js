
const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

const validation = (userData) => {
    const errors = {}

    if (username !== regexEmail.test(userData)) errors.username = "the user must be an email address"
    if (!username) errors.username = "the user name cannot be empty"
    if (username > 35) errors.username = "the user name must not be longer than 35 characters"


}