"use strict"
//проверка на поддержку ВебП
import * as flsFunctions from "./modules/functions.js";
import { useDynamicAdapt } from './modules/dynamicAdapt.js';

useDynamicAdapt();

flsFunctions.isWebp();
//импорт свайпера
import Swiper, { Navigation, Pagination, EffectFade, Autoplay, Parallax } from 'swiper';
import { Logger } from "sass";
Swiper.use([Navigation, Pagination, Autoplay, EffectFade, Parallax]);


//проверка на телефон=============================
var isMobile = {
   Android: function () {
      return navigator.userAgent.match(/Android/i);
   },
   BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
   },
   iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
   },
   Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
   },
   Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
   },
   any: function () {
      return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
   }
};
//Споллеры=========================

if (innerWidth < 768) {
   jQuery(document).ready(function () {
      $('[data-spoller]').parent().addClass('_init')
      $('[data-spoller]').click(function (event) {
         $(this).toggleClass('_active').next().slideToggle(300);
      })
   })
}


//?Анимация=============================================

/* ===============АнимацияПоСкролу=====================
function onEntry(entry) {
   entry.forEach(change => {
      if (change.isIntersecting) {
         change.target.classList.add('element-show');
      } else {
         change.target.classList.remove('element-show');
      }
   });
}

let options = {
   threshold: [0.5]
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');

for (let elm of elements) {
   observer.observe(elm);
}
=======================================================*/

/*===================ПрокруткаПоЯкорям===================
document.querySelectorAll('a[href^="#"').forEach(link => {

   link.addEventListener('click', function (e) {
      e.preventDefault();

      let href = this.getAttribute('href').substring(1);

      const scrollTarget = document.getElementById(href);

      const topOffset = 50;
      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset;

      window.scrollBy({
         top: offsetPosition,
         behavior: 'smooth'
      });
   });
});
===========================================================*/

//?Свайпер================================================================
const tips_slider = new Swiper('.slider-tips__body', {
   observer: true,
   observeParents: true,
   slidesPerView: 3,
   spaceBetween: 32,
   speed: 880,
   loop: true,
   watchOverflow: true,

   pagination: {
      el: '.slider-tips__dotts',
      clickable: true,
   },
   navigation: {
      nextEl: '.slider-tips .slider-arrow_next',
      prevEl: '.slider-tips .slider-arrow_prev',
   },
   // on: {
   //    lazyImageReady: function () {
   //       ibg();
   //    },
   // },
   breakpoints: {
      320: {
         slidesPerView: 1.1,
         spaceBetween: 15,
      },
      768: {
         slidesPerView: 2,
         spaceBetween: 20,
      },
      992: {
         slidesPerView: 3,
         spaceBetween: 32,
      }
   },

});


const rooms_slider = new Swiper('.slider-rooms__body', {
   parallax: true,
   observer: true,
   observeParents: true,
   slidesPerView: 'auto',
   spaceBetween: 24,
   speed: 880,
   loop: true,
   watchOverflow: true,
   loopAdditionalSlides: 5,
   direction: 'horizontal',
   preloadImage: false,

   pagination: {
      el: '.slider-rooms__dotts',
      clickable: true,
   },
   navigation: {
      nextEl: '.slider-rooms .slider-arrow_next',
      prevEl: '.slider-rooms .slider-arrow_prev',
   },
   // on: {
   //    lazyImageReady: function () {
   //       ibg();
   //    },
   // },
   // breakpoints: {
   //    975: {
   //       spaceBetween: 100,
   //    },
   //    768: {
   //       spaceBetween: 30,
   //       slidesPerView: 3,
   //    },
   //    550: {
   //       slidesPerView: 2,
   //    },
   //    320: {
   //       slidesPerView: 1,
   //    }
   // },

});
const main_slider = new Swiper('.slider-main__body', {
   parallax: true,
   autoHeight: true,
   observer: true,
   observeParents: true,
   slidesPerView: 1,
   spaceBetween: 32,
   speed: 880,
   loop: true,
   initialSlide: 1,
   loopAdditionalSlides: 5,
   loopPreventsSliding: false,
   direction: 'horizontal',
   preloadImage: false,

   pagination: {
      el: '.controls-slider-main__dotts',
      clickable: true,

   },
   navigation: {
      nextEl: '.slider-arrow.slider-arrow_next',
      prevEl: '.slider-arrow.slider-arrow_prev',
   },
   // on: {
   //    lazyImageReady: function () {
   //       ibg();
   //    },
   // },
   // breakpoints: {
   //    975: {
   //       spaceBetween: 100,
   //    },
   //    768: {
   //       spaceBetween: 30,
   //       slidesPerView: 3,
   //    },
   //    550: {
   //       slidesPerView: 2,
   //    },
   //    320: {
   //       slidesPerView: 1,
   //    }
   // },

});


