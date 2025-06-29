document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const form = e.target;
  const data = {
    name: form.name.value,
    email: form.email.value,
    number: form.number.value,
    message: form.message.value
  };
  fetch('https://script.google.com/macros/s/AKfycbygD-95dV_zDQtcwa-kUxO1G5yv15IUZtSd_RiBfdLcjgzhRtR_peoApG4taPROsG3vPw/exec', { // <--- replace with your actual Web App URL
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' }
  })
  .then(res => res.json())
  .then(res => {
    document.getElementById('form-status').textContent = "Thank you! Your message was sent.";
    form.reset();
  })
  .catch(() => {
    document.getElementById('form-status').textContent = "There was an error. Please try again.";
  });
});