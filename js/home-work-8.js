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
  evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') {
    return 'не попал!!!';
  }
  getLightboxEl.classList.add('is-open');
  const getOriginalImgEl = document.querySelector('.lightbox__image');
  getOriginalImgEl.setAttribute('src', evt.target.dataset.source);
  getOriginalImgEl.setAttribute('alt', evt.target.alt);
  console.log(evt.target.dataset.source);
  console.log('Клацнули в картинку');
  console.log(evt.target.alt);
}

// console.log(getOriginalImgEl);