//?Прослушки=================================

window.onload = function () {
   document.addEventListener("click", documentActions);

   function documentActions(e) {
      const targetElement = e.target;
      if (window.innerWidth > 768 && (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
         if (targetElement.classList.contains('menu__arrow')) {
            targetElement.closest('.menu__item').classList.toggle('_hover');
         }
      }
      if (!targetElement.closest('.menu__item') && document.querySelectorAll('.menu__item._hover').length > 0) {
         var menuItemHover = document.querySelectorAll('.menu__item._hover');
         menuItemHover.forEach(element => {
            element.classList.remove('_hover');
         })
      }

      if (targetElement.classList.contains('search-form__icon')) {
         document.querySelector('.search-form').classList.toggle('_active');
      }
      else if (!targetElement.closest('.search-form') && document.querySelector('.search-form._active')) {
         document.querySelector('.search-form').classList.remove('_active');
      }

      if (targetElement.classList.contains('products__more')) {
         getProducts(targetElement);
         e.preventDefault();
      }
      if (targetElement.classList.contains('actions-product__button')) {
         const productId = targetElement.closest('.item-product').dataset.pid;
         addToCart(targetElement, productId);
         e.preventDefault();
      }

      if (targetElement.classList.contains('cart-header__icon') || targetElement.closest('.cart-header__icon')) {
         if (document.querySelector('.cart-list').children.length > 0) {
            document.querySelector('.cart-header').classList.toggle('_active');
         }
         e.preventDefault();
      } else if (!targetElement.closest('.cart-header') && !targetElement.classList.contains('actions-product__button')) {
         document.querySelector('.cart-header').classList.remove('_active');
      }

      if (targetElement.classList.contains('cart-list__delete')) {
         const productId = targetElement.closest('.cart-list__item').dataset.cartPid;
         updateCart(targetElement, productId, false);
         e.preventDefault();
      }

      //==============Для бургера===========
      const menuBurger = document.querySelector('.icon-menu');
      const menuBurgerBody = document.querySelector('.menu__body');
      const body = document.querySelector('body');
      if (e.target.closest('.icon-menu')) {
         menuBurger.classList.toggle('_active');
         body.classList.toggle('_lock');
         menuBurgerBody.classList.toggle('_active');
      }
      //==============Для свайпера=============

      // if (e.target.closest('.slider-arrow.slider-arrow_prev')) {
      //    main_slider.slidePrev();
      // }

      // if (e.target.closest('.slider-arrow.slider-arrow_next')) {
      //    main_slider.slideNext();
      // }
   }
}


document.addEventListener("click", function (e) {
   /*==============Для бургера===========
       if (e.target.closest('.icon-menu')) {
         menuBurger.classList.toggle('_active');
         menuBody.classList.toggle('_active');
         body.classList.toggle('_lock');
      }
   */
   /*==============Для свайпера=============
      if (e.target.closest('.control-main-slider__arrow_prev')) {
         main_slider.slidePrev();
      }
      if (e.target.closest('.control-main-slider__arrow_next')) {
         main_slider.slideNext();
      }
   */
});

//?Проверка формы ============================

const subscribeForm = document.forms.subscribe;
const subscribeFormInput = subscribeForm.nameInput;
const subscribeFormInputPlaceholder = subscribeFormInput.placeholder;
const subscribeButton = subscribeForm.nameButton

subscribeForm.addEventListener("submit", function (event) {
   if (emailTest(subscribeFormInput)) {
      if (!subscribeButton.nextElementSibling) {
         subscribeButton.parentElement.insertAdjacentHTML(
            "beforeend",
            `<div class="form__error">
            Ошибка
         </div>`
         );
      }
      event.preventDefault();
   }
});

subscribeFormInput.addEventListener("focus", function (e) {
   subscribeFormInput.placeholder = "";
   if (subscribeButton.nextElementSibling) {
      subscribeButton.nextElementSibling.remove();
   }
});

subscribeFormInput.addEventListener("blur", function (e) {
   subscribeFormInput.placeholder = subscribeFormInputPlaceholder;
});

function emailTest(input) {
   return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}


//Header
const headerElement = document.querySelector('.header');

function callback(entries, observer) {
   if (entries[0].isIntersecting) {
      headerElement.classList.remove('_scroll');
   }
   else {
      headerElement.classList.add('_scroll');
   }
}

const headerObserver = new IntersectionObserver(callback);
headerObserver.observe(headerElement);

//More Products============================================
async function getProducts(button) {
   if (!button.classList.contains('_hold')) {
      button.classList.add('_hold');
      const file = "json/products.json";
      let response = await fetch(file, {
         method: "GET"
      });
      if (response.ok) {
         let result = await response.json();
         loadProducts(result);
         button.classList.remove('_hold');
         button.remove();
      }
      else {
         alert("Ошибка!");
      }
   }
}

function loadProducts(data) {
   const productsItems = document.querySelector('.products__items');
   data.products.forEach(item => {
      const productId = item.id;
      const productUrl = item.url;
      const productImage = item.image;
      const productTitle = item.title;
      const productText = item.text;
      const productPrice = item.price;
      const productOldPrice = item.priceOld;
      const productShareUrl = item.shareUrl;
      const productLikeUrl = item.likeUrl;
      const productLabels = item.labels;


      let productTemplateStart = `<article data-pid="${productId}" class="products__item item-product">`;
      let productTemplateEnd = `</article >`;

      let productTemplateLabels = ``;
      if (productLabels) {
         let productTemplateLabelsStart = `<div div class="item-product__labels" >`;
         let productTemplateLabelsEnd = `</div>`;
         let productTemplateLabelsContent = ``;

         productLabels.forEach(labelItem => {
            productTemplateLabelsContent += `<div class="item-product__label item-product__label_${labelItem.type}">${labelItem.value}</div>`;
         });

         productTemplateLabels += productTemplateLabelsStart;
         productTemplateLabels += productTemplateLabelsContent;
         productTemplateLabels += productTemplateLabelsEnd;
      }

      let productTemplateImage = `
      <a href="${productUrl}" class="item-product__image _ibg">
            <img src="../img/products/${productImage}" alt="${productTitle}">
      </a>
      `;

      let productTemplateBodyStart = `<div class="item-product__body">`;
      let productTemplateBodyEnd = `</div>`;

      let productTemplateContent = `
      <div class="item-product__content">
         <h3 class="item-product__title">${productTitle}</h3>
         <div class="item-product__text">${productText}</div>
      </div>
      `;

      let productTemplatePrices = ``;
      let productTemplatePricesStart = `<div class="item-product__prices" >`;
      let productTemplatePricesCurrent = `<div class="item-product__price">${productPrice}</div>`;
      let productTemplatePricesOld = `<div class="item-product__price item-product__price_old">${productOldPrice}</div>`;
      let productTemplatePricesEnd = `</div>`;

      productTemplatePrices = productTemplatePricesStart;
      productTemplatePrices += productTemplatePricesCurrent;
      if (productOldPrice) {
         productTemplatePrices += productTemplatePricesOld;
      }
      productTemplatePrices += productTemplatePricesEnd;

      let productTemplateActions = `
      <div class="item-product__actions actions-product">
         <div class="actions-product__body">
            <a href="" class="actions-product__button btn btn_white">Add to cart</a>
            <a href="${productShareUrl}" class="actions-product__link _icon-share">Share</a>
            <a href="${productLikeUrl}" class="actions-product__link _icon-favorite">Like</a>
         </div>
      </div>
      `;

      let productTemplateBody = ``;
      productTemplateBody += productTemplateBodyStart;
      productTemplateBody += productTemplateContent;
      productTemplateBody += productTemplatePrices;
      productTemplateBody += productTemplateActions;
      productTemplateBody += productTemplateEnd;

      let productTemplate = ``;
      productTemplate += productTemplateStart;
      productTemplate += productTemplateLabels;
      productTemplate += productTemplateImage;
      productTemplate += productTemplateBody;
      productTemplate += productTemplateEnd;

      productsItems.insertAdjacentHTML(`beforeend`, productTemplate);
   });
}

//AddToCart===============
function addToCart(productButton, productId) {
   if (!productButton.classList.contains('_hold')) {
      productButton.classList.add('_hold');
      productButton.classList.add('_fly');

      const cart = document.querySelector('.cart-header__icon');
      const product = document.querySelector(`[data-pid="${productId}"]`);
      const productImage = product.querySelector('.item-product__image');

      const productImageFly = productImage.cloneNode(true);

      const productImageFlyWidth = productImage.offsetWidth;
      const productImageFlyHeight = productImage.offsetHeight;
      const productImageFlyTop = productImage.getBoundingClientRect().top;
      const productImageFlyLeft = productImage.getBoundingClientRect().left;

      productImageFly.setAttribute('class', '_flyImage _ibg');
      productImageFly.style.cssText = `
         left: ${productImageFlyLeft}px;
         top: ${productImageFlyTop}px;
         width: ${productImageFlyWidth}px;
         height: ${productImageFlyHeight}px;
      `;
      document.body.append(productImageFly);

      const cartFlyLeft = cart.getBoundingClientRect().left;
      const cartFlyTop = cart.getBoundingClientRect().top;

      productImageFly.style.cssText = `
      left: ${cartFlyLeft}px;
      top: ${cartFlyTop}px;
      width: 0;
      height: 0;
      opacity: 0;
      `;

      productImageFly.addEventListener("transitionend", function (e) {
         if (productButton.classList.contains("_fly")) {
            productImageFly.remove();
            updateCart(productButton, productId);
            productButton.classList.remove("_fly");
         }
      });
   }

}

function updateCart(productButton, productId, productAdd = true) {
   const cart = document.querySelector(".cart-header");
   const cartIcon = cart.querySelector(".cart-header__icon");
   const cartQuantity = cartIcon.querySelector('span');
   const cartProduct = document.querySelector(`[data-cart-pid="${productId}"]`);
   const cartList = document.querySelector('.cart-list');

   if (productAdd) {
      if (cartQuantity) {
         cartQuantity.innerHTML = ++cartQuantity.innerHTML;
      }
      else {
         cartIcon.insertAdjacentHTML("beforeend", `<span>1</span>`)
      }
      if (!cartProduct) {
         const product = document.querySelector(`[data-pid="${productId}"]`);
         const cartProductImage = product.querySelector('.item-product__image').innerHTML;
         const cartProductTitle = product.querySelector('.item-product__title').innerHTML;
         const cartProductContent = `
         <a href="" class="cart-list__image _ibg">${cartProductImage}</a>
            <div class="cart-list__body">
            <a href="" class="cart-list__title">${cartProductTitle}</a>
            <div class="cart-list__quantity">Quantity: <span>1</span></div>
            <a href="" class="cart-list__delete">Delete</a>
         </div>
         `;
         cartList.insertAdjacentHTML("beforeend", `<li data-cart-pid="${productId}" class="cart-list__item">${cartProductContent}</li>`);
      } else {
         const cartProductQuantity = cartProduct.querySelector('.cart-list__quantity span');
         cartProductQuantity.innerHTML = ++cartProductQuantity.innerHTML;
      }

      productButton.classList.remove('_hold');
   } else {
      const cartProductQuantity = cartProduct.querySelector('.cart-list__quantity span');
      cartProductQuantity.innerHTML = --cartProductQuantity.innerHTML;
      if (!parseInt(cartProductQuantity.innerHTML)) {
         cartProduct.remove();
      }
      const cartQuantityValue = --cartQuantity.innerHTML;

      if (cartQuantityValue) {
         cartQuantity.innerHTML = cartQuantityValue;
      }
      else {
         cartQuantity.remove();
         cart.classList.remove('_active');
      }
   }
}

//gallery======================================================






document.addEventListener("click", function (e) {
   e.preventDefault();
   const targetElement = e.target;
   const gallery = document.querySelector('._gallery');

   if (!targetElement.closest('.gallery__image img') && gallery.classList.contains('_active') && (!targetElement.closest('.swiper-button-prev') && !targetElement.closest('.swiper-button-next'))) {
      gallery.classList.remove('_active');
      document.querySelector('body').classList.remove('_lock');
      document.querySelector('.page').lastElementChild.remove();
   }
   if (gallery.contains(targetElement) && (targetElement.tagName == "IMG") && !targetElement.closest('.swiper')) {
      if (window.innerWidth > 768) {
         if (!gallery.classList.contains('._active')) {
            gallery.classList.add('_active');
            document.querySelector('body').classList.add('_lock');
            galleryview(targetElement);
         }
         e.preventDefault();
      } else {
         e.preventDefault();
      }
   }


});

function galleryview(targetElement) {
   const gallery_slider = new Swiper('.gallery__body', {
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      speed: 880,
      loop: false,
      watchOverflow: true,
      navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
      },
      // on: {
      //    lazyImageReady: function () {
      //       ibg();
      //    },
      // },

   });
   const gallery = document.querySelector('._gallery');

   const galleryObjects = gallery.querySelectorAll("img");
   let firstObjectId;
   for (var i = 0; i < galleryObjects.length; i++) {
      if (galleryObjects[i] == targetElement) firstObjectId = i;
   }
   let gallerySlider = ``;
   let gallerySliderStart = `<div class="gallery__body swiper" style="
   position: fixed;
   z-index: 100;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background-color: rgba(0,0,0,0.8);">
   <div class="swiper-wrapper">`;
   let gallerySliderContent = ``;
   let gallerySliderEnd = `</div>
   <div class="swiper-button-prev" style="color: gray !important;"></div>
   <div class="swiper-button-next" style="color: gray !important;"></div>
</div>`;
   galleryObjects.forEach(item => {
      gallerySliderContent += `<div class="gallery__item swiper-slide">
      <div class="gallery__image" style="height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;">${item.parentElement.innerHTML}</div>
   </div>`;
   });
   gallerySlider += gallerySliderStart;
   gallerySlider += gallerySliderContent;
   gallerySlider += gallerySliderEnd;


   document.querySelector('.page').insertAdjacentHTML("beforeend", gallerySlider);
   gallery_slider.init();
   gallery_slider.slideTo(firstObjectId);

}

