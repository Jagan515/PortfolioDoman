// Theme Toggle
function toggleTheme() {
    const body = document.body;
    const themeToggle = document.querySelector('.theme-toggle i');
    const currentTheme = body.getAttribute('data-theme');
    
    if (currentTheme === 'light') {
        body.setAttribute('data-theme', 'dark');
        themeToggle.classList.remove('fa-moon');
        themeToggle.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        body.setAttribute('data-theme', 'light');
        themeToggle.classList.remove('fa-sun');
        themeToggle.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
    }
}

// Load saved theme
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    const themeToggle = document.querySelector('.theme-toggle i');
    
    document.body.setAttribute('data-theme', savedTheme);
    if (savedTheme === 'dark') {
        themeToggle.classList.remove('fa-moon');
        themeToggle.classList.add('fa-sun');
    }
    
    // Initialize animations and counters
    animateCountersAdvanced();
});

// Mobile Menu Toggle
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
}

// Enhanced counter animation with easing
function animateCountersAdvanced() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000;
        const startTime = performance.now();
        
        function updateCounter(currentTime) {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            
            // Easing function (ease-out)
            const easedProgress = 1 - Math.pow(1 - progress, 3);
            const currentValue = Math.floor(easedProgress * target);
            
            counter.textContent = currentValue;
            counter.style.transform = `scale(${1 + (1 - progress) * 0.1})`;
            
            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
                counter.style.transform = 'scale(1)';
            }
        }
        
        requestAnimationFrame(updateCounter);
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form submission
function submitForm(event) {
    event.preventDefault();
    
    const button = event.target.querySelector('.submit-button');
    const buttonText = button.querySelector('.button-text');
    const buttonLoading = button.querySelector('.button-loading');
    
    // Show loading state
    buttonText.style.display = 'none';
    buttonLoading.style.display = 'inline-flex';
    button.disabled = true;
    
    // Simulate form submission
    setTimeout(() => {
        alert('Thank you for your message! I\'ll get back to you soon.');
        event.target.reset();
        
        // Reset button state
        buttonText.style.display = 'inline';
        buttonLoading.style.display = 'none';
        button.disabled = false;
    }, 2000);
}

// Resume download


// Add scroll effect to navbar
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(255, 255, 255, 0.95)';
        nav.style.backdropFilter = 'blur(10px)';
    } else {
        nav.style.background = 'var(--bg-white)';
        nav.style.backdropFilter = 'none';
    }
});