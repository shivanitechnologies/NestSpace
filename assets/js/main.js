// NESTSPACE - Main Public Scripts

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Nav Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenuDrawer = document.getElementById('mobile-menu-drawer');
  const mobileMenuBackdrop = document.getElementById('mobile-menu-backdrop');
  const closeMobileMenuBtn = document.getElementById('close-mobile-menu-btn');

  function openMobileMenu() {
    if (mobileMenuDrawer && mobileMenuBackdrop) {
      mobileMenuDrawer.classList.remove('translate-x-full');
      mobileMenuBackdrop.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeMobileMenu() {
    if (mobileMenuDrawer && mobileMenuBackdrop) {
      mobileMenuDrawer.classList.add('translate-x-full');
      mobileMenuBackdrop.classList.add('hidden');
      document.body.style.overflow = '';
    }
  }

  if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', openMobileMenu);
  if (closeMobileMenuBtn) closeMobileMenuBtn.addEventListener('click', closeMobileMenu);
  if (mobileMenuBackdrop) mobileMenuBackdrop.addEventListener('click', closeMobileMenu);

  // Sticky Header Elevation
  const mainHeader = document.getElementById('main-header');
  window.addEventListener('scroll', () => {
    if (mainHeader) {
      if (window.scrollY > 20) {
        mainHeader.classList.add('shadow-md', 'backdrop-blur-md');
      } else {
        mainHeader.classList.remove('shadow-md');
      }
    }
  });

  // Accordion Logic for FAQs
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const content = header.nextElementSibling;
      const icon = header.querySelector('.accordion-icon');
      const isOpen = !content.classList.contains('hidden');

      // Close all others in same accordion container
      const parentContainer = header.closest('.accordion-container');
      if (parentContainer) {
        parentContainer.querySelectorAll('.accordion-content').forEach(c => c.classList.add('hidden'));
        parentContainer.querySelectorAll('.accordion-icon').forEach(i => i.classList.remove('rotate-180'));
      }

      if (!isOpen) {
        content.classList.remove('hidden');
        if (icon) icon.classList.add('rotate-180');
      }
    });
  });

  // Toast Notification helper
  window.showToast = function (message, type = 'success') {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      container.className = 'fixed bottom-5 right-5 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none px-4';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    const isSuccess = type === 'success';
    toast.className = `pointer-events-auto p-4 rounded-xl shadow-xl flex items-center gap-3 transition-all transform duration-300 translate-y-3 opacity-0 text-sm font-medium ${
      isSuccess 
        ? 'bg-[#173C35] text-white border border-[#2a6156]' 
        : 'bg-red-700 text-white border border-red-500'
    }`;
    
    toast.innerHTML = `
      <div class="w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${isSuccess ? 'bg-[#D9A66F] text-[#171D1A]' : 'bg-red-100 text-red-800'}">
        ${isSuccess ? '<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>' : '<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>'}
      </div>
      <div class="flex-1">${message}</div>
      <button class="text-white/70 hover:text-white">&times;</button>
    `;

    container.appendChild(toast);

    // Animate in
    setTimeout(() => {
      toast.classList.remove('translate-y-3', 'opacity-0');
    }, 50);

    const closeBtn = toast.querySelector('button');
    closeBtn.addEventListener('click', () => {
      removeToast(toast);
    });

    setTimeout(() => {
      removeToast(toast);
    }, 4500);

    function removeToast(t) {
      t.classList.add('opacity-0', 'translate-y-3');
      setTimeout(() => t.remove(), 300);
    }
  };

  // Quick Newsletter Subscription mock
  const newsletterForms = document.querySelectorAll('.newsletter-form');
  newsletterForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      if (input && input.value) {
        window.showToast(`Thank you! ${input.value} has been subscribed to NESTSPACE private updates.`);
        input.value = '';
      }
    });
  });

  // Scroll Direction Tracker
  let lastScrollY = window.pageYOffset || document.documentElement.scrollTop;
  let scrollDirection = 'down';

  window.addEventListener('scroll', () => {
    const currentScrollY = window.pageYOffset || document.documentElement.scrollTop;
    if (Math.abs(currentScrollY - lastScrollY) > 4) {
      scrollDirection = currentScrollY > lastScrollY ? 'down' : 'up';
      document.documentElement.setAttribute('data-scroll-direction', scrollDirection);
      lastScrollY = currentScrollY <= 0 ? 0 : currentScrollY;
    }
  }, { passive: true });

  // Bi-directional Animated counters on scroll & reverse
  const counters = document.querySelectorAll('.counter-val');
  if ('IntersectionObserver' in window && counters.length > 0) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const target = entry.target;
        if (entry.isIntersecting) {
          const endValue = parseInt(target.getAttribute('data-target') || '0', 10);
          const duration = 1200;
          const start = 0;
          const startTime = performance.now();

          if (target._counterRaf) cancelAnimationFrame(target._counterRaf);

          function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const current = Math.floor(progress * (endValue - start) + start);
            target.textContent = current.toLocaleString() + (progress >= 1 ? (target.getAttribute('data-suffix') || '') : '');
            if (progress < 1) {
              target._counterRaf = requestAnimationFrame(updateCounter);
            }
          }
          target._counterRaf = requestAnimationFrame(updateCounter);
        } else {
          // Reset counter when scrolled away so it animates cleanly on reverse/re-entry
          if (target._counterRaf) cancelAnimationFrame(target._counterRaf);
          target.textContent = '0' + (target.getAttribute('data-suffix') || '');
        }
      });
    }, { threshold: 0.15 });

    counters.forEach(c => counterObserver.observe(c));
  }

  // Bi-directional Scroll-Triggered Reveal & Reverse Animations
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
  if ('IntersectionObserver' in window && revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const el = entry.target;
        if (entry.isIntersecting) {
          // Entering viewport: trigger forward animation
          el.classList.add('revealed');
        } else {
          // Exiting viewport: trigger reverse animation
          el.classList.remove('revealed');
        }
      });
    }, {
      threshold: 0.08,
      rootMargin: '0px 0px -30px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback if browser doesn't support IntersectionObserver
    revealElements.forEach(el => el.classList.add('revealed'));
  }

  // Smooth scroll for in-page anchors
  document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      const targetElem = document.querySelector(targetId);
      if (targetElem) {
        e.preventDefault();
        targetElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});


