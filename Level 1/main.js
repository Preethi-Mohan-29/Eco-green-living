let count = 0;
const countDisplay = document.getElementById("count");

function increment() {
  count++;
  countDisplay.textContent = count;
}

function decrement() {
  if (count > 0) count--;
  countDisplay.textContent = count;
}

function reset() {
  count = 0;
  countDisplay.textContent = count;
}


const form = document.getElementById("ecoForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let valid = true;

  nameError.textContent =
  emailError.textContent =
  phoneError.textContent =
  passwordError.textContent =
  success.textContent = "";

  if (!name.value.trim()) {
    nameError.textContent = "Name required";
    valid = false;
  }

  if (!email.value.includes("@")) {
    emailError.textContent = "Invalid email";
    valid = false;
  }

  if (phone.value.length < 10) {
    phoneError.textContent = "Invalid phone number";
    valid = false;
  }

  if (password.value.length < 6) {
    passwordError.textContent = "Min 6 characters";
    valid = false;
  }

  if (valid) {
    success.textContent = "Form submitted successfully!";
    form.reset();
  }
});


const slides = document.querySelectorAll(".slider img");
const dots = document.querySelectorAll(".dot");
let index = 0;

function showSlide(i) {
  slides[index].classList.remove("active");
  dots[index].classList.remove("active");
  index = i;
  slides[index].classList.add("active");
  dots[index].classList.add("active");
}

setInterval(() => {
  showSlide((index + 1) % slides.length);
}, 3000);

dots.forEach(dot => {
  dot.addEventListener("click", () => {
    showSlide(parseInt(dot.dataset.index));
  });
});
