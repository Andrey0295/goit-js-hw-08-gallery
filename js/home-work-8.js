import { default as imageRefs } from './gallery-items.js';
// console.log(imageRefs);

const getGalleryListEl = document.querySelector('.js-gallery');
const getLightboxEl = document.querySelector('.lightbox');
const imagesMarkUp = makeItemGallery(imageRefs);
getGalleryListEl.insertAdjacentHTML('beforeend', imagesMarkUp);
console.log(getGalleryListEl);

function makeItemGallery(imageRefs) {
  return imageRefs
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
   <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" >
   </a>
   </li>`;
    })
    .join('');
}

getGalleryListEl.addEventListener('click', onImageClick);
function onImageClick(evt) {
  if (evt.target.nodeName !== 'IMG') {
    return 'не попал!!!';
  }
  getLightboxEl.classList.add('.is-open');
  console.log(evt.target.dataset.source);
}
