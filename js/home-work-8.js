import { default as imageRefs } from './gallery-items.js';

const galleryRefs = {
  BodyEl: document.querySelector('body'),
  GalleryListEl: document.querySelector('.js-gallery'),
  LightboxEl: document.querySelector('.lightbox'),
  OriginalImgEl: document.querySelector('.lightbox__image'),
  CloseBtnEl: document.querySelector('button[data-action="close-lightbox"]'),
  BackdropEl: document.querySelector('.lightbox__overlay'),
};

const imagesMarkUp = makeItemGallery(imageRefs);
galleryRefs.GalleryListEl.insertAdjacentHTML('beforeend', imagesMarkUp);

galleryRefs.BodyEl.addEventListener('click', onOpenLightBox);
galleryRefs.CloseBtnEl.addEventListener('click', onCloseLightBox);
galleryRefs.BackdropEl.addEventListener('click', onBackdropClick);

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

function onOpenLightBox(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') {
    return 'не попал!!!';
  }

  galleryRefs.LightboxEl.classList.add('is-open');
  galleryRefs.OriginalImgEl.setAttribute('src', evt.target.dataset.source);
  galleryRefs.OriginalImgEl.setAttribute('alt', evt.target.alt);
  galleryRefs.BodyEl.addEventListener('keydown', onPressEscapeKey);
}

function onCloseLightBox(evt) {
  // evt.preventDefault();
  galleryRefs.LightboxEl.classList.toggle('is-open');
  galleryRefs.OriginalImgEl.removeAttribute('src');
  galleryRefs.OriginalImgEl.removeAttribute('alt');
  galleryRefs.BodyEl.removeEventListener('keydown', onPressEscapeKey);
}

function onPressEscapeKey(evt) {
  // const ESC_KEY_CODE = 'Escape';
  // const isEscKey = evt.code === ESC_KEY_CODE;

  const isEscKey = evt.key === 'Escape';

  if (isEscKey) {
    onCloseLightBox();
  }
}

function onBackdropClick(evt) {
  if (evt.currentTarget === evt.target) {
    console.log('Click on Backdrop!!!!Uraaa');
    onCloseLightBox();
  }
}
