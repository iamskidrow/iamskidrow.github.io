let currentYear = new Date().getFullYear();
let age = currentYear - 2001;

const name = document.querySelector('#user-name')
name.innerText += `, ${age}`;