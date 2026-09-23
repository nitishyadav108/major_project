// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

const filters = document.getElementById("filters");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

if (filters && nextBtn && prevBtn) {

    nextBtn.addEventListener("click", () => {

        filters.scrollBy({
            left: 300,
            behavior: "smooth"
        });

    });

    prevBtn.addEventListener("click", () => {

        filters.scrollBy({
            left: -300,
            behavior: "smooth"
        });

    });

}

const categoryMenuBtn =
    document.getElementById("categoryMenuBtn");

const mobileCategoryMenu =
    document.getElementById("mobileCategoryMenu");

const closeCategoryMenu =
    document.getElementById("closeCategoryMenu");


if (categoryMenuBtn && mobileCategoryMenu) {

    categoryMenuBtn.addEventListener("click", () => {

        mobileCategoryMenu.style.display = "block";

    });

}


if (closeCategoryMenu && mobileCategoryMenu) {

    closeCategoryMenu.addEventListener("click", () => {

        mobileCategoryMenu.style.display = "none";

    });

}