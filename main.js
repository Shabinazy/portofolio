  // Parallax effect for hero image
  window.addEventListener('mousemove', (e) => {
    const heroImage = document.querySelector('.hero-image img');
    
    if (heroImage) {
      const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
      const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
      
      heroImage.style.transform = `translate(${moveX}px, ${moveY}px)`;
    }
  });
  
  const ctaButton = document.querySelector('.cta-button');
  ctaButton.addEventListener('click', () => {
    const projectsSection = document.querySelector('#projects');
    
    window.scrollTo({
      top: projectsSection.offsetTop - 80,
      behavior: 'smooth'
    });
  });