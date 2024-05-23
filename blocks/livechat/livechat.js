class Livechat {
  constructor(contactElement) {
    this.comp = contactElement;
    this.init();
  }

  init() {
    const dataAttributes = this.comp.dataset;
    if (dataAttributes.scriptContactus) {
      const botElement = document.createElement('div');
      botElement.id = 'bot';
      this.comp.append(botElement);
    }
  }
}

function onDocumentReady() {
  if (document.querySelector('.livechat-container')) {
    const livechatContainer = document.querySelector('.livechat-container');
    if (!livechatContainer) {
      return;
    }

    // eslint-disable-next-line no-new
    new Livechat(livechatContainer);
  }
}

if (document.readyState !== 'loading') {
  onDocumentReady();
} else {
  document.addEventListener('DOMContentLoaded', onDocumentReady);
}
