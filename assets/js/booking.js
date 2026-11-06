// NESTSPACE - Interactive Booking System

document.addEventListener('DOMContentLoaded', () => {
  const hourlyRateElem = document.getElementById('hourly-rate-val');
  const durationSelect = document.getElementById('booking-duration');
  const dateInput = document.getElementById('booking-date');
  const timeSlotButtons = document.querySelectorAll('.time-slot-btn');
  const seatNodes = document.querySelectorAll('.seat-node');
  const summarySubtotal = document.getElementById('summary-subtotal');
  const summaryTax = document.getElementById('summary-tax');
  const summaryTotal = document.getElementById('summary-total');
  const summarySlotText = document.getElementById('summary-slot-text');
  const summarySeatText = document.getElementById('summary-seat-text');
  const summaryDateText = document.getElementById('summary-date-text');
  const confirmBookingBtn = document.getElementById('confirm-booking-btn');

  let baseRate = hourlyRateElem ? parseFloat(hourlyRateElem.dataset.rate || '180') : 180;
  let selectedDuration = 2; // hours default
  let selectedSlot = '10:00 AM';
  let selectedSeat = 'Desk A-04';
  let selectedDate = new Date().toISOString().split('T')[0];

  if (dateInput) {
    dateInput.value = selectedDate;
    dateInput.min = selectedDate;
    dateInput.addEventListener('change', (e) => {
      selectedDate = e.target.value;
      if (summaryDateText) {
        const d = new Date(selectedDate);
        summaryDateText.textContent = d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
      }
    });
  }

  // Handle slot selection
  timeSlotButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.classList.contains('disabled') || btn.disabled) return;
      timeSlotButtons.forEach(b => b.classList.remove('bg-[#173C35]', 'text-white', 'border-[#173C35]'));
      btn.classList.add('bg-[#173C35]', 'text-white', 'border-[#173C35]');
      selectedSlot = btn.dataset.time || btn.textContent.trim();
      if (summarySlotText) {
        summarySlotText.textContent = `${selectedSlot} (${selectedDuration} hrs)`;
      }
    });
  });

  // Handle seat map selection
  seatNodes.forEach(node => {
    node.addEventListener('click', () => {
      if (node.classList.contains('occupied')) {
        if (window.showToast) window.showToast('This desk is already reserved for this slot.', 'error');
        return;
      }
      seatNodes.forEach(n => n.classList.remove('selected'));
      node.classList.add('selected');
      selectedSeat = node.dataset.seat || node.textContent.trim();
      if (summarySeatText) {
        summarySeatText.textContent = selectedSeat;
      }
    });
  });

  // Handle duration change
  if (durationSelect) {
    durationSelect.addEventListener('change', (e) => {
      selectedDuration = parseInt(e.target.value, 10) || 1;
      updatePricing();
      if (summarySlotText) {
        summarySlotText.textContent = `${selectedSlot} (${selectedDuration} hrs)`;
      }
    });
  }

  function updatePricing() {
    const subtotal = baseRate * selectedDuration;
    const tax = Math.round(subtotal * 0.18); // 18% GST/Service tax
    const total = subtotal + tax;

    if (summarySubtotal) summarySubtotal.textContent = `₹${subtotal.toLocaleString('en-IN')}`;
    if (summaryTax) summaryTax.textContent = `₹${tax.toLocaleString('en-IN')}`;
    if (summaryTotal) summaryTotal.textContent = `₹${total.toLocaleString('en-IN')}`;
  }

  updatePricing();

  // Booking Confirmation Simulation
  if (confirmBookingBtn) {
    confirmBookingBtn.addEventListener('click', () => {
      const modal = document.getElementById('booking-success-modal');
      if (modal) {
        const orderIdSpan = document.getElementById('modal-booking-id');
        const modalSeatSpan = document.getElementById('modal-booking-seat');
        const modalDateSpan = document.getElementById('modal-booking-date');
        
        if (orderIdSpan) orderIdSpan.textContent = 'NS-' + Math.floor(1000 + Math.random() * 9000);
        if (modalSeatSpan) modalSeatSpan.textContent = selectedSeat;
        if (modalDateSpan) modalDateSpan.textContent = `${selectedDate} at ${selectedSlot}`;
        
        modal.classList.remove('hidden');
        modal.classList.add('flex');
      } else {
        if (window.showToast) {
          window.showToast(`Reservation confirmed for ${selectedSeat} on ${selectedDate}!`);
        }
      }
    });
  }

  // Close modal button
  const closeModalBtns = document.querySelectorAll('.close-booking-modal-btn');
  closeModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = document.getElementById('booking-success-modal');
      if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
      }
    });
  });
});

