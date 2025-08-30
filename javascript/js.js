// js.js

document.addEventListener('DOMContentLoaded', () => {
  // Apenas chamo a função principal aqui. 
  setupCopyToClipboard();
  setupScrollAnimations();
  setupMobileMenu();
  setupBackToTopButton();
  setupActiveSectionIndicator();
});


 // Configura a funcionalidade de copiar o e-mail para a área de transferência.
 
function setupCopyToClipboard() {
  const copyButton = document.getElementById('copy-button');
  
  if (!copyButton) return;

  const copyFeedback = document.getElementById('copy-feedback');

  copyButton.addEventListener('click', () => {
    const emailText = document.getElementById('email-text').innerText;

    navigator.clipboard.writeText(emailText).then(() => {
      copyFeedback.classList.remove('feedback-hidden');
      setTimeout(() => {
        copyFeedback.classList.add('feedback-hidden');
      }, 2000);
    }).catch(error => {
      console.error('Falha ao copiar o e-mail: ', error);
    });
  });
}


 // Configura as animações de fade-in ao rolar a página.
 
function setupScrollAnimations() {
  const elementsToAnimate = document.querySelectorAll('.fade-in-element');
  
  if (elementsToAnimate.length === 0) return;

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

  elementsToAnimate.forEach(element => observer.observe(element));
}

// Configura a funcionalidade do menu hamburger para telas menores 

function setupMobileMenu() {
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const navLinks = document.getElementById('nav-links');

  if (!hamburgerBtn || !navLinks) return; 

  hamburgerBtn.addEventListener('click', () => {
     navLinks.classList.toggle('is-active');
     hamburgerBtn.classList.toggle('is-active');
  }); 
}

// Funcionalidade do botao voltar para o topo 

function setupBackToTopButton() {
  const  backToTopBtn = document.getElementById('back-to-top-btn');

  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

function setupActiveSectionIndicator() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  if (sections.length === 0 || navLinks.length === 0) return;

  const observerOptions = {
    rootMargin: '-50% 0px -50% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');

        navLinks.forEach(link => {
           link.classList.remove('active');
        }); 

        const activeLink = document.querySelector(`.nav-links a[href="#${id}"]`);
        if (activeLink) {
          activeLink.classList.add('active');
        }
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    observer.observe(section);
  });
}
