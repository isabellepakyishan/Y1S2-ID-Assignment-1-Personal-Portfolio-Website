let nav = document.querySelector("nav");
let dropdown = nav.querySelector(".dropdown");
let navToggle = nav.querySelector("[data-action='nav-toggle']");

navToggle.addEventListener("click", () => {
  if (nav.classList.contains("opened")) {
    nav.classList.remove("opened");
  } else {
    nav.classList.add("opened");
  }
});

let form = document.getElementById("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  let enquirerName = document.getElementById("name").value;
  console.log(
    `Thank you for your enquiry, ${enquirerName}. I will get back to you within 3 working days. Thank you!`
  );

  document.body.innerHTML = `Thank you for reaching out, ${enquirerName}. I will get back to you within 3 working days!`;
});
