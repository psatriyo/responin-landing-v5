(function () {
  var defaultLanguage = 'id';
  var storageKey = 'responin-language';
  var translations = window.ResponinI18n || {};

  function getStoredLanguage() {
    try {
      return window.localStorage.getItem(storageKey);
    } catch (error) {
      return null;
    }
  }

  function storeLanguage(language) {
    try {
      window.localStorage.setItem(storageKey, language);
    } catch (error) {
      // Ignore storage failures; the switcher should still work for this page view.
    }
  }

  function getLanguage(language) {
    return translations[language] ? language : defaultLanguage;
  }

  function translateText(dictionary) {
    document.querySelectorAll('[data-i18n]').forEach(function (element) {
      var key = element.getAttribute('data-i18n');
      if (dictionary.text && dictionary.text[key]) {
        element.textContent = dictionary.text[key];
      }
    });
  }

  function translateAttributes(dictionary) {
    document.querySelectorAll('[data-i18n-attr]').forEach(function (element) {
      var mappings = element.getAttribute('data-i18n-attr').split(',');
      mappings.forEach(function (mapping) {
        var parts = mapping.split(':');
        var attr = parts[0] && parts[0].trim();
        var key = parts[1] && parts[1].trim();
        if (attr && key && dictionary.attr && dictionary.attr[key]) {
          element.setAttribute(attr, dictionary.attr[key]);
        }
      });
    });
  }

  function translateDocument(dictionary) {
    document.title = dictionary.title || 'Responin';

    var titleElement = document.querySelector('[data-i18n-title]');
    if (titleElement) {
      titleElement.textContent = document.title;
    }

    var metaDescription = document.querySelector('[data-i18n-meta="description"]');
    if (metaDescription && dictionary.meta && dictionary.meta.description) {
      metaDescription.setAttribute('content', dictionary.meta.description);
    }
  }

  function updateLanguageSwitcher(activeLanguage) {
    document.querySelectorAll('[data-lang]').forEach(function (button) {
      var isActive = button.getAttribute('data-lang') === activeLanguage;
      button.classList.toggle('language-switcher__button--active', isActive);
      button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
  }

  function setLanguage(language) {
    var activeLanguage = getLanguage(language);
    var dictionary = translations[activeLanguage];

    if (!dictionary) return;

    document.documentElement.lang = activeLanguage;
    translateDocument(dictionary);
    translateText(dictionary);
    translateAttributes(dictionary);
    updateLanguageSwitcher(activeLanguage);
    storeLanguage(activeLanguage);
  }

  document.querySelectorAll('[data-lang]').forEach(function (button) {
    button.addEventListener('click', function () {
      setLanguage(button.getAttribute('data-lang'));
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (event) {
      var targetId = link.getAttribute('href');
      if (!targetId || targetId === '#') return;

      var target = document.querySelector(targetId);
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.pushState(null, '', targetId);
    });
  });

  setLanguage(getStoredLanguage() || defaultLanguage);
})();
