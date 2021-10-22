import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');

const galleryMarkup = galleryItems
.map(item =>
    `<div class="gallery__item">
    <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
      />
      </a>
      </div>`)
      .join(``);
      
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);
galleryContainer.addEventListener('click', onImgClick);
      
    
function onImgClick(evt) {

    evt.preventDefault();

const instance = basicLightbox.create(`
    <div class="modal">
    <img src="${evt.target.dataset.source}"
    class="js-modal-img"
    width="800" height="600">
    </div>`,

   {
  onShow: (instance) => {
    window.addEventListener("keydown", onKeyboardClick);
    function onKeyboardClick(evt) {
      if (evt.code === 'Escape') { 
          instance.close();
          window.removeEventListener('keydown', onKeyboardClick);
        };
    };

      instance.element().querySelector('.js-modal-img');
    },
}).show();
    }
