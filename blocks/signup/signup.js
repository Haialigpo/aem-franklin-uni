class Signup {
  constructor(signupElement) {
    this.comp = signupElement;
    this.init();
  }

  init() {
    const dataAttributes = this.comp.dataset;
    if (dataAttributes.scriptSignupJs) {
      const scriptElement = document.createElement('script');
      scriptElement.setAttribute('src', dataAttributes.scriptContactus);
      scriptElement.setAttribute('id', 'form-app-js-formwidget-024406fe71');
      scriptElement.setAttribute('type', 'module');
      const linkElement = document.createElement('link');
      linkElement.setAttribute('href', dataAttributes.scriptSignupCss);
      linkElement.setAttribute('rel', 'stylesheet');
      linkElement.setAttribute('as', 'style');
      linkElement.setAttribute('onload', "this.onload=null;this.rel='stylesheet'");
      const widgetLoader = document.createElement('div');
      widgetLoader.classList.add('form-widget');
      widgetLoader.setAttribute('data-success-page', dataAttributes.successUrl);
      this.comp.append(scriptElement, linkElement, widgetLoader);
    }
  }
}

function onDocumentReady() {
  if (document.querySelector('.signup-container')) {
    const signupContainer = document.querySelector('.signup-container');
    if (!signupContainer) {
      return;
    }

    // eslint-disable-next-line no-new
    new Signup(signupContainer);
  }
}

if (document.readyState !== 'loading') {
  onDocumentReady();
} else {
  document.addEventListener('DOMContentLoaded', onDocumentReady);
}
