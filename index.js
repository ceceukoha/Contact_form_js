const fname = document.getElementById("one");
const lname = document.getElementById("three");
const email = document.getElementById("eleven");
const dob = document.getElementById("four");
const button = document.getElementById("submit-btn");
const studId = document.getElementById("five");
const country = document.getElementById("nine");
const cos = document.getElementsByClassName("course");
const zip = document.getElementById("ten");
const language = document.getElementsByClassName("lang");
const commentBox = document.getElementById("commentbox");

button.addEventListener("click", (e) => {
  e.preventDefault();
  const data = {
    one: fname.value,
    three: lname.value,
    eleven: email.value,
    four: dob.value,
    five: studId.value,
    ten: zip.value,
    nine: country.value,
      fourteen: cos.value,
    commentbox: commentBox.value,
  };
  sessionStorage.setItem("user", JSON.stringify(data));
  document.location.assign("user.html");
});
