const content = document.querySelector(".content");
const fullName = document.querySelector(".full-name");
const emailMsg = document.querySelector(".email");
const locationMsg = document.querySelector(".location");


fullName.textContent = `Bonjour ${localStorage.getItem('firstName')}  ${localStorage.getItem('lastName')}`;
emailMsg.textContent = `${localStorage.getItem('email')},`;
locationMsg.textContent = `${localStorage.getItem('location')}`;