import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  const footerMeta = getMetadata('footer');
  block.textContent = '';

  // load footer fragment
  const footerPath = footerMeta.footer || '/footer';
  const fragment = await loadFragment(footerPath);

  // decorate footer DOM
  const footer = document.createElement('div');
  while (fragment.firstElementChild) footer.append(fragment.firstElementChild);

  block.append(footer);
  // eslint-disable-next-line no-use-before-define
  // setClass();
}
// function setClass() {
//   if (document.querySelector('.footer-wrapper')) {
//     const footerWrapper = document.querySelector('.footer-wrapper');
//     if (footerWrapper.querySelector('.section')) {
//       const classes = footerWrapper.querySelector('.section').classList;
//       footerWrapper.classList.add(...classes);
//     }
//   }
// }
