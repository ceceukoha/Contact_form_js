const fname = document.getElementById('one');
const lname = document.getElementById("three");
const email = document.getElementById('eleven');
const dob = document.getElementById('four')
const studId = document.getElementById("five");
const country = document.getElementById("nine");
const cos = document.getElementById("fourteen");
const zip = document.getElementById("ten");
const language = document.getElementsByClassName("lang");
const commentBox = document.getElementById("commentbox");


document.addEventListener("DOMContentLoaded", () => {
    const data = JSON.parse(sessionStorage.getItem('user'))
    fname.innerText = data.one
    lname.innerText = data.three
    email.innerText = data.eleven
    dob.innerText = data.four
    studId.innerText = data.five
    country.innerText = data.nine
    zip.innerText = data.ten
    language.innerText = data.lang
    // commentBox.innerText = data.commentbox
    console.log("data", data)
})