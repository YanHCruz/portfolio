// js.js

document.addEventListener('DOMContentLoaded', () => {
  // Apenas chamo a função principal aqui. 
  setupCopyToClipboard();
  setupScrollAnimations();
  setupMobileMenu();
  setupBackToTopButton();
  setupActiveSectionIndicator();
  setupThemeToggler();
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
      fallbackCopyText(copyFeedback);
    });
  });
}

function fallbackCopyText(feedbackElement) {
  feedbackElement.innerText = "Eroo ao copiar. Segure para copiar manualmente";
  feedbackElement.style.color = '#FFA500';
  feedbackElement.classList.remove('feedback-hidden');

  setTimeout(() => {
    feedbackElement.classList.add('feedback-hidden');
  }, 4000);
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
  const links = navLinks.querySelectorAll('a');

  if (!hamburgerBtn || !navLinks) return; 

  const closeMenu = () => {
    navLinks.classList.remove('is-active');
    hamburgerBtn.classList.remove('is-active');
  }

  hamburgerBtn.addEventListener('click', () => {
     navLinks.classList.toggle('is-active');
     hamburgerBtn.classList.toggle('is-active');
  }); 

  links.forEach(link => {
    link.addEventListener('click', closeMenu);
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

function setupThemeToggler() {
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const body = document.body;

  const icon = themeToggleBtn ? themeToggleBtn.querySelector('i') : null;

  if (!themeToggleBtn || !icon) return;

  const updateIcon = (theme) => {
    if (theme === 'light') {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
    } else {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    }
  };

  const savedTheme = localStorage.getItem('theme') || 'dark';
  body.className = savedTheme === 'light' ? 'light-theme' : '';
  updateIcon(savedTheme);

  themeToggleBtn.addEventListener('click', () => {
    icon.classList.add('rotating');
    body.classList.toggle('light-theme');

    const newTheme = body.classList.contains('light-theme') ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);

    updateIcon(newTheme);

    setTimeout(() => {
      icon.classList.remove('rotating');
    }, 500);
  });
}