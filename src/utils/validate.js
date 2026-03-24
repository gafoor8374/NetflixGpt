export const isValidateFormData = (email, passWord, fullName) => {
    
  const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

  const isPassWordVlaid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(passWord);

  if (fullName !== undefined) {
    const isFullNameValid = /^[A-Za-z ]{3,30}$/.test(fullName);
    if (!isFullNameValid) return "Full Name is Not Valid";
  }

  if (!isEmailValid) return "Email is Not Valid";
  if (!isPassWordVlaid) return "PassWord is Not Valid";

  return null;
};
