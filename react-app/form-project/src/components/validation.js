export const validation = (data, type) => {
  const error = {};

  if (!data.email) {
    error.email = "Email required";
  } else if (
    !(
      data.email.indexOf("@") > 0 &&
      data.email.lastIndexOf(".") - data.email.indexOf("@") > 1 &&
      data.email.length - 1 > data.email.lastIndexOf(".")
    )
  ) {
    error.email = "Email address is invalid ";
  } else {
    delete error.email;
  }

  if (!data.password.trim()) {
    error.password = "Password required";
  } else if (data.password.length < 6) {
    error.password = "Password need to be 6 character or more";
  } else {
    delete error.password;
  }

  if (type === "signup") {
    if (!data.name.trim()) {
      error.name = "Name required";
    } else {
      delete error.name;
    }

    if (!data.confirmPassword.trim()) {
      error.confirmPassword = "ConfirmPassword required";
    } else if (data.confirmPassword !== data.password) {
      error.confirmPassword = "Password do not match";
    } else {
      delete error.confirmPassword;
    }

    if (data.isAccepted) {
      delete error.isAccepted;
    } else {
      error.isAccepted = "Accept our regulations";
    }
  }

  return error;
};
