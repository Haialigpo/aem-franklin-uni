/* eslint-disable no-use-before-define */
import { loadScript, loadCSS } from '../../scripts/aem.js';
import { getEnvType } from '../../scripts/scripts.js';

export default async function loadLiveChat() {
  if (document.querySelector('.livechat-container')) {
    const livechatContainer = document.querySelector('.livechat-container');
    const botElement = document.createElement('div');
    botElement.id = 'bot';
    // @ts-ignore
    livechatContainer.append(botElement);
    await loadScriptCss();
  }
}
async function loadScriptCss() {
  const liveChatJsSrc = {
    dev: 'https://azcb-ne-pas-cdnprod.azureedge.net/knorruk105/aemtemplate/Bot.js?brand=knorr&locale=en_GB',
    preview: 'https://azcb-ne-pas-cdnprod.azureedge.net/knorruk105/aemtemplate/Bot.js?brand=knorr&locale=en_GB',
    live: 'https://azcb-ne-pas-cdnprod.azureedge.net/knorruk105/aemtemplate/Bot.js?brand=knorr&locale=en_GB',
  };
  const liveChatCssSrc = {
    dev: 'https://azcb-ne-pas-cdnprod.azureedge.net/knorruk105/aemtemplate/BotChat.css?brand=knorr&locale=en_GB',
    preview: 'https://azcb-ne-pas-cdnprod.azureedge.net/knorruk105/aemtemplate/BotChat.css?brand=knorr&locale=en_GB',
    live: 'https://azcb-ne-pas-cdnprod.azureedge.net/knorruk105/aemtemplate/BotChat.css?brand=knorr&locale=en_GB',
  };
  const liveChatSkinCssSrc = {
    dev: 'https://azcb-ne-pas-cdnprod.azureedge.net/knorruk105/aemtemplate/Bot-Skin.css?brand=knorr&locale=en_GB',
    preview: 'https://azcb-ne-pas-cdnprod.azureedge.net/knorruk105/aemtemplate/Bot-Skin.css?brand=knorr&locale=en_GB',
    live: 'https://azcb-ne-pas-cdnprod.azureedge.net/knorruk105/aemtemplate/Bot-Skin.css?brand=knorr&locale=en_GB',
  };
  await loadScript(liveChatJsSrc[getEnvType()], {});
  await loadCSS(liveChatCssSrc[getEnvType()]);
  await loadCSS(liveChatSkinCssSrc[getEnvType()]);
}
