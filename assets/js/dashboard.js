// NESTSPACE - Member Dashboard Interactions

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Sidebar Toggle
  const sidebarToggleBtn = document.getElementById('dash-sidebar-toggle');
  const sidebarCloseBtn = document.getElementById('dash-sidebar-close');
  const sidebar = document.getElementById('dash-sidebar');
  const sidebarBackdrop = document.getElementById('dash-sidebar-backdrop');

  function openSidebar() {
    if (sidebar) sidebar.classList.add('sidebar-open');
    if (sidebarBackdrop) sidebarBackdrop.classList.remove('hidden');
  }

  function closeSidebar() {
    if (sidebar) sidebar.classList.remove('sidebar-open');
    if (sidebarBackdrop) sidebarBackdrop.classList.add('hidden');
  }

  if (sidebarToggleBtn) sidebarToggleBtn.addEventListener('click', openSidebar);
  if (sidebarCloseBtn) sidebarCloseBtn.addEventListener('click', closeSidebar);
  if (sidebarBackdrop) sidebarBackdrop.addEventListener('click', closeSidebar);

  // Profile / Notification Dropdowns
  const notifBtn = document.getElementById('dash-notif-btn');
  const notifDropdown = document.getElementById('dash-notif-dropdown');
  const profileMenuBtn = document.getElementById('dash-profile-btn');
  const profileDropdown = document.getElementById('dash-profile-dropdown');

  if (notifBtn && notifDropdown) {
    notifBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      notifDropdown.classList.toggle('hidden');
      if (profileDropdown) profileDropdown.classList.add('hidden');
    });
  }

  if (profileMenuBtn && profileDropdown) {
    profileMenuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      profileDropdown.classList.toggle('hidden');
      if (notifDropdown) notifDropdown.classList.add('hidden');
    });
  }

  document.addEventListener('click', () => {
    if (notifDropdown) notifDropdown.classList.add('hidden');
    if (profileDropdown) profileDropdown.classList.add('hidden');
  });

  // Bookings Tab Filtering (Upcoming, Completed, Cancelled)
  const bookingFilterTabs = document.querySelectorAll('.booking-filter-tab');
  const bookingCards = document.querySelectorAll('.booking-card-item');

  bookingFilterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      bookingFilterTabs.forEach(t => {
        t.classList.remove('border-[#173C35]', 'text-[#173C35]', 'font-semibold');
        t.classList.add('border-transparent', 'text-nest-muted');
      });
      tab.classList.add('border-[#173C35]', 'text-[#173C35]', 'font-semibold');
      tab.classList.remove('border-transparent', 'text-nest-muted');

      const filter = tab.dataset.filter;
      bookingCards.forEach(card => {
        const status = card.dataset.status;
        if (filter === 'all' || status === filter) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // Cancel Booking Modal
  const cancelModal = document.getElementById('cancel-booking-modal');
  let pendingCancelCard = null;

  document.querySelectorAll('.btn-cancel-booking').forEach(btn => {
    btn.addEventListener('click', (e) => {
      pendingCancelCard = e.target.closest('.booking-card-item');
      if (cancelModal) {
        cancelModal.classList.remove('hidden');
        cancelModal.classList.add('flex');
      }
    });
  });

  const confirmCancelBtn = document.getElementById('confirm-cancel-action-btn');
  const abortCancelBtn = document.getElementById('abort-cancel-action-btn');

  if (confirmCancelBtn) {
    confirmCancelBtn.addEventListener('click', () => {
      if (pendingCancelCard) {
        pendingCancelCard.dataset.status = 'cancelled';
        const pill = pendingCancelCard.querySelector('.status-pill');
        if (pill) {
          pill.className = 'status-pill status-cancelled';
          pill.textContent = 'Cancelled';
        }
        const actionArea = pendingCancelCard.querySelector('.booking-actions');
        if (actionArea) {
          actionArea.innerHTML = `<span class="text-xs text-red-500 font-medium">Refund processed to Nest Wallet</span>`;
        }
      }
      if (cancelModal) {
        cancelModal.classList.add('hidden');
        cancelModal.classList.remove('flex');
      }
      if (window.showToast) {
        window.showToast('Reservation successfully cancelled. Credits refunded.');
      }
    });
  }

  if (abortCancelBtn && cancelModal) {
    abortCancelBtn.addEventListener('click', () => {
      cancelModal.classList.add('hidden');
      cancelModal.classList.remove('flex');
    });
  }

  // Reschedule Booking Modal
  const rescheduleModal = document.getElementById('reschedule-booking-modal');
  document.querySelectorAll('.btn-reschedule-booking').forEach(btn => {
    btn.addEventListener('click', () => {
      if (rescheduleModal) {
        rescheduleModal.classList.remove('hidden');
        rescheduleModal.classList.add('flex');
      }
    });
  });

  document.querySelectorAll('.close-reschedule-modal').forEach(btn => {
    btn.addEventListener('click', () => {
      if (rescheduleModal) {
        rescheduleModal.classList.add('hidden');
        rescheduleModal.classList.remove('flex');
      }
    });
  });

  const confirmRescheduleBtn = document.getElementById('confirm-reschedule-btn');
  if (confirmRescheduleBtn) {
    confirmRescheduleBtn.addEventListener('click', () => {
      if (rescheduleModal) {
        rescheduleModal.classList.add('hidden');
        rescheduleModal.classList.remove('flex');
      }
      if (window.showToast) {
        window.showToast('Reservation successfully rescheduled! Confirmation sent to your email.');
      }
    });
  }

  // Invoice Print / Download Modal
  const invoiceModal = document.getElementById('invoice-view-modal');
  document.querySelectorAll('.btn-view-invoice').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const invNum = e.target.closest('tr')?.dataset.invId || 'INV-2026-881';
      const invIdElem = document.getElementById('modal-inv-number');
      if (invIdElem) invIdElem.textContent = invNum;

      if (invoiceModal) {
        invoiceModal.classList.remove('hidden');
        invoiceModal.classList.add('flex');
      }
    });
  });

  const closeInvoiceBtn = document.getElementById('close-invoice-modal-btn');
  if (closeInvoiceBtn && invoiceModal) {
    closeInvoiceBtn.addEventListener('click', () => {
      invoiceModal.classList.add('hidden');
      invoiceModal.classList.remove('flex');
    });
  }

  const printInvoiceBtn = document.getElementById('print-invoice-btn');
  if (printInvoiceBtn) {
    printInvoiceBtn.addEventListener('click', () => {
      window.print();
    });
  }

  // Notifications: Mark all as read
  const markAllReadBtn = document.getElementById('mark-all-notifications-read');
  if (markAllReadBtn) {
    markAllReadBtn.addEventListener('click', () => {
      document.querySelectorAll('.notif-unread-dot').forEach(dot => dot.remove());
      const countBadge = document.getElementById('notif-badge-count');
      if (countBadge) countBadge.remove();
      if (window.showToast) window.showToast('All notifications marked as read.');
    });
  }

  // Generic forms in dashboard (profile, settings)
  const dashForms = document.querySelectorAll('.dashboard-save-form');
  dashForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (window.showToast) window.showToast('Your settings have been saved successfully.');
    });
  });

  // Scroll / Viewport reveal animations for dashboard widgets
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
  if ('IntersectionObserver' in window && revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.08,
      rootMargin: '0px 0px -20px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('revealed'));
  }
});

