import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryContainerRef = document.querySelector('.gallery');
const cardsMarkup = createGalleryCardMarkup(galleryItems);

galleryContainerRef.insertAdjacentHTML('beforeend', cardsMarkup);

galleryContainerRef.addEventListener('click', onImageGalleryClick);

let getOpenModalRef;
let getCloseModalRef;

function createGalleryCardMarkup(galleryItems) {
  const markup = galleryItems
    .map(({ description, original, preview }) => {
      return `<div class="gallery__item">
                <a class="gallery__link" href="${original}">
                  <img
                    class="gallery__image"
                    src="${preview} "
                    data-source="${original} "
                    alt="${description} "
                  />
                </a>
              </div>`;
    })
    .join('');
  return markup;
}

function onImageGalleryClick(event) {
  event.preventDefault();
  // console.log(event.target.dataset.source);

  const imgSource = event.target.dataset.source;

  createModal(imgSource);

  openModal();
}

function createModal(source) {
  const instance = basicLightbox.create(`
    <img src="${source}" width="800" height="600">`);

  getOpenModalRef = instance.show;
  getCloseModalRef = instance.close;
}

function onCloseForEsc(event) {
  // console.log(event);
  if (event.code === 'Escape') {
    closeModal();
  }
}

function closeModal() {
  window.removeEventListener('keydown', onCloseForEsc);

  getCloseModalRef();
}

function openModal() {
  window.addEventListener('keydown', onCloseForEsc);

  getOpenModalRef();
}
