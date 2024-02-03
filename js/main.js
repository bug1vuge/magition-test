/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/components/cataloge-modal/cataloge-modal.js":
/*!****************************************************************!*\
  !*** ./src/blocks/components/cataloge-modal/cataloge-modal.js ***!
  \****************************************************************/
/***/ (function() {

var initCatalogeModal = function initCatalogeModal() {
  try {
    var triggers = document.querySelectorAll('.cataloge-modal__type-link');
    var contentItems = document.querySelectorAll('.cataloge-modal__content-item');
    var openCatalogeButton = document.querySelector('.header__cataloge-button');
    var catalogeModal = document.querySelector('.cataloge-modal');
    var catalogeModalContent = document.querySelector('.cataloge-modal__products');
    var catalogeTypes = document.querySelector('.cataloge-modal__aside');
    var catalogeContent = document.querySelector('.cataloge-modal__content');
    var catalogeModalReturnButton = document.querySelectorAll('.cataloge-modal__return-button');
    var body = document.querySelector('body');
    var header = document.querySelector('header');
    var setInitialType = function setInitialType(obj) {
      obj.items.forEach(function (item, index) {
        index === 0 ? item.classList.add(obj.className) : '';
      });
    };
    var clearTypeData = function clearTypeData(obj) {
      obj.items.forEach(function (item) {
        item.classList.remove(obj.className);
      });
    };
    var toggleCatalogeModal = function toggleCatalogeModal() {
      var paddingOffset = "".concat(window.innerWidth - document.body.offsetWidth, "px");
      setTimeout(function () {
        catalogeModal.classList.add('-js-visible');
        body.style.overflow = 'hidden';
        body.style.paddingRight = paddingOffset;
        header.classList.contains('-js-fixed') ? header.style.paddingRight = paddingOffset : '';
      }, 100);
      setInitialType({
        items: triggers,
        className: '-js-hovered'
      });
      setInitialType({
        items: contentItems,
        className: '-js-visible'
      });
    };
    var closeCatalogeModal = function closeCatalogeModal() {
      catalogeModal.classList.remove('-js-visible');
      setTimeout(function () {
        body.style.overflow = 'visible';
        body.style.paddingRight = 0;
        header.classList.contains('-js-fixed') ? header.style.paddingRight = 0 : '';
      }, 100);
      clearTypeData({
        items: triggers,
        className: '-js-hovered'
      });
      clearTypeData({
        items: contentItems,
        className: '-js-visible'
      });
    };
    var showCatalogeContent = function showCatalogeContent() {
      catalogeContent.classList.add('-js-visible');
      catalogeTypes.classList.add('-js-hide');
    };
    var hideCatalogeContent = function hideCatalogeContent() {
      catalogeContent.classList.remove('-js-visible');
      catalogeTypes.classList.remove('-js-hide');
    };
    var clearEventsListener = function clearEventsListener(type, listener) {
      triggers.forEach(function (trigger) {
        trigger.removeEventListener(type, listener);
      });
    };
    var mouseEnterListener = function mouseEnterListener(e) {
      var currentTarget = e.currentTarget;
      var triggerDataAttr = currentTarget.getAttribute('data-cataloge-trigger');
      clearTypeData({
        items: triggers,
        className: '-js-hovered'
      });
      contentItems.forEach(function (item) {
        var contentDataAttr = item.getAttribute('data-cataloge-content');
        item.classList.remove('-js-visible');
        if (triggerDataAttr === contentDataAttr) {
          item.classList.add('-js-visible');
          currentTarget.classList.add('-js-hovered');
        }
        ;
      });
    };
    var clickListener = function clickListener(e) {
      e.preventDefault();
      var currentTarget = e.currentTarget;
      var triggerDataAttr = currentTarget.getAttribute('data-cataloge-trigger');
      var triggerText = currentTarget.querySelector('.cataloge-modal__type-title').textContent;
      clearTypeData({
        items: triggers,
        className: '-js-hovered'
      });
      contentItems.forEach(function (item) {
        var catalogeModalContentTitle = item.querySelector('.cataloge-modal__content-title');
        var contentDataAttr = item.getAttribute('data-cataloge-content');
        item.classList.remove('-js-visible');
        if (triggerDataAttr === contentDataAttr) {
          item.classList.add('-js-visible');
          currentTarget.classList.add('-js-hovered');
          catalogeModalContentTitle.textContent = triggerText;
          showCatalogeContent();
        }
        ;
      });
    };
    triggers.forEach(function (trigger) {
      trigger.addEventListener('mouseenter', mouseEnterListener);
      trigger.addEventListener('click', clickListener);
    });
    window.innerWidth < 1024 ? clearEventsListener('mouseenter', mouseEnterListener) : clearEventsListener('click', clickListener);
    openCatalogeButton.addEventListener('click', toggleCatalogeModal);
    catalogeModalReturnButton.forEach(function (button) {
      button.addEventListener('click', hideCatalogeContent);
    });
    document.addEventListener('click', function (e) {
      var withinBoundaries = e.composedPath().includes(catalogeModalContent);
      if (catalogeModal.classList.contains('-js-visible')) {
        !withinBoundaries ? closeCatalogeModal() : '';
      }
      ;
    });
  } catch (error) {}
};
initCatalogeModal();

/***/ }),

/***/ "./src/blocks/components/search/search.js":
/*!************************************************!*\
  !*** ./src/blocks/components/search/search.js ***!
  \************************************************/
/***/ (function() {



/***/ }),

/***/ "./src/blocks/components/select/select.js":
/*!************************************************!*\
  !*** ./src/blocks/components/select/select.js ***!
  \************************************************/
/***/ (function() {

var selectModule = function selectModule() {
  var selects = document.querySelectorAll('.select');
  var selectModule = function selectModule(e) {
    var currentTarget = e.currentTarget;
    var target = e.target;
    var currentValue = currentTarget.querySelector('.select__trigger-text');
    selects.forEach(function (select) {
      select.classList.remove('-js-select-open');
    });
    target.closest('.select__trigger') ? currentTarget.classList.toggle('-js-select-open') : '';
    if (target.classList.contains('select__content-item')) {
      currentValue.textContent = target.textContent;
      currentTarget.classList.remove('-js-select-open');
    }
    ;
  };
  selects.forEach(function (select) {
    select.addEventListener('click', selectModule);
  });
};
selectModule();

/***/ }),

/***/ "./src/blocks/modules/about-company/about-company.js":
/*!***********************************************************!*\
  !*** ./src/blocks/modules/about-company/about-company.js ***!
  \***********************************************************/
