const form = document.querySelector("form")

// SUBMIT
form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    let firstName = document.getElementById('first');
    let lastName = document.getElementById('last');
    let email = document.getElementById('email');
    let birthDate = document.getElementById('birthdate');
    let quantity = document.getElementById('quantity');
    let allLocations = document.querySelectorAll(".checkbox-input[type='radio']");
    let beWarned = document.getElementById("checkbox2")

    firstName = firstName.value;
    localStorage.setItem("firstName", firstName);

    lastName = lastName.value;
    localStorage.setItem("lastName", lastName);

    email = email.value;
    localStorage.setItem("email", email);

    birthDate= birthDate.value;
    localStorage.setItem("birthDate", birthDate);

    quantity = quantity.value;
    localStorage.setItem("quantity", quantity);
    
    // SET LOCATION
    allLocations.forEach( location => {
        let result;
        if( location.checked ) {
           result = location.value;
           localStorage.setItem("location", result)
        } 
    } )

    // BE WARNED OR NOT
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

    // Hide form, replaced by validation message content
    form.style.display = "none";
    
    // Call the function displaying message after submitting
    function validatedFormContent() {
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
    validatedFormContent()
    
})



