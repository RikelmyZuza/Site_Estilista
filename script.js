// script.js - Geovanna Studio

document.addEventListener('DOMContentLoaded', function() {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          const navbarHeight = document.querySelector('.navbar').offsetHeight;
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
          
          // Close mobile menu if open
          const navbarToggler = document.querySelector('.navbar-toggler');
          const navbarCollapse = document.querySelector('.navbar-collapse');
          if (navbarCollapse.classList.contains('show')) {
            navbarToggler.click();
          }
        }
      });
    });
  
    // Portfolio filter
    const filterButtons = document.querySelectorAll('.btn-filter');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        this.classList.add('active');
        
        const filterValue = this.getAttribute('data-filter');
        
        // Filter portfolio items
        portfolioItems.forEach(item => {
          if (filterValue === 'all' || item.classList.contains(filterValue)) {
            item.style.display = 'block';
            setTimeout(() => {
              item.classList.add('show');
            }, 50);
          } else {
            item.classList.remove('show');
            setTimeout(() => {
              item.style.display = 'none';
            }, 300);
          }
        });
      });
    });
  
    // Initialize all portfolio items as visible
    portfolioItems.forEach(item => {
      item.style.display = 'block';
      setTimeout(() => {
        item.classList.add('show');
      }, 100);
    });
  
    // Animation on scroll
    function animateOnScroll() {
      const elements = document.querySelectorAll('.section-title, .card, .sobre-img, .service-card, .testimonial-item');
      const windowHeight = window.innerHeight;
      
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const animationPoint = windowHeight * 0.8;
        
        if (elementPosition < animationPoint) {
          element.classList.add('animate');
        }
      });
    }
  
    // Initialize animations
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
  
    // Form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Here you would typically send the form data to a server
        // For demo purposes, we'll just show an alert
        alert('Obrigada pela sua mensagem! Entrarei em contato em breve.');
        this.reset();
      });
    }
  
    // Newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
      newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const emailInput = this.querySelector('input[type="email"]');
        
        if (emailInput.value) {
          alert('Obrigada por assinar nossa newsletter! Você receberá nossas novidades em breve.');
          emailInput.value = '';
        }
      });
    }
  
    // Initialize tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function(tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
  
    // Initialize carousel
    const testimonialCarousel = new bootstrap.Carousel(document.getElementById('testimonialCarousel'), {
      interval: 5000,
      pause: 'hover',
      wrap: true
    });
  });
  
  // Modal gallery functionality
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('portfolio-image')) {
      const modalId = e.target.getAttribute('data-modal-target');
      const modal = document.getElementById(modalId);
      const modalInstance = new bootstrap.Modal(modal);
      modalInstance.show();
    }
  });
  
  // Parallax effect for hero section
  window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero');
    if (hero) {
      const scrollPosition = window.pageYOffset;
      hero.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
    }
  });

  // Adicione ao script.js, no final do DOMContentLoaded
// Hero carousel functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.hero-carousel .carousel-item');
const totalSlides = slides.length;

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

// Auto-rotate slides every 5 seconds
setInterval(nextSlide, 5000);

// Show first slide initially
showSlide(0);