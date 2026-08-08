const DOUBLE_TAP_DELAY_MS = 300;

function usesTouchInput() {
  return window.matchMedia('(hover: none) and (pointer: coarse)').matches;
}

function getLightbox() {
  return document.querySelector<HTMLElement>('.gallery-lightbox');
}

function getLightboxImage() {
  return document.querySelector<HTMLImageElement>('.gallery-lightbox__image');
}

function openLightbox(src: string) {
  const lightbox = getLightbox();
  const image = getLightboxImage();
  if (!lightbox || !image) return;

  image.src = src;
  lightbox.hidden = false;
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  lightbox.querySelector<HTMLButtonElement>('.gallery-lightbox__close')?.focus();
}

function closeLightbox() {
  const lightbox = getLightbox();
  const image = getLightboxImage();
  if (!lightbox || !image) return;

  lightbox.hidden = true;
  lightbox.setAttribute('aria-hidden', 'true');
  image.removeAttribute('src');
  document.body.style.overflow = '';
}

function handleGalleryClick(event: Event) {
  if (!(event.target instanceof Element)) return;

  const expandButton = event.target.closest<HTMLButtonElement>(
    '.case-study__gallery-expand',
  );
  if (expandButton) {
    const fullSrc = expandButton.dataset.fullSrc;
    if (fullSrc) openLightbox(fullSrc);
    return;
  }

  if (!usesTouchInput()) return;

  const galleryItem = event.target.closest<HTMLElement>(
    '.case-study__gallery-item',
  );
  if (!galleryItem) return;

  const fullSrc = galleryItem.dataset.fullSrc;
  if (!fullSrc) return;

  const now = Date.now();
  const lastTap = Number(galleryItem.dataset.lastTap ?? 0);

  if (now - lastTap < DOUBLE_TAP_DELAY_MS) {
    event.preventDefault();
    galleryItem.dataset.lastTap = '0';
    openLightbox(fullSrc);
    return;
  }

  galleryItem.dataset.lastTap = String(now);
}

function handleLightboxClick(event: Event) {
  if (!(event.target instanceof Element)) return;

  if (event.target.closest('.gallery-lightbox__close')) {
    closeLightbox();
    return;
  }

  if (event.target.classList.contains('gallery-lightbox')) {
    closeLightbox();
  }
}

function handleKeydown(event: KeyboardEvent) {
  if (event.key !== 'Escape') return;

  const lightbox = getLightbox();
  if (!lightbox || lightbox.hidden) return;

  closeLightbox();
}

function initGalleryLightbox() {
  document.removeEventListener('click', handleGalleryClick);
  document.removeEventListener('click', handleLightboxClick);
  document.removeEventListener('keydown', handleKeydown);

  if (!document.querySelector('.case-study__gallery')) return;

  document.addEventListener('click', handleGalleryClick);
  document.addEventListener('click', handleLightboxClick);
  document.addEventListener('keydown', handleKeydown);
}

document.addEventListener('astro:page-load', initGalleryLightbox);
initGalleryLightbox();
