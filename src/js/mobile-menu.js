(() => {
    const mobileMenu = document.querySelector('.js-menu-container');
    const openMenuBtn = document.querySelector('.js-open-menu');
    const closeMenuBtn = document.querySelector('.js-close-menu');
    const closeAnchorLink = document.querySelector('.js-close-anchor');
    const closeAnchorTwoLink = document.querySelector('.js-close-anchortwo');
    const closeAnchorThreeLink = document.querySelector('.js-close-anchorthree');
    const closeAnchorFourLink = document.querySelector('.js-close-anchorfour');

    const toggleMenu = () => {
      const isMenuOpen =
        openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
      openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
      mobileMenu.classList.toggle('is-open');

      const scrollLockMethod = !isMenuOpen
        ? 'disableBodyScroll'
        : 'enableBodyScroll';
      bodyScrollLock[scrollLockMethod](document.body);
    };

    openMenuBtn.addEventListener('click', toggleMenu);
    closeMenuBtn.addEventListener('click', toggleMenu);
    closeAnchorLink.addEventListener('click', toggleMenu);
    closeAnchorTwoLink.addEventListener('click', toggleMenu);
    closeAnchorThreeLink.addEventListener('click', toggleMenu);
    closeAnchorFourLink.addEventListener('click', toggleMenu);

    // Close the mobile menu on wider screens if the device orientation changes
    window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
      if (!e.matches) return;
      mobileMenu.classList.remove('is-open');
      openMenuBtn.setAttribute('aria-expanded', false);
      bodyScrollLock.enableBodyScroll(document.body);
    });
  })();