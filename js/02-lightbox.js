import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const gallaryRef = document.querySelector('.gallery');
const galleryMarkup = createGalleryCardsMarkup(galleryItems);

gallaryRef.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryCardsMarkup(galleryItems) {
  const markup = galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
              <img class="gallery__image" src="${preview}" alt="${description}"/>
            </a>`;
    })
    .join('');
  return markup;
}

new SimpleLightbox('.gallery a', {
  // captions: true,
  // captionSelector: 'img',
  // captionType: 'attr',
  captionsData: 'alt',
  // captionPosition: 'bottom',
  captionDelay: 250,
});
