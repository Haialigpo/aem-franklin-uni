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
