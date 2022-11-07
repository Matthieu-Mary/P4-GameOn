const form = document.querySelector("form");

// SUBMIT
form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    // INPUT FIELDS
    let firstName = document.getElementById('first');
    let lastName = document.getElementById('last');
    let email = document.getElementById('email');
    let birthDate = document.getElementById('birthdate');
    let quantity = document.getElementById('quantity');
    let allLocations = document.querySelectorAll(".checkbox-input[type='radio']");
    let conditions = document.querySelector(".conditions");
    let beWarned = document.getElementById("checkbox2");

    // ERROR MESSAGES
    const firstNameError = document.querySelector(".firstName-error");
    const lastNameError = document.querySelector(".lastName-error");
    const emailError = document.querySelector(".email-error");
    const birthError = document.querySelector(".birth-error");
    const locationError = document.querySelector(".location-error");
    const conditionsError = document.querySelector(".conditions-error");

    // ADD INPUTS VALUE TO LOCALSTORAGE OR DISPLAY ERROR   

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    // first name
    const getFirstName = () => {
        let resultFirstName;
        if (firstName.value === "") {
            firstNameError.textContent = "Veuillez renseigner ce champ.";
            resultFirstName = false;
        } else if (firstName.length < 2) {
            firstNameError.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
            resultFirstName = false;
        } else {
            firstName.textContent = "";
            firstNameValue = firstName.value;
            localStorage.setItem("firstName", firstNameValue);
            resultFirstName = true;
        }   
        return resultFirstName;
    }
    getFirstName();
    const firstNameResult = getFirstName();
    


    // last name
    const getLastName = () => {
        let resultLastName;
        if (lastName.value === "") {
            lastNameError.textContent = "Veuillez renseigner ce champ.";
            resultLastName = false;
        } else if (lastName.length < 2) {
            lastNameError.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du prénom."
            resultLastName = false;
        } else {
            lastName.textContent = "";
            lastNameValue = lastName.value;
            localStorage.setItem("lastName", lastNameValue);
            resultLastName = true;
        }   
        return resultLastName;
    }
    getLastName();
    const lastNameResult = getLastName();
 

    // email
    const getEmail = () => {
        let resultEmail;
        if (!email.value) {
            emailError.textContent = "Veuillez renseigner ce champ.";
            resultEmail = false;
        } else if (!email.value.match(validRegex)) {
            emailError.textContent = "Veuillez rentrer une adresse mail valide.";
            resultEmail = false;
        } else {
            emailError.textContent = "";
            emailValue = email.value;
            localStorage.setItem("email", emailValue);
            resultEmail = true;
        }  
        return resultEmail;
    }
    getEmail();
    const emailResult = getEmail();


    // birthdate
    const getBirthdate = () => {
        let resultBirthdate;
        if (birthDate.value === "") {
            birthError.textContent = "Veuillez renseigner ce champ.";
            resultBirthdate = false;
        } else {
            birthError.textContent = "";
            birthDateValue= birthDate.value;
            localStorage.setItem("birthDate", birthDateValue);
            resultBirthdate = true;
        }
        return resultBirthdate;
    }
    getBirthdate();
    const birthResult = getBirthdate();
    

    // quantity (not required)
    quantity = quantity.value;
    localStorage.setItem("quantity", quantity);
    
    
    // locations
    const getLocation = () => {
        let resultLocation;
        allLocations.forEach( location => {
            let locationValue;
            if ( location.checked ) {
                locationValue = location.value;
                if (result !== "") {
                    localStorage.setItem("location", locationValue);
                    resultLocation = true;
                } else {
                locationError.textContent = "Veuillez choisir une localisation.";
                resultLocation = false;
                }
            } 
        })
        return resultLocation;
    }
    const locationResult = getLocation();
    console.log(locationResult)

    //  conditions
    const getConditions = () => {
        let resultConditions;
        if (!conditions.checked) {
            conditionsError.textContent = "Vous devez accepter les conditions d'utilisation."
            resultConditions = false;
        } else {
            conditionsError.textContent = "";
            resultConditions = true;
        }
        return resultConditions;
    }
    getConditions();
    const conditionsResult = getConditions();
    
    
    // BE WARNED OR NOT (Not required)
    function warned() {
        let result;
        if(beWarned.checked) {
            result = true;
        } else {
            result = false
        }
        localStorage.setItem("beWarned", result)
    }
    warned();
    
    
    // Call the function displaying message after submitting
    function validatedFormContent() {
        // Hide form, replaced by validation message content
        form.style.display = "none";
        const validatedForm = document.querySelector(".validated-form-container")
        const fullName = document.querySelector(".full-name");
        const locationMsg = document.querySelector(".location");
        const emailMsg = document.querySelector(".email-msg");
        
        validatedForm.style.display = "block";
        
        fullName.textContent = `Bonjour ${localStorage.getItem('firstName')}  ${localStorage.getItem('lastName')}`;
        locationMsg.textContent = `${localStorage.getItem('location')}`;
        
        // Have to parse because value in localStorage are strings
        JSON.parse(localStorage.getItem("beWarned")) === true 
        ?
        emailMsg.textContent = `Vous avez également accepté de recevoir des informations concernant les prochains tournois par mail, à l'adresse : ${localStorage.getItem('email')}` 
        : 
        ""
        
    }
    
    if (firstNameResult && lastNameResult && emailResult && birthResult && conditionsResult) {
        validatedFormContent()
    }

})