/***/ (function() {

try {
  Fancybox.bind("[data-fancybox]", {});
} catch (error) {}

/***/ }),

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/***/ (function() {



/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/***/ (function() {

var body = document.querySelector('body');
var header = document.querySelector('header');
var headerHeight = header.clientHeight;
var searchInput = document.querySelector('.search-form__input input');
var searchResults = document.querySelector('.search-products');
var mobileMenuButtons = document.querySelectorAll('.-js-show-mobile-menu');
var mobileMenu = document.querySelector('.mobile-menu__nav');
var searchPanelButton = document.querySelector('.header__search-button');
var searchPanel = document.querySelector('.header__search');
var showSearchPanel = function showSearchPanel() {
  searchPanel.classList.add('visible');
  body.style.overflow = 'hidden';
};
var hideSearchPanel = function hideSearchPanel() {
  searchResults.classList.remove('-js-visible');
  searchPanel.classList.remove('visible');
  body.style.overflow = 'visible';
};
var showSearchResults = function showSearchResults() {
  var paddingOffset = "".concat(window.innerWidth - document.body.offsetWidth, "px");
  searchResults.classList.add('-js-visible');
  body.style.overflow = 'hidden';
  body.style.paddingRight = paddingOffset;
  header.classList.contains('-js-fixed') ? header.style.paddingRight = paddingOffset : header.style.paddingRight = 0;
};
var hideSearchResults = function hideSearchResults() {
  searchResults.classList.remove('-js-visible');
  setTimeout(function () {
    body.style.overflow = 'visible';
    body.style.paddingRight = 0;
    header.style.paddingRight = 0;
  }, 200);
};
var fixHeader = function fixHeader() {
  var scrollY = window.scrollY;
  if (scrollY > 200) {
    header.classList.add('-js-fixed');
    body.style.paddingTop = "".concat(headerHeight, "px");
  } else {
    header.classList.remove('-js-fixed');
    body.style.paddingTop = 0;
  }
  ;
};
var showMobileMenu = function showMobileMenu() {
  var paddingOffset = "".concat(window.innerWidth - document.body.offsetWidth, "px");
  mobileMenu.classList.add('visible');
  body.style.overflow = 'hidden';
  body.style.paddingRight = paddingOffset;
  header.classList.contains('-js-fixed') ? header.style.paddingRight = paddingOffset : header.style.paddingRight = 0;
};
var hideMobileMenu = function hideMobileMenu() {
  mobileMenu.classList.remove('visible');
  setTimeout(function () {
    body.style.overflow = 'visible';
    body.style.paddingRight = 0;
    header.style.paddingRight = 0;
  }, 200);
};
document.addEventListener('click', function (e) {
  var target = e.target;
  target.classList.contains('cataloge-modal__overlay') ? hideSearchResults() : '';
  target.classList.contains('mobile-menu__nav') ? hideMobileMenu() : '';
  target.classList.contains('header__search') || target.closest('.header__search-close') ? hideSearchPanel() : '';
});
searchInput.addEventListener('focus', showSearchResults);
searchPanelButton.addEventListener('click', showSearchPanel);
mobileMenuButtons.forEach(function (mobileMenuButton) {
  mobileMenuButton.addEventListener('click', showMobileMenu);
});
window.addEventListener('scroll', fixHeader);

/***/ }),

/***/ "./src/blocks/modules/hero/hero.js":
/*!*****************************************!*\
  !*** ./src/blocks/modules/hero/hero.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/bundle */ "./node_modules/swiper/swiper-bundle.mjs");

var heroSlider = function heroSlider() {
  try {
    var heroSwiper = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"]('.hero-slider', {
      spaceBetween: 15,
      // Navigation arrows
      navigation: {
        nextEl: '.hero-slider__button--next',
        prevEl: '.hero-slider__button--prev'
      }
    });
    window.innerWidth <= 768 ? heroSwiper.destroy() : '';
  } catch (error) {}
};
heroSlider();

/***/ }),

/***/ "./src/blocks/modules/map/map.js":
/*!***************************************!*\
  !*** ./src/blocks/modules/map/map.js ***!
  \***************************************/
/***/ (function() {

var initAddressesMap = function initAddressesMap() {
  try {
    var init = function init() {
      var map = new ymaps.Map('addresses-map', {
        center: [52.02490257206664, 113.48333450000001],
        zoom: 18
      });
      tabs.forEach(function (tab) {
        var center = tab.getAttribute('data-placemark').split(',');
        var placemark = new ymaps.Placemark(center, {}, {
          iconLayout: 'default#image',
          iconImageHref: 'assets/template/img/icons/placemark.svg',
          iconImageSize: [88, 88],
          iconImageOffset: [-40, -90]
        });
        placemarks.push(placemark);
      });
      var changePlacemarksSizes = function changePlacemarksSizes() {
        placemarks.forEach(function (placemark) {
          placemark.options._options.iconImageSize = [50, 55];
          placemark.options._options.iconImageOffset = [-30, -50];
        });
      };
      tabs.forEach(function (tab) {
        tab.addEventListener('click', function (e) {
          var currentTarget = e.currentTarget;
          var center = tab.getAttribute('data-placemark').split(',');
          tabs.forEach(function (el) {
            el.classList.remove('-js-active');
          });
          currentTarget.classList.add('-js-active');
          map.setCenter(center);
        });
      });
      map.controls.remove('geolocationControl'); // удаляем геолокацию
      map.controls.remove('searchControl'); // удаляем поиск
      map.controls.remove('trafficControl'); // удаляем контроль трафика
      map.controls.remove('typeSelector'); // удаляем тип
      map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
      map.controls.remove('zoomControl'); // удаляем контрол зуммирования
      map.controls.remove('rulerControl'); // удаляем контрол правил
      map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

      placemarks.forEach(function (placemark) {
        map.geoObjects.add(placemark);
      });
      window.innerWidth < 1440 ? changePlacemarksSizes() : '';
    };
    var tabs = document.querySelectorAll('.map-tab');
    var placemarks = [];
    ymaps.ready(init);
  } catch (error) {}
};
initAddressesMap();

/***/ }),

