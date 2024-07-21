document.addEventListener('DOMContentLoaded', function() {
    const scrollLinks = document.querySelectorAll('.nav ul li a');
  
    scrollLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
  
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
  
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
  
    const contactForm = document.getElementById('contact-form');
  
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
  

        const formData = new FormData(this);
        const formDataObject = {};
        formData.forEach((value, key) => {
          formDataObject[key] = value;
        });
        console.log('Form Data:', formDataObject);
        alert('Message sent successfully!');
        this.reset();
      });
    }
  });
  