document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();
  const output = document.getElementById("formOutput");

  // Validasi sederhana
  if (!name || !email || !phone || !message) {
    alert("All fields are required!");
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    alert("Please enter a valid email address.");
    return;
  }

  const phonePattern = /^[0-9]{10,15}$/;
  if (!phone.match(phonePattern)) {
    alert("Please enter a valid phone number (10-15 digits).");
    return;
  }

  // Tampilkan hasil
  output.innerHTML = `
    <h3>Thank you for your message!</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Message:</strong> ${message}</p>
  `;
  output.classList.remove("hidden");

  // Reset form
  document.getElementById("contactForm").reset();
});

