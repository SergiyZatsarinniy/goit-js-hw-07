import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

const markup = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
  })
  .join('');

galleryContainer.insertAdjacentHTML('beforeend', markup);
galleryContainer.addEventListener('click', onClick);

const instance = basicLightbox.create(
  `
<img width="1280" height="auto" src="">`
);

function onClick(event) {
  event.preventDefault();
  if (!event.target.dataset.source) {
    return;
  }
  instance.element().querySelector('img').src = event.target.dataset.source;
  instance.show();
}
