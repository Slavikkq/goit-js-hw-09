document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.form');
  
    form.addEventListener('input', (event) => {
      const formData = {
        email: form.email.value,
        message: form.message.value
      };
      localStorage.setItem('form-state', JSON.stringify(formData));
    });
  
    window.addEventListener('load', () => {
      const storedFormData = localStorage.getItem('form-state');
      if (storedFormData) {
        const formData = JSON.parse(storedFormData);
        form.email.value = formData.email;
        form.message.value = formData.message;
      }
    });
  
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const formData = {
        email: form.email.value,
        message: form.message.value
      };
      console.log(formData);
      localStorage.removeItem('form-state');
      form.email.value = '';
      form.message.value = '';
    });
  });