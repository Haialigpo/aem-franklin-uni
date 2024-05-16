class Contactus {
  constructor(contactElement) {
    this.comp = contactElement;
    this.init();
  }

  init() {
    const dataAttributes = this.comp.dataset;
    if (dataAttributes.scriptContactus) {
      const scriptElement = document.createElement('script');
      scriptElement.setAttribute('src', dataAttributes.scriptContactus);
      scriptElement.setAttribute(
        'data-success-redirect',
        dataAttributes.successRedirect,
      );
      scriptElement.setAttribute(
        'data-error-redirect',
        dataAttributes.errorRedirect,
      );
      scriptElement.setAttribute('type', 'text/javascript');
      const widgetLoader = document.createElement('div');
      widgetLoader.classList.add('contactus-widget-loader');
      const dynamicForm = document.createElement('div');
      dynamicForm.classList.add(
        'dynamicForm',
        'contact-us-sf',
        'contact-us-form-ac',
      );
      this.comp.append(scriptElement, widgetLoader, dynamicForm);
    }
  }
}

function onDocumentReady() {
  if (document.querySelector('.contactus-container')) {
    const contactusContainer = document.querySelector('.contactus-container');
    if (!contactusContainer) {
      return;
    }

    // eslint-disable-next-line no-new
    new Contactus(contactusContainer);
  }
}

if (document.readyState !== 'loading') {
  onDocumentReady();
} else {
  document.addEventListener('DOMContentLoaded', onDocumentReady);
}
