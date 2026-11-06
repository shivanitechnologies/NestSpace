// NESTSPACE - Gallery Filter & Lightbox Viewer

document.addEventListener('DOMContentLoaded', () => {
  const filterBtns = document.querySelectorAll('.gallery-filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightboxModal = document.getElementById('gallery-lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-image');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxCategory = document.getElementById('lightbox-category');
  const closeLightboxBtn = document.getElementById('close-lightbox-btn');
  const prevLightboxBtn = document.getElementById('prev-lightbox-btn');
  const nextLightboxBtn = document.getElementById('next-lightbox-btn');

  let currentGalleryList = Array.from(galleryItems);
  let currentIndex = 0;

  // Filtering tabs
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('bg-[#173C35]', 'text-white');
        b.classList.add('bg-transparent', 'text-nest-muted');
      });
      btn.classList.add('bg-[#173C35]', 'text-white');
      btn.classList.remove('bg-transparent', 'text-nest-muted');

      const filter = btn.dataset.filter;

      galleryItems.forEach(item => {
        const itemCategory = item.dataset.category;
        if (filter === 'all' || itemCategory === filter) {
          item.classList.remove('hidden');
          item.style.opacity = '0';
          setTimeout(() => { item.style.opacity = '1'; }, 30);
        } else {
          item.classList.add('hidden');
        }
      });

      currentGalleryList = Array.from(galleryItems).filter(item => !item.classList.contains('hidden'));
    });
  });

  // Lightbox preview
  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      const title = item.querySelector('.gallery-title')?.textContent || 'NESTSPACE Architectural Wing';
      const category = item.dataset.category?.toUpperCase() || 'WORKSPACE';
      
      currentIndex = currentGalleryList.indexOf(item);
      showLightbox(img.src, title, category);
    });
  });

  function showLightbox(src, title, category) {
    if (!lightboxModal) return;
    lightboxImg.src = src;
    if (lightboxCaption) lightboxCaption.textContent = title;
    if (lightboxCategory) lightboxCategory.textContent = category;
    lightboxModal.classList.remove('hidden');
    lightboxModal.classList.add('flex');
    document.body.style.overflow = 'hidden';
  }

  function hideLightbox() {
    if (!lightboxModal) return;
    lightboxModal.classList.add('hidden');
    lightboxModal.classList.remove('flex');
    document.body.style.overflow = '';
  }

  if (closeLightboxBtn) closeLightboxBtn.addEventListener('click', hideLightbox);

  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) hideLightbox();
    });
  }

  function navigateLightbox(direction) {
    if (currentGalleryList.length === 0) return;
    currentIndex = (currentIndex + direction + currentGalleryList.length) % currentGalleryList.length;
    const nextItem = currentGalleryList[currentIndex];
    const img = nextItem.querySelector('img');
    const title = nextItem.querySelector('.gallery-title')?.textContent || 'NESTSPACE';
    const category = nextItem.dataset.category?.toUpperCase() || 'WORKSPACE';
    showLightbox(img.src, title, category);
  }

  if (prevLightboxBtn) prevLightboxBtn.addEventListener('click', (e) => { e.stopPropagation(); navigateLightbox(-1); });
  if (nextLightboxBtn) nextLightboxBtn.addEventListener('click', (e) => { e.stopPropagation(); navigateLightbox(1); });

  document.addEventListener('keydown', (e) => {
    if (lightboxModal && !lightboxModal.classList.contains('hidden')) {
      if (e.key === 'Escape') hideLightbox();
      if (e.key === 'ArrowLeft') navigateLightbox(-1);
      if (e.key === 'ArrowRight') navigateLightbox(1);
    }
  });
});

