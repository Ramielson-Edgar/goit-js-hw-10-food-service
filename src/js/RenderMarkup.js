import { refs } from './links';
import menuTemplate from '../Template/menu.hbs';
import menu from '../menu.json';

const { $galleryItem } = refs;

function creatGalleryElementMarkup(menu) {
  return menuTemplate(menu);
}

function renderGalleryMarkupHtml() {
  return $galleryItem.insertAdjacentHTML(
    'beforeend',
    creatGalleryElementMarkup(menu),
  );
}

renderGalleryMarkupHtml(creatGalleryElementMarkup(menu));
