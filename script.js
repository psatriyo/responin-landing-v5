(function () {
  'use strict';

  // Indonesian is the default and is written directly in index.html. On load we
  // snapshot those strings so switching back to ID needs no second dictionary.
  var DEFAULT_LANGUAGE = 'id';
  var STORAGE_KEY = 'responin-language';
  var translations = window.ResponinI18n || {};

  var metaDescription = document.querySelector('[data-i18n-meta="description"]');

  function snapshotDefault() {
    var dict = { title: document.title, meta: {}, attr: {}, text: {} };
    if (metaDescription) dict.meta.description = metaDescription.getAttribute('content');

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (!(key in dict.text)) dict.text[key] = el.textContent;
    });

    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      parseAttrMappings(el).forEach(function (m) {
        if (!(m.key in dict.attr)) dict.attr[m.key] = el.getAttribute(m.attr);
      });
    });
    return dict;
  }

  function parseAttrMappings(el) {
    return el
      .getAttribute('data-i18n-attr')
      .split(',')
      .map(function (pair) {
        var parts = pair.split(':');
        return { attr: (parts[0] || '').trim(), key: (parts[1] || '').trim() };
      })
      .filter(function (m) {
        return m.attr && m.key;
      });
  }

  translations[DEFAULT_LANGUAGE] = snapshotDefault();

  function readStored() {
    try {
      return window.localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  }

  function store(lang) {
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      /* storage unavailable (private mode, webviews) — switching still works */
    }
  }

  function apply(lang) {
    var active = translations[lang] ? lang : DEFAULT_LANGUAGE;
    var dict = translations[active];

    document.documentElement.lang = active;
    if (dict.title) document.title = dict.title;
    if (metaDescription && dict.meta && dict.meta.description) {
      metaDescription.setAttribute('content', dict.meta.description);
    }

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var value = dict.text[el.getAttribute('data-i18n')];
      if (value != null) el.textContent = value;
    });

    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      parseAttrMappings(el).forEach(function (m) {
        var value = dict.attr[m.key];
        if (value != null) el.setAttribute(m.attr, value);
      });
    });

    document.querySelectorAll('[data-lang]').forEach(function (button) {
      var isActive = button.getAttribute('data-lang') === active;
      button.classList.toggle('language-switcher__button--active', isActive);
      button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });

    return active;
  }

  document.querySelectorAll('[data-lang]').forEach(function (button) {
    button.addEventListener('click', function () {
      store(apply(button.getAttribute('data-lang')));
    });
  });

  // Smooth in-page scrolling that also moves focus for keyboard/screen-reader users.
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (event) {
      var id = link.getAttribute('href');
      if (!id || id === '#') return;
      var target = document.querySelector(id);
      if (!target) return;

      event.preventDefault();
      var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
      if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
      history.pushState(null, '', id);
    });
  });

  // ?lang=en makes shareable English links; otherwise use the stored choice.
  var params = new URLSearchParams(window.location.search);
  var requested = params.get('lang');
  if (requested && translations[requested]) {
    store(apply(requested));
  } else {
    apply(readStored() || DEFAULT_LANGUAGE);
  }
})();
