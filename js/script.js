var btn = document.querySelector(".modal-form-button");
var form = document.querySelector(".modal-form");
btn.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (form.classList.contains("modal-form-visible")) {
    form.classList.add("modal-form-invisible");
    form.classList.remove("modal-form-visible");
  } else {
    form.classList.add("modal-form-visible");
    form.classList.remove("modal-form-invisible");
  }
});
