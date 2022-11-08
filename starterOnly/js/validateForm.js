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

    // FIRST NAME
    const getFirstName = () => {
        let resultFirstName;
        if (firstName.value === "") {
            firstNameError.textContent = "Veuillez renseigner ce champ.";
            resultFirstName = false;
        } else if (firstName.value.length < 2) {
            firstNameError.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
            resultFirstName = false;
        } else {
            firstNameError.textContent = "";
            const firstNameValue = firstName.value;
            localStorage.setItem("firstName", firstNameValue);
            resultFirstName = true;
        }   
        return resultFirstName;
    }
    getFirstName();
    const firstNameResult = getFirstName();
    


    // LAST NAME
    const getLastName = () => {
        let resultLastName;
        if (lastName.value === "") {
            lastNameError.textContent = "Veuillez renseigner ce champ.";
            resultLastName = false;
        } else if (lastName.value.length < 2) {
            lastNameError.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du prénom."
            resultLastName = false;
        } else {
            lastNameError.textContent = "";
            const lastNameValue = lastName.value;
            localStorage.setItem("lastName", lastNameValue);
            resultLastName = true;
        }   
        return resultLastName;
    }
    getLastName();
    const lastNameResult = getLastName();
 

    // EMAIL
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
            const emailValue = email.value;
            localStorage.setItem("email", emailValue);
            resultEmail = true;
        }  
        return resultEmail;
    }
    getEmail();
    const emailResult = getEmail();


    // BIRTHDATE
    const getBirthdate = () => {
        let resultBirthdate;
        if (birthDate.value === "") {
            birthError.textContent = "Veuillez renseigner ce champ.";
            resultBirthdate = false;
        } else {
            birthError.textContent = "";
            const birthDateValue= birthDate.value;
            localStorage.setItem("birthDate", birthDateValue);
            resultBirthdate = true;
        }
        return resultBirthdate;
    }
    getBirthdate();
    const birthResult = getBirthdate();
    

    // QUANTITY (not required)
    quantity = quantity.value;
    localStorage.setItem("quantity", quantity);
    
    
    // LOCATIONS
    const getLocation = () => {

        // set into localstorage
        allLocations.forEach( location => {
            let locationValue;
            if ( location.checked ) {
                locationValue = location.value;
                localStorage.setItem("location", locationValue);
            } else {
                locationError.textContent = "Veuillez choisir une localisation.";
            } 
        })
        
        // convert node list into array
        const allLocationsArr = Array.prototype.slice.call(allLocations)
        
        // return true if a location is selected and false if not
        const resultLocation = allLocationsArr.some(location => location.checked);
        if(resultLocation) {
            locationError.textContent = "";
        }

        return resultLocation;
    }
    const locationResult = getLocation();


    //  CONDITIONS
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
    }
    
    if (firstNameResult && lastNameResult && emailResult && birthResult && locationResult && conditionsResult) {
        validatedFormContent()
    }

})



