(function () {
  /* ── Scroll-reveal observer ── */
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  function observeSections(root) {
    root.querySelectorAll('section').forEach(function (sec) {
      if (sec.classList.contains('no-reveal')) return;
      sec.classList.add('reveal');
      observer.observe(sec);
    });
  }

  // Reveal sections on initial page load
  observeSections(document.querySelector('main') || document.body);

  /* ── Platform-aware app store links ── */
  var APP_STORE = 'https://apps.apple.com/nz/app/tapara/id6780735201';
  var PLAY_STORE = 'https://play.google.com/store/apps/details?id=co.tapara';
  var IS_ANDROID = /android/i.test(navigator.userAgent);
  function applyStoreLinks(root) {
    (root || document).querySelectorAll('a[data-store-link]').forEach(function (a) {
      a.setAttribute('href', IS_ANDROID ? PLAY_STORE : APP_STORE);
    });
  }
  applyStoreLinks(document);

  /* ── Mobile menu ── */
  function setMenu(open) {
    var panel = document.getElementById('mobile-menu');
    var btn = document.querySelector('[data-menu-toggle]');
    if (!panel || !btn) return;
    panel.classList.toggle('hidden', !open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    var icon = btn.querySelector('[data-menu-icon]');
    if (icon) icon.textContent = open ? 'close' : 'menu';
  }
  document.addEventListener('click', function (e) {
    var toggle = e.target.closest('[data-menu-toggle]');
    if (toggle) { e.preventDefault(); setMenu(toggle.getAttribute('aria-expanded') !== 'true'); return; }
    if (e.target.closest('#mobile-menu a')) setMenu(false);
  });
  window.addEventListener('resize', function () { if (window.innerWidth >= 1024) setMenu(false); });

  /* ── SPA router ── */
  var ROUTE_MAP = {
    '/': '/', '/about': '/about',
    '/consumers': '/customers', '/customers': '/customers',
    '/businesses': '/businesses', '/merchants': '/businesses',
    '/how-it-works': '/about', '/platform': '/about',
    '/contact': '/contact',
    '/terms': '/terms', '/consumer-terms': '/consumer-terms',
    '/privacy': '/privacy',
    '/merchant-agreement': '/merchant-agreement',
    '/complaints': '/complaints', '/stripe-return': '/stripe-return',
    '/open-banking': '/open-banking', '/website-terms': '/website-terms',
    '/payment-return': '/payment-return',
    '/blog': '/blog',
    '/delete-account': '/delete-account'
  };

  function pageFromUrl(url) {
    var path = new URL(url, location.href).pathname.replace(/\/index\.html$/, '/').replace(/\.html$/, '').replace(/\/$/, '') || '/';
    return ROUTE_MAP[path] || path;
  }

  function toHtmlUrl(url) {
    var u = new URL(url, location.href);
    var path = u.pathname.replace(/\/$/, '') || '/';
    if (path === '/') return u.origin + '/index.html';
    if (!/\.html$/.test(path)) return u.origin + path + '.html';
    return url;
  }

  function reloadIframes(container) {
    container.querySelectorAll('iframe').forEach(function (iframe) {
      iframe.style.opacity = '0';
      var src = iframe.getAttribute('src');
      if (src) iframe.src = src;
    });
  }

  /* ── Re-run inline scripts after SPA swap ── */
  function runPageScripts(root) {
    root.querySelectorAll('script').forEach(function (old) {
      var s = document.createElement('script');
      s.textContent = old.textContent;
      old.replaceWith(s);
    });
  }

  function loadPage(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = function () {
      if (xhr.status === 200 || xhr.status === 0) {
        callback(null, xhr.responseText);
      } else {
        callback(new Error(xhr.status));
      }
    };
    xhr.onerror = function () { callback(new Error('network')); };
    try { xhr.send(); } catch (e) { callback(e); }
  }

  function updateActiveNav(page) {
    var navLinks = document.querySelectorAll('header nav a[href]');
    navLinks.forEach(function (link) {
      var href = link.getAttribute('href').replace(/\/$/, '') || '/';
      var isActive = (href === page) || (href === '/businesses' && page === '/businesses') || (href === '/customers' && page === '/customers');
      if (isActive) {
        link.classList.remove('text-on-surface-variant', 'font-medium');
        link.classList.add('text-primary', 'font-bold');
        link.setAttribute('aria-current', 'page');
      } else {
        link.classList.remove('font-bold');
        link.classList.add('text-on-surface-variant', 'font-medium');
        link.removeAttribute('aria-current');
      }
    });
  }

  function navigate(url, pushState) {
    setMenu(false);
    var page = pageFromUrl(url);
    var fetchUrl = toHtmlUrl(location.origin + page);
    var displayUrl = page === '/' ? '/' : page;
    var oldMain = document.querySelector('main');

    // Fade out current content
    if (oldMain) oldMain.classList.add('swap-out');

    loadPage(fetchUrl, function (err, html) {
      if (err) { location.href = url; return; }

      var doc = new DOMParser().parseFromString(html, 'text/html');
      var newMain = doc.querySelector('main');

      if (!newMain || !oldMain) { location.href = url; return; }

      // Wait for fade-out to finish, then swap
      setTimeout(function () {
        // Remove initial animation so swap-in plays fresh
        newMain.style.animation = 'none';
        newMain.classList.add('swap-in');
        oldMain.replaceWith(newMain);
        reloadIframes(newMain);
        observeSections(newMain);

        document.title = doc.title;

        // Sync body class so inherited styles match the new page
        if (doc.body.className) document.body.className = doc.body.className;

        var nd = doc.querySelector('meta[name="description"]');
        var od = document.querySelector('meta[name="description"]');
        if (nd && od) od.setAttribute('content', nd.getAttribute('content'));

        runPageScripts(newMain);
        applyStoreLinks(newMain);
        updateActiveNav(page);
        if (pushState) history.pushState({ page: page }, '', displayUrl);
        window.scrollTo(0, 0);
      }, 150);
    });
  }

  function resolveUrl(href) {
    var a = document.createElement('a');
    a.href = href;
    return a.href;
  }

  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[href]');
    if (!a) return;

    var href = a.getAttribute('href');
    if (!href || href === '#' || href.charAt(0) === '#') return;
    if (href.indexOf('://') !== -1 && href.indexOf(location.origin) !== 0) return;
    var clean = href.replace(/\.html$/, '').replace(/\/index$/, '/').replace(/#.*$/, '');
    if (!(clean in ROUTE_MAP) && clean.indexOf('/blog/') !== 0 && !/\.html$/.test(href)) return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    if (a.hasAttribute('download') || a.target === '_blank') return;

    var resolved = resolveUrl(href);
    if (resolved === location.href) return;

    e.preventDefault();
    navigate(resolved, true);
  });

  window.addEventListener('popstate', function () {
    navigate(location.href, false);
  });

  // Contact form handler (event delegation so it works after SPA navigation)
  document.addEventListener('submit', function (e) {
    var form = e.target.closest('#contact-form');
    if (!form) return;
    e.preventDefault();
    var btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.textContent = 'Sending...';
    fetch('https://formspree.io/f/mkopzwop', {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    }).then(function (r) {
      if (r.ok) {
        form.classList.add('hidden');
        document.getElementById('form-success').classList.remove('hidden');
      } else {
        btn.disabled = false;
        btn.textContent = 'Send Message';
        alert('Something went wrong. Please try again.');
      }
    }).catch(function () {
      btn.disabled = false;
      btn.textContent = 'Send Message';
      alert('Something went wrong. Please try again.');
    });
  });

  // Handle SPA redirect from 404.html
  var redirect = sessionStorage.getItem('spa-redirect');
  if (redirect) {
    sessionStorage.removeItem('spa-redirect');
    if (redirect !== '/') {
      history.replaceState(null, '', redirect);
      navigate(location.origin + redirect, false);
    }
  }
})();
