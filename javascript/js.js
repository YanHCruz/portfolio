document.addEventListener ('DOMContentLoaded', function() {

  // Copiar o botão de email
  const copyButton = document.getElementById('copy-button');
  const copyFeedback = document.getElementById('copy-feedback');

  copyButton.addEventListener('click', function() {
    const emailText = document.getElementById('email-text').innerText;

    navigator.clipboard.writeText(emailText).then(function() {
      copyFeedback.classList.remove('feedback-hidden');

      setTimeout(() => {
        copyFeedback.classList.add('feedback-hidden');
      }, 2000);
    
    }).catch(function(error) {
      console.error('Falha ao copiar o e-mail: ', error);
      alert('Não foi possivel copiar o e-mail.');
    });
  });

  // Animação FadeIn
  const elementsToAnimate = document.querySelectorAll('.fade-in-element');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  elementsToAnimate.forEach(element => {
    observer.observe(element);
  });
});