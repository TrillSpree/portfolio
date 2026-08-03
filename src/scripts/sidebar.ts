function updateActiveNavLinks() {
  const pathname = window.location.pathname;

  document.querySelectorAll('.site-sidebar__nav-link').forEach((link) => {
    const href = link.getAttribute('href');
    if (!href) return;

    const isActive =
      href === '/'
        ? pathname === '/' || pathname === ''
        : pathname === href || pathname.startsWith(`${href}/`);

    link.classList.toggle('is-active', isActive);
  });
}

function handleSidebarClick(event: Event) {
  if (!(event.target instanceof Element)) return;

  const toggle = event.target.closest('.site-sidebar__toggle');
  if (toggle) {
    const sidebar = document.querySelector('.site-sidebar');
    if (!sidebar) return;

    const isOpen = sidebar.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    return;
  }

  const navLink = event.target.closest('.site-sidebar__nav-link');
  if (navLink) {
    const sidebar = document.querySelector('.site-sidebar');
    const toggleButton = document.querySelector('.site-sidebar__toggle');

    sidebar?.classList.remove('is-open');
    toggleButton?.setAttribute('aria-expanded', 'false');
  }
}

document.addEventListener('click', handleSidebarClick);
document.addEventListener('astro:page-load', updateActiveNavLinks);
updateActiveNavLinks();