/***/ "./src/blocks/modules/order/order.js":
/*!*******************************************!*\
  !*** ./src/blocks/modules/order/order.js ***!
  \*******************************************/
/***/ (function() {

var orderModule = function orderModule() {
  try {
    var radios = document.querySelectorAll('.order-tabs__radio input');
    var contentItems = document.querySelectorAll('.order-tabs__content-item');
    var privateHouseCheckbox = document.querySelector('#private-house');
    var addressFields = document.querySelectorAll('.order-tabs__fields-block');
    var paymentItems = document.querySelectorAll('.order-block__radio input');
    var showFieldsForPrivateHouse = function showFieldsForPrivateHouse() {
      addressFields[0].classList.add('-js-visible');
      addressFields[1].classList.remove('-js-visible');
    };
    var hideFieldsForPrivateHouse = function hideFieldsForPrivateHouse() {
      addressFields[0].classList.remove('-js-visible');
      addressFields[1].classList.add('-js-visible');
    };
    privateHouseCheckbox.addEventListener('change', function (e) {
      var target = e.target;
      target.checked ? showFieldsForPrivateHouse() : hideFieldsForPrivateHouse();
    });
    radios.forEach(function (radio, index) {
      radio.addEventListener('change', function (e) {
        e.stopPropagation();
        var target = e.target;
        var radioDataAttr = target.getAttribute('data-tab-radio');
        contentItems.forEach(function (item) {
          var itemDataAttr = item.getAttribute('data-tab-content');
          item.classList.remove('-js-active');
          radioDataAttr === itemDataAttr ? item.classList.add('-js-active') : '';
          radioDataAttr === 'tab-1' ? paymentItems[0].setAttribute('disabled', true) : paymentItems[0].removeAttribute('disabled');
        });
      });
    });
  } catch (error) {}
};
orderModule();

/***/ }),

/***/ "./src/blocks/modules/product-info/product-info.js":
/*!*********************************************************!*\
  !*** ./src/blocks/modules/product-info/product-info.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/bundle */ "./node_modules/swiper/swiper-bundle.mjs");

var productsInfoSliders = function productsInfoSliders() {
  try {
    var galleryTop = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"]('.product-info__main-slider', {
      spaceBetween: 15
    });
    var galleryThumbs = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"]('.product-info__thumbs-slider', {
      slidesPerView: 3,
      navigation: {
        prevEl: '.product-info__thumbs-button--prev',
        nextEl: '.product-info__thumbs-button--next'
      },
      breakpoints: {
        325: {
          spaceBetween: 15,
          direction: 'horizontal'
        },
        475: {
          direction: 'vertical',
          spaceBetween: 15
        },
        1024: {
          spaceBetween: 25,
          direction: 'vertical'
        }
      }
    });
    galleryTop.controller.control = galleryThumbs;
    galleryThumbs.controller.control = galleryTop;
  } catch (error) {}
};
var tabsModule = function tabsModule(obj) {
  try {
    var buttons = document.querySelectorAll(obj.button);
    var content = document.querySelectorAll(obj.item);
    buttons.forEach(function (el) {
      el.addEventListener('click', function (e) {
        var buttonDataAttribute = el.getAttribute('data-tab-button');
        buttons.forEach(function (el) {
          el.classList.remove('-js-active');
        });
        el.classList.add('-js-active');
        content.forEach(function (el) {
          var contentDataAttribute = el.getAttribute('data-tab-content');
          el.classList.remove('-js-active');
          if (buttonDataAttribute == contentDataAttribute) {
            el.classList.add('-js-active');
          }
          ;
        });
      });
    });
  } catch (error) {}
};
tabsModule({
  button: '.product-info__tabs-button',
  item: '.product-info__tabs-item'
});
productsInfoSliders();

