// Custom cursor
document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.cursor');
    
    document.addEventListener('mousemove', (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    });
    
    document.addEventListener('mousedown', () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(0.7)';
    });
    
    document.addEventListener('mouseup', () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    });
    
    // Add hover effect to all clickable elements
    const clickables = document.querySelectorAll('a, button, input, textarea');
    clickables.forEach(element => {
      element.addEventListener('mouseenter', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
        cursor.style.backgroundColor = 'rgba(255, 133, 162, 0.2)';
      });
      
      element.addEventListener('mouseleave', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursor.style.backgroundColor = 'rgba(255, 133, 162, 0.5)';
      });
    });
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a, .footer-links a');
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        window.scrollTo({
          top: targetSection.offsetTop - 80,
          behavior: 'smooth'
        });
      });
    });
    
    // CTA button scroll to projects
    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('click', () => {
      const projectsSection = document.querySelector('#projects');
      
      window.scrollTo({
        top: projectsSection.offsetTop - 80,
        behavior: 'smooth'
      });
    });
    
    // Form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // In a real application, you would send this data to a server
        // For now, we'll just show an alert
        alert(`Thank you, ${name}! Your message has been received. I'll get back to you soon at ${email}.`);
        
        // Reset the form
        contactForm.reset();
        
        // Show cute success message
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.innerHTML = `
          <div class="success-icon">✨</div>
          <p>Message sent successfully!</p>
        `;
        
        document.querySelector('.contact-form').appendChild(successMessage);
        
        // Add success message styles
        const style = document.createElement('style');
        style.innerHTML = `
          .success-message {
            background-color: rgba(255, 255, 255, 0.9);
            border-radius: 10px;
            padding: 20px;
            margin-top: 20px;
            text-align: center;
            box-shadow: 0 4px 15px rgba(255, 133, 162, 0.2);
            border: 2px solid var(--primary-light);
            animation: pop-in 0.5s forwards;
            transform: scale(0.8);
            opacity: 0;
          }
          
          @keyframes pop-in {
            0% { transform: scale(0.8); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
          }
          
          .success-icon {
            font-size: 2rem;
            margin-bottom: 10px;
            animation: spin 2s infinite;
          }
          
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `;
        document.head.appendChild(style);
        
        // Remove success message after 5 seconds
        setTimeout(() => {
          successMessage.style.animation = 'fade-out 0.5s forwards';
          
          const fadeOutStyle = document.createElement('style');
          fadeOutStyle.innerHTML = `
            @keyframes fade-out {
              0% { transform: scale(1); opacity: 1; }
              100% { transform: scale(0.8); opacity: 0; }
            }
          `;
          document.head.appendChild(fadeOutStyle);
          
          setTimeout(() => {
            successMessage.remove();
          }, 500);
        }, 5000);
      });
    }
    
    // Add animation to elements when they come into view
    const animateOnScroll = () => {
      const sections = document.querySelectorAll('section');
      
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.75) {
          section.classList.add('fade-in');
        }
      });
    };
    
    // Add fade-in class to CSS
    const style = document.createElement('style');
    style.innerHTML = `
      section {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease, transform 0.6s ease;
      }
      
      section.fade-in {
        opacity: 1;
        transform: translateY(0);
      }
      
      /* Add a staggered delay to children of sections */
      .fade-in > * {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease, transform 0.6s ease;
      }
      
      .fade-in.active > *:nth-child(1) { 
        transition-delay: 0.1s;
        opacity: 1;
        transform: translateY(0);
      }
      
      .fade-in.active > *:nth-child(2) { 
        transition-delay: 0.2s;
        opacity: 1;
        transform: translateY(0);
      }
      
      .fade-in.active > *:nth-child(3) { 
        transition-delay: 0.3s;
        opacity: 1;
        transform: translateY(0);
      }
      
      .fade-in.active > *:nth-child(4) { 
        transition-delay: 0.4s;
        opacity: 1;
        transform: translateY(0);
      }
      
      .fade-in.active > *:nth-child(5) { 
        transition-delay: 0.5s;
        opacity: 1;
        transform: translateY(0);
      }
    `;
    document.head.appendChild(style);
    
    // Initial check and add scroll event listener
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
    
    // Add active class with a delay after fade-in
    setTimeout(() => {
      document.querySelectorAll('.fade-in').forEach(section => {
        section.classList.add('active');
      });
    }, 300);
    
    // Add more butterflies dynamically
    const butterflyContainer = document.querySelector('.butterfly-container');
    
    for (let i = 0; i < 8; i++) {
      const butterfly = document.createElement('div');
      butterfly.className = 'butterfly';
      
      // Random position
      butterfly.style.top = Math.random() * 100 + '%';
      butterfly.style.left = Math.random() * 100 + '%';
      
      // Random size
      const size = 0.5 + Math.random() * 1;
      butterfly.style.transform = `scale(${size})`;
      
      // Random animation delay
      butterfly.style.animationDelay = Math.random() * 10 + 's';
      
      // Random animation duration
      butterfly.style.animationDuration = (10 + Math.random() * 20) + 's';
      
      // Random color
      const colors = ['%23ff85a2', '%23ffc2d1', '%23c5a3ff', '%23ff5c8a'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      butterfly.style.backgroundImage = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='${randomColor}' stroke-width='1' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 2C8 2 7 5 7 9c0 2 1 4 2.5 5-1.5 1-2.5 3-2.5 5 0 4 1 7 5 7s5-3 5-7c0-2-1-4-2.5-5C16 13 17 11 17 9c0-4-1-7-5-7z'/%3E%3Cpath d='M12 2c-1.5 2-2 3-2 5'/%3E%3Cpath d='M12 2c1.5 2 2 3 2 5'/%3E%3C/svg%3E")`;
      
      butterflyContainer.appendChild(butterfly);
    }
    
    // Create floating hearts container
    const floatingHeartsContainer = document.createElement('div');
    floatingHeartsContainer.className = 'floating-hearts';
    document.body.appendChild(floatingHeartsContainer);
    
    // Add floating hearts
    for (let i = 0; i < 15; i++) {
      const heart = document.createElement('div');
      heart.className = 'heart';
      
      // Random position
      heart.style.left = Math.random() * 100 + '%';
      
      // Random size
      const size = 0.5 + Math.random() * 1;
      heart.style.transform = `scale(${size})`;
      
      // Random animation delay
      heart.style.animationDelay = Math.random() * 20 + 's';
      
      // Random opacity
      heart.style.opacity = 0.1 + Math.random() * 0.5;
      
      // Random color
      const colors = ['%23ff85a2', '%23ffc2d1', '%23c5a3ff', '%23ff5c8a'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      heart.style.backgroundImage = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='${randomColor}' stroke='none'%3E%3Cpath d='M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z'/%3E%3C/svg%3E")`;
      
      floatingHeartsContainer.appendChild(heart);
    }
    
    // Add sparkle effect to headings
    const addSparkleToHeadings = () => {
      const headings = document.querySelectorAll('h2, h3');
      
      headings.forEach(heading => {
        heading.addEventListener('mouseenter', () => {
          const sparkle = document.createElement('div');
          sparkle.className = 'sparkle';
          
          // Add sparkle styles
          const sparkleStyle = document.createElement('style');
          sparkleStyle.innerHTML = `
            .sparkle {
              position: absolute;
              width: 100%;
              height: 100%;
              top: 0;
              left: 0;
              pointer-events: none;
              z-index: 1;
            }
            
            .sparkle::before {
              content: "✨";
              position: absolute;
              animation: sparkle-animation 1s forwards;
              font-size: 1.5rem;
            }
            
            @keyframes sparkle-animation {
              0% {
                opacity: 1;
                transform: translate(-50%, -50%) scale(0);
              }
              50% {
                opacity: 1;
                transform: translate(-50%, -50%) scale(1.2);
              }
              100% {
                opacity: 0;
                transform: translate(-50%, -50%) scale(1.5);
              }
            }
          `;
          document.head.appendChild(sparkleStyle);
          
          // Set heading to relative if it's not already
          if (window.getComputedStyle(heading).position === 'static') {
            heading.style.position = 'relative';
          }
          
          // Add multiple sparkles
          for (let i = 0; i < 3; i++) {
            const sparkleClone = sparkle.cloneNode(true);
            
            // Random position within the heading
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            
            // Random delay
            const delay = Math.random() * 0.5;
            
            sparkleClone.style.setProperty('--x', `${x}%`);
            sparkleClone.style.setProperty('--y', `${y}%`);
            
            const beforeStyle = document.createElement('style');
            beforeStyle.innerHTML = `
              .sparkle:nth-child(${i + 1})::before {
                top: ${y}%;
                left: ${x}%;
                animation-delay: ${delay}s;
              }
            `;
            document.head.appendChild(beforeStyle);
            
            heading.appendChild(sparkleClone);
            
            // Remove sparkle after animation
            setTimeout(() => {
              sparkleClone.remove();
            }, 1000 + delay * 1000);
          }
        });
      });
    };
    
    addSparkleToHeadings();
  });
  
  // Header scroll effect
  window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    
    if (window.scrollY > 50) {
      header.style.padding = '15px 5%';
      header.style.boxShadow = '0 4px 20px rgba(255, 133, 162, 0.15)';
    } else {
      header.style.padding = '20px 5%';
      header.style.boxShadow = '0 4px 20px rgba(255, 133, 162, 0.1)';
    }
  });
  
  // Parallax effect for hero image
  window.addEventListener('mousemove', (e) => {
    const heroImage = document.querySelector('.hero-image img');
    
    if (heroImage) {
      const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
      const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
      
      heroImage.style.transform = `translate(${moveX}px, ${moveY}px)`;
    }
  });
  
  // Add cute hover effects to project cards
  document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        // Create a heart element
        const heart = document.createElement('div');
        heart.className = 'project-heart';
        heart.innerHTML = '❤️';
        
        // Add heart styles
        const heartStyle = document.createElement('style');
        heartStyle.innerHTML = `
          .project-heart {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 3rem;
            opacity: 0;
            z-index: 10;
            animation: heart-pop 0.5s forwards;
          }
          
          @keyframes heart-pop {
            0% {
              transform: translate(-50%, -50%) scale(0);
              opacity: 0;
            }
            70% {
              transform: translate(-50%, -50%) scale(1.2);
              opacity: 1;
            }
            100% {
              transform: translate(-50%, -50%) scale(1);
              opacity: 0;
            }
          }
        `;
        document.head.appendChild(heartStyle);
        
        card.appendChild(heart);
        
        // Remove heart after animation
        setTimeout(() => {
          heart.remove();
        }, 500);
      });
    });
  });