document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const message = document.getElementById('form-message');
    message.textContent = 'Thank you! Your message has been sent.';
    message.style.color = 'green';
    this.reset();
  });
  
  
  
  