/***/ }),

/***/ "./src/blocks/modules/products-slider/products-slider.js":
/*!***************************************************************!*\
  !*** ./src/blocks/modules/products-slider/products-slider.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/bundle */ "./node_modules/swiper/swiper-bundle.mjs");

var initProductsSlider = function initProductsSlider(obj) {
  var swiper = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"]("".concat(obj.slider, " .swiper"), {
    navigation: {
      nextEl: obj.nextEl,
      prevEl: obj.prevEl
    },
    breakpoints: {
      325: {
        spaceBetween: 10,
        slidesPerView: 2,
        grid: {
          rows: 2,
          fill: 'row'
        }
      },
      768: {
        spaceBetween: 15,
        slidesPerView: 3,
        grid: {
          rows: 1,
          fill: 'row'
        }
      },
      1200: {
        spaceBetween: 15,
        slidesPerView: 4,
        grid: {
          rows: 1,
          fill: 'row'
        }
      },
      1440: {
        spaceBetween: 20,
        slidesPerView: 4,
        grid: {
          rows: 1,
          fill: 'row'
        }
      }
    }
  });
};
var swiper = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"](".hero-hits .swiper", {
  spaceBetween: 10,
  slidesPerView: 2,
  navigation: {
    nextEl: '.hero-hits .products-slider__arrow--next',
    prevEl: '.hero-hits .products-slider__arrow--prev'
  }
});
initProductsSlider({
  slider: '.hits-slider',
  nextEl: '.hits-slider .products-slider__arrow--next',
  prevEl: '.hits-slider .products-slider__arrow--prev'
});
initProductsSlider({
  slider: '.novelty-slider',
  nextEl: '.novelty-slider .products-slider__arrow--next',
  prevEl: '.novelty-slider .products-slider__arrow--prev'
});
initProductsSlider({
  slider: '.extra-slider',
  nextEl: '.extra-slider .products-slider__arrow--next',
  prevEl: '.extra-slider .products-slider__arrow--prev'
});

/***/ }),

/***/ "./src/js/import/components.js":
/*!*************************************!*\
  !*** ./src/js/import/components.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_cataloge_modal_cataloge_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %components%/cataloge-modal/cataloge-modal */ "./src/blocks/components/cataloge-modal/cataloge-modal.js");
/* harmony import */ var _components_cataloge_modal_cataloge_modal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_cataloge_modal_cataloge_modal__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_select_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %components%/select/select */ "./src/blocks/components/select/select.js");
/* harmony import */ var _components_select_select__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_select_select__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_search_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %components%/search/search */ "./src/blocks/components/search/search.js");
/* harmony import */ var _components_search_search__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_search_search__WEBPACK_IMPORTED_MODULE_2__);




/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_hero_hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/hero/hero */ "./src/blocks/modules/hero/hero.js");
/* harmony import */ var _modules_map_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/map/map */ "./src/blocks/modules/map/map.js");
/* harmony import */ var _modules_map_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_map_map__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_product_info_product_info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/product-info/product-info */ "./src/blocks/modules/product-info/product-info.js");
/* harmony import */ var _modules_about_company_about_company__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! %modules%/about-company/about-company */ "./src/blocks/modules/about-company/about-company.js");
/* harmony import */ var _modules_about_company_about_company__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_modules_about_company_about_company__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _modules_order_order__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! %modules%/order/order */ "./src/blocks/modules/order/order.js");
/* harmony import */ var _modules_order_order__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_modules_order_order__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _modules_products_slider_products_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! %modules%/products-slider/products-slider */ "./src/blocks/modules/products-slider/products-slider.js");







// import "%modules%/modal/modal";



/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/components */ "./src/js/import/components.js");



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], function() { return __webpack_require__("./src/js/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map