export function validatedFormContent() {
    const validatedForm = document.querySelector(".validated-form-container")
    const fullName = document.querySelector(".full-name");
    const emailMsg = document.querySelector(".email");
    const locationMsg = document.querySelector(".location");

    validatedForm.style.display = "block";
    fullName.textContent = `Bonjour ${localStorage.getItem('firstName')}  ${localStorage.getItem('lastName')}`;
    emailMsg.textContent = `${localStorage.getItem('email')},`;
    locationMsg.textContent = `${localStorage.getItem('location')}`;
}
