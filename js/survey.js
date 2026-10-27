function renderScales() {
  document.querySelectorAll(".scale-placeholder").forEach((el) => {
    const name = el.dataset.name;
    let html = "";
    for (let i = 1; i <= 10; i++) {
      html += `<label><input type="radio" name="${name}" value="${i}" required> ${i}</label>`;
    }
    el.outerHTML = `<div class="scale">${html}</div>`;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderScales();
  document.querySelectorAll("form.survey-form").forEach((form) => {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const statusBox = form.querySelector(".form-status");
      const action = form.getAttribute("action");

      if (!action || action.includes("YOUR_FORM_ID")) {
        statusBox.innerHTML =
          '<div class="note">This form isn\'t connected yet. Set up a free endpoint at ' +
          '<a href="https://formspree.io" target="_blank">formspree.io</a> and replace ' +
          '<code>YOUR_FORM_ID</code> in survey.html with your real form ID.</div>';
        return;
      }

      const submitBtn = form.querySelector(".submit-btn");
      submitBtn.disabled = true;
      submitBtn.textContent = "Sending...";

      try {
        const response = await fetch(action, {
          method: "POST",
          body: new FormData(form),
          headers: { Accept: "application/json" },
        });

        if (response.ok) {
          statusBox.innerHTML =
            '<div class="success-box">Thanks! Your response has been recorded.</div>';
          form.reset();
        } else {
          statusBox.innerHTML =
            '<div class="note">Something went wrong submitting the form. Please try again.</div>';
        }
      } catch (err) {
        statusBox.innerHTML =
          '<div class="note">Could not reach the survey server. Check your internet connection and try again.</div>';
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = "Submit";
      }
    });
  });
});
