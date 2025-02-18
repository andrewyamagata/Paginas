const register_btn = document.querySelector(".register-btn");
const login_btn = document.querySelector(".login-btn");
const login_nav_btn = document.querySelector(".login-nav-btn");
const close_icon = document.querySelector(".close-icon");
const form_box = document.querySelector(".form_box");
register_btn.onclick = () => {
  form_box.classList.add("change-form");
};
login_btn.onclick = () => {
  form_box.classList.remove("change-form");
};
close_icon.onclick = () => {
  form_box.classList.add("close-form");
};
login_nav_btn.onclick = () => {
  form_box.classList.remove("close-form");
};
