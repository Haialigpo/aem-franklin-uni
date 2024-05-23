// eslint-disable-next-line import/no-cycle
import { sampleRUM, loadScript, loadCSS } from './aem.js';
// eslint-disable-next-line import/no-cycle
import { getEnvType } from './scripts.js';
// Core Web Vitals RUM collection
sampleRUM('cwv');

// add more delayed functionality here
async function loadAdobeLaunch() {
  const adobeotmSrc = {
    dev: 'https://assets.adobedtm.com/e6bd1902389a/e558d14ace7f/launch-8fb839a92d58-development.min.js',
    preview: 'https://assets.adobedtm.com/e6bd1902389a/e558d14ace7f/launch-8fb839a92d58-development.min.js',
    live: 'https://assets.adobedtm.com/e6bd1902389a/e558d14ace7f/launch-8fb839a92d58-development.min.js',
  };
  await loadScript(adobeotmSrc[getEnvType()], {});
}

await loadAdobeLaunch();

async function loadLiveChat() {
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

await loadLiveChat();
