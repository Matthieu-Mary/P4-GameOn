const form = document.querySelector("form");

// SUBMIT
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // INPUT FIELDS
  const firstName = document.getElementById("first");
  const lastName = document.getElementById("last");
  const email = document.getElementById("email");
  const birthDate = document.getElementById("birthdate");
  const quantity = document.getElementById("quantity");
  const allLocations = document.querySelectorAll(".checkbox-input[type='radio']");
  const conditions = document.querySelector(".conditions");
  const beWarned = document.getElementById("checkbox2");

  // ERROR MESSAGES
  const firstNameError = document.querySelector(".firstName-error");
  const lastNameError = document.querySelector(".lastName-error");
  const emailError = document.querySelector(".email-error");
  const birthError = document.querySelector(".birth-error");
  const quantityError = document.querySelector(".quantity-error");
  const locationError = document.querySelector(".location-error");
  const conditionsError = document.querySelector(".conditions-error");

  // ----- ADD INPUTS VALUE TO LOCALSTORAGE OR DISPLAY ERROR -----

  // FIRST NAME
  const getFirstName = () => {
      let resultFirstName;
      if (firstName.value.trim() === "") {
          firstNameError.textContent = "Veuillez renseigner ce champ.";
          firstName.focus();
          resultFirstName = false;
        } else if (firstName.value.length < 2) {
            firstNameError.textContent =
            "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
            firstName.focus();
            resultFirstName = false;
        } else {
            firstNameError.textContent = "";
            const firstNameValue = firstName.value;
            localStorage.setItem("firstName", firstNameValue);
            resultFirstName = true;
        }
        return resultFirstName;
    };
    getFirstName();
    const firstNameResult = getFirstName();
    
    // LAST NAME
    const getLastName = () => {
        let resultLastName;
        if (lastName.value.trim() === "") {
            lastNameError.textContent = "Veuillez renseigner ce champ.";
            lastName.focus();
            resultLastName = false;
        } else if (lastName.value.length < 2) {
            lastNameError.textContent =
            "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
            lastName.focus();
            resultLastName = false;
        } else {
            lastNameError.textContent = "";
            const lastNameValue = lastName.value;
            localStorage.setItem("lastName", lastNameValue);
            resultLastName = true;
        }
        return resultLastName;
    };
    getLastName();
    const lastNameResult = getLastName();
    
    //   REGEX FOR EMAIL INPUT
    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    // EMAIL
    const getEmail = () => {
        let resultEmail;
    if (email.value.trim() === "") {
      emailError.textContent = "Veuillez renseigner ce champ.";
      email.focus();
      resultEmail = false;
    } else if (!email.value.match(validRegex)) {
      emailError.textContent = "Veuillez rentrer une adresse mail valide.";
      email.focus();
      resultEmail = false;
    } else {
      emailError.textContent = "";
      const emailValue = email.value;
      localStorage.setItem("email", emailValue);
      resultEmail = true;
    }
    return resultEmail;
  };
  getEmail();
  const emailResult = getEmail();

  // BIRTHDATE
  const calculateDateOver16Yo = () => {
    const date16YearsAgo = new Date();
    date16YearsAgo.setFullYear(date16YearsAgo.getFullYear() - 16);
    const year = date16YearsAgo.getFullYear();
    const month = date16YearsAgo.getMonth() + 1;
    const day = date16YearsAgo.getDate();

    const date16YearsAgoNumber = [year, month, day].join("-");
    return date16YearsAgoNumber;
  };
  const isOver16YoResult = calculateDateOver16Yo();

  const getBirthdate = () => {
    let resultBirthdate;
    let birthDateValue;
    if (birthDate.value === "") {
      birthError.textContent = "Veuillez renseigner ce champ.";
      resultBirthdate = false;
    } else if (birthDate.value > isOver16YoResult) {
      birthError.textContent =
        "Vous devez avoir au moins 16 ans pour pouvoir vous inscrire";
      resultBirthdate = false;
    } else {
      birthError.textContent = "";
      birthDateValue = birthDate.value;
      localStorage.setItem("birthDate", birthDateValue);
      resultBirthdate = true;
    }
    return birthDateValue;
  };
  getBirthdate();
  const birthResult = getBirthdate();

  // QUANTITY
  const getQuantity = () => {
    let resultQuantity;
    if (quantity.value === "") {
      quantityError.textContent = "Veuillez renseigner ce champ.";
      quantity.focus();
    } else {
      quantityError.textContent = "";
      resultQuantity = quantity.value;
      localStorage.setItem("quantity", resultQuantity);
    }
    return resultQuantity;
  };
  getQuantity();
  const quantityResult = getQuantity();

  // LOCATIONS
  const getLocation = () => {
    let resultLocation;
    // convert node list into array
    const allLocationsArr = Array.prototype.slice.call(allLocations);
    // find if location is checked or not
    const locationChecked = allLocationsArr.find((location) => location.checked);
    if (locationChecked !== undefined) {
      localStorage.setItem("location", locationChecked.value);
      locationError.textContent = "";
      resultLocation = true;
    } else {
      locationError.textContent = "Veuillez choisir une localisation.";
      resultLocation = false;
    }
     return resultLocation;
  };
  const locationResult = getLocation();

  //  CONDITIONS
  const getConditions = () => {
    let resultConditions;
    if (!conditions.checked) {
      conditionsError.textContent =
        "Vous devez accepter les conditions d'utilisation.";
      resultConditions = false;
    } else {
      conditionsError.textContent = "";
      resultConditions = true;
    }
    return resultConditions;
  };
  getConditions();
  const conditionsResult = getConditions();

  // BE WARNED OR NOT (Not required)
  function warned() {
    let result;
    if (beWarned.checked) {
      result = true;
    } else {
      result = false;
    }
    localStorage.setItem("beWarned", result);
  }
  warned();

  // Call the function displaying message after submitting
  function validatedFormContent() {
    const validatedForm = document.querySelector(".validated-form-container");
    // Hide form, replaced by validation message content
    form.style.display = "none";
    validatedForm.style.display = "flex";
  }

  // if all conditions are true, the validate message is displayed
  if (
    firstNameResult &&
    lastNameResult &&
    emailResult &&
    birthResult &&
    quantityResult &&
    locationResult &&
    conditionsResult
  ) {
    validatedFormContent();
  }
});
