// js/script.js
document.getElementById('messageForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name === '' || email === '' || phone === '' || message === '') {
    alert('Please fill in all fields!');
    return;
  }

  alert(`Thank you, ${name}, your message has been received!`);
});
