document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.feedback-form');

  form.addEventListener('input', event => {
    const formData = {
      email: form.email.value.trim(),
      message: form.message.value.trim(),
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  });

  const storedFormData = localStorage.getItem('feedback-form-state');
  if (storedFormData) {
    const formData = JSON.parse(storedFormData);
    form.email.value = formData.email;
    form.message.value = formData.message;
  }

  form.addEventListener('submit', event => {
    event.preventDefault();
    const formData = {
      email: form.email.value.trim(),
      message: form.message.value.trim(),
    };
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    form.email.value = '';
    form.message.value = '';
  });
});
