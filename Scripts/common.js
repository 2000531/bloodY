// Newsletter form submission
document.querySelectorAll('.newsletter-form').forEach(form => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailInput = form.querySelector('input[type="email"]');
    const email = emailInput.value;
    
    // In a real application, you would send this to your server
    console.log('Newsletter subscription:', email);
    
    // Show success message
    const button = form.querySelector('button');
    const originalText = button.textContent;
    button.textContent = 'Subscribed!';
    button.disabled = true;
    
    setTimeout(() => {
      emailInput.value = '';
      button.textContent = originalText;
      button.disabled = false;
    }, 2000);
  });
});

// Mobile navigation toggle
const createMobileNav = () => {
  const header = document.querySelector('.header');
  if (!header) return;
  
  const nav = header.querySelector('.nav');
  if (!nav) return;
  
  const mobileToggle = document.createElement('button');
  mobileToggle.className = 'mobile-nav-toggle';
  mobileToggle.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="3" y1="12" x2="21" y2="12"></line>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
  `;
  
  const headerContainer = header.querySelector('.container');
  headerContainer.appendChild(mobileToggle);
  
  // Add styles
  const style = document.createElement('style');
  style.textContent = `
    @media (max-width: 768px) {
      .mobile-nav-toggle {
        display: block;
        background: none;
        border: none;
        cursor: pointer;
        padding: 0.5rem;
        margin-left: auto;
      }
      
      .nav {
        display: none;
        width: 100%;
      }
      
      .nav.active {
        display: block;
      }
      
      .header .container {
        flex-wrap: wrap;
      }
    }
    
    @media (min-width: 769px) {
      .mobile-nav-toggle {
        display: none;
      }
    }
  `;
  document.head.appendChild(style);
  
  // Toggle navigation
  mobileToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
};

// Initialize mobile navigation on small screens
if (window.innerWidth <= 768) {
  createMobileNav();
}

// Handle window resize
window.addEventListener('resize', () => {
  if (window.innerWidth <= 768) {
    if (!document.querySelector('.mobile-nav-toggle')) {
      createMobileNav();
    }
  }
});