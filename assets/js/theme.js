// NESTSPACE - Theme & Direction Management (Light / Dark Mode + LTR / RTL)
(function () {
  const THEME_KEY = 'nestspace_theme';
  const DIR_KEY = 'nestspace_direction';

  // ==================== THEME LOGIC ====================
  function getPreferredTheme() {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem(THEME_KEY, theme);
    updateThemeToggleIcons(theme);
  }

  function updateThemeToggleIcons(theme) {
    const toggles = document.querySelectorAll('.theme-toggle-btn');
    toggles.forEach(btn => {
      const sunIcon = btn.querySelector('.icon-sun');
      const moonIcon = btn.querySelector('.icon-moon');
      if (sunIcon && moonIcon) {
        if (theme === 'dark') {
          sunIcon.classList.remove('hidden');
          moonIcon.classList.add('hidden');
        } else {
          sunIcon.classList.add('hidden');
          moonIcon.classList.remove('hidden');
        }
      }
    });
  }

  // ==================== DIRECTION (LTR / RTL) LOGIC ====================
  function getPreferredDirection() {
    return localStorage.getItem(DIR_KEY) || 'ltr';
  }

  function applyDirection(dir) {
    document.documentElement.setAttribute('dir', dir);
    if (dir === 'rtl') {
      document.documentElement.classList.add('rtl');
    } else {
      document.documentElement.classList.remove('rtl');
    }
    localStorage.setItem(DIR_KEY, dir);
    updateDirectionToggleButtons(dir);
  }

  function updateDirectionToggleButtons(dir) {
    const rtlBtns = document.querySelectorAll('.rtl-toggle-btn');
    rtlBtns.forEach(btn => {
      const label = btn.querySelector('.rtl-btn-label');
      if (label) {
        label.textContent = dir === 'rtl' ? 'LTR' : 'RTL';
      } else {
        btn.textContent = dir === 'rtl' ? 'LTR' : 'RTL';
      }
      btn.setAttribute('aria-label', dir === 'rtl' ? 'Switch to Left-to-Right layout' : 'Switch to Right-to-Left layout');
      btn.setAttribute('title', dir === 'rtl' ? 'Switch to LTR' : 'Switch to RTL');
    });
  }

  // Apply immediately on script load to prevent flash
  const initialTheme = getPreferredTheme();
  applyTheme(initialTheme);

  const initialDir = getPreferredDirection();
  applyDirection(initialDir);

  document.addEventListener('DOMContentLoaded', () => {
    updateThemeToggleIcons(getPreferredTheme());
    updateDirectionToggleButtons(getPreferredDirection());

    // Theme toggle click handlers
    const toggles = document.querySelectorAll('.theme-toggle-btn');
    toggles.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const current = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
        const nextTheme = current === 'dark' ? 'light' : 'dark';
        applyTheme(nextTheme);
      });
    });

    // RTL toggle click handlers
    const rtlBtns = document.querySelectorAll('.rtl-toggle-btn');
    rtlBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const current = document.documentElement.getAttribute('dir') || 'ltr';
        const nextDir = current === 'rtl' ? 'ltr' : 'rtl';
        applyDirection(nextDir);
        if (window.showToast) {
          window.showToast(nextDir === 'rtl' ? 'Switched to Right-to-Left (RTL) Layout' : 'Switched to Left-to-Right (LTR) Layout');
        }
      });
    });
  });

  window.toggleNestspaceTheme = function () {
    const current = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    applyTheme(current === 'dark' ? 'light' : 'dark');
  };

  window.toggleNestspaceDirection = function () {
    const current = document.documentElement.getAttribute('dir') || 'ltr';
    const nextDir = current === 'rtl' ? 'ltr' : 'rtl';
    applyDirection(nextDir);
    if (window.showToast) {
      window.showToast(nextDir === 'rtl' ? 'Switched to Right-to-Left (RTL) Layout' : 'Switched to Left-to-Right (LTR) Layout');
    }
  };
})();