//function gallery=======================================================

const furniture = document.querySelector('.furniture__body');
if (furniture && !isMobile.any()) {
   const furnitureItems = document.querySelector('.furniture__items');
   const furnitureColumn = document.querySelectorAll('.furniture__column');


   const speed = furniture.dataset.speed;
   let positionX = 0;
   let coordXprocent = 0;

   function setMouseGalleryStyle() {
      let furnitureitemsWidth = 0;
      furnitureColumn.forEach(element => {
         furnitureitemsWidth += element.offsetWidth;
      });

      const furnitureDifferent = furnitureitemsWidth - furniture.offsetWidth;
      const distX = Math.floor(coordXprocent - positionX);
      positionX = positionX + (distX * speed);
      let position = furnitureDifferent / 200 * positionX;

      furnitureItems.style.cssText = `transform: translate3d(${-position}px,0,0); `;

      if (Math.abs(distX) > 0) {
         requestAnimationFrame(setMouseGalleryStyle);
      } else {
         furniture.classList.remove('_init');
      }
   }
   furniture.addEventListener("mousemove", function (e) {
      const furnitureWidth = furniture.offsetWidth;

      const coordX = e.pageX - furnitureWidth / 2;

      coordXprocent = coordX / furnitureWidth * 200;

      if (!furniture.classList.contains("_init")) {
         requestAnimationFrame(setMouseGalleryStyle);
         furniture.classList.add("_init");
      }
   });

}