const form = document.getElementById("form");
const age = document.getElementById("age");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const contact = document.getElementById("contact");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");


const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

function validatePasswords(p1, p2) {
  // Password should have both alphanumeric, should have at least one upper case and one the lower case.
  const password = p1.value.trim();
  const password2 = p2.value.trim();

  if (password !== password2) {
    setError(p1, "Passwords do not match.");
    setError(p2, "Passwords do not match.");
    return false;
  }
  if (password.length < 8) {
    setError(p1, "Password should be atleast 8 characters.");
    setError(p2, "Password should be atleast 8 characters.");
    return false;
  }

  let upperCase = false;
  let numeric = false;
  let lowerCase = false;
  for (let i = 0; i < password.length; i++) {
    if (password[i] >= "a" && password[i] <= "z") {
      lowerCase = true;
    } else if (password[i] >= "A" && password[i] <= "Z") {
      upperCase = true;
    } else if (password[i] >= "0" && password[i] <= "9") {
      numeric = true;
    }
  }
  if (!upperCase) {
    setError(p1, "Password should have atleast 1 Upper case letter.");
    setError(p2, "Password should have atleast 1 Upper case letter.");
    return false;
  }
  if (!lowerCase) {
    setError(p1, "Password should have atleast 1 Lower case letter.");
    setError(p2, "Password should have atleast 1 Lower case letter.");
    return false;
  }
  if (!numeric) {
    setError(p1, "Password should have atleast 1 numeric character.");
    setError(p2, "Password should have atleast 1 numeric character.");
    return false;
  }

  setSuccess(p1);
  setSuccess(p2);
  return true;
}

function validateEmails(email) {
  const emailValue = email.value.trim();
  if (emailValue === "") {
    setError(email, "Email is required");
    return false;
  }
  separetedEmailsArray = emailValue.split(",");
  console.log(separetedEmailsArray);
  for (let i = 0; i < separetedEmailsArray.length; i++) {
    if (!isValidEmail(separetedEmailsArray[i])) {
      setError(email, "Provide a valid email address");
      return false;
    }
  }
  setSuccess(email);
  return true;
}

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

function validateAge(age) {
  const ageValue = age.value.trim();
  if (ageValue >= 18 && ageValue <= 151) {
    setSuccess(age);
    return true;
  } else setError(age, "Valid range is 18-151");
  return false;
}

function validateContact(contact) {
  const contactValue = contact.value.trim();
  if (contactValue.length != 11) {
    setError(contact, "Contact should be 11 digit long.");
    return false;
  }
  for (let i = 0; i < contactValue.length; i++) {
    if (contactValue[i] > "9" || contactValue[i] < "0") {
      setError(contact, "Contact can only have digits.");
      return false;
    }
  }
  setSuccess(contact);
  return true;
}

function validateName(name_parent) {
  const name = name_parent.value.trim();
  if (name === "") {
    setError(name_parent, "Name is required.");
    return false;
  }
  setSuccess(name_parent);
  return true;
}




// myButton.disabled=true;
let fnameFlag = false;
let lnameFlag = false;
let emailFlag = false;
let ageFlag = false;
let passwordFlag = false;

age.addEventListener("input", (e) => {
    e.preventDefault();
    ageFlag = validateAge(age);
    validateInputs();
  });
  
  fname.addEventListener("input", (e) => {
      e.preventDefault();
      fnameFlag = validateName(fname);
      validateInputs();
  });
  
  lname.addEventListener("input", (e) => {
      e.preventDefault();
      lnameFlag = validateName(lname);
      validateInputs();
  });
  
  password.addEventListener("input", (e) => {
      e.preventDefault();
      passwordFlag = validatePasswords(password,password2);
      validateInputs();
  });
  
  password2.addEventListener("input", (e) => {
      e.preventDefault();
      passwordFlag = validatePasswords(password,password2);
      validateInputs();
  });
  
  email.addEventListener("input", (e) => {
      e.preventDefault();
      emailFlag = validateEmails(email);
      validateInputs();
  });
  
  contact.addEventListener("input", (e) => {
      e.preventDefault();
      contactFlag = validateContact(contact);
      validateInputs();
  });

const validateInputs = () =>
{
    if(fnameFlag && lnameFlag && passwordFlag && emailFlag && ageFlag)
    {
        document.getElementById("myButton").disabled=false;
        document.getElementById("myButton").style.opacity = "1.0";
    }
    else
    {
        document.getElementById("myButton").disabled=true;
        document.getElementById("myButton").style.opacity = "0.5";
    }
}
