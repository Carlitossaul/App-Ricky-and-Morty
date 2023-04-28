const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const regexPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,10}$/;

const validation = ({ email, password, password2 }) => {
  const errors = {};

  if (!regexEmail.test(email)) errors.email = "Your username must be an email";
  if (!email) errors.email = "Please complete this field...";
  if (email.length > 35)
    errors.email = "Your username must not be longer than 35 characters";

  if (!regexPass.test(password))
    errors.password =
      "The password must have at least one number, one uppercase letter, and one lowercase letter.";
  if (password.length < 6 || password.length > 10)
    errors.password = "password must be between 6 and 10 characters";
  if (password.length === 0) errors.password = "Please complete this field...";
  if (password2 !== password) errors.password2 = "password must match";
  return errors;
};

export default validation;
