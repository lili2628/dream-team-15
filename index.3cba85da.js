!function(){var e,o,t,n,c;$(document).ready((function(){$(".slider").slick({arrows:!1,dots:!0,speed:1e3,easing:"linear",autoplaySpeed:3e3,pauseOnFocus:!0,pauseOnHover:!0,pauseOnDotsHover:!0})})),"function"!=typeof(e=window.Element.prototype).matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var o=this,t=(o.document||o.ownerDocument).querySelectorAll(e),n=0;t[n]&&t[n]!==o;)++n;return Boolean(t[n])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var o=this;o&&1===o.nodeType;){if(o.matches(e))return o;o=o.parentNode}return null}),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".js-open-modal"),o=document.querySelector(".js-overlay-modal"),t=document.querySelectorAll(".js-modal-close");e.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault();var t=this.getAttribute("data-modal");document.querySelector('.modal[data-modal="'+t+'"]').classList.add("active"),o.classList.add("active")}))})),t.forEach((function(e){e.addEventListener("click",(function(e){this.closest(".modal").classList.remove("active"),o.classList.remove("active")}))})),document.body.addEventListener("keyup",(function(e){27==e.keyCode&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".overlay").classList.remove("active"))}),!1),o.addEventListener("click",(function(){document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active")}))})),o=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu"),c=function(){var e="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!e),o.classList.toggle("is-open"),bodyScrollLock[e?"enableBodyScroll":"disableBodyScroll"](document.body)},t.addEventListener("click",c),n.addEventListener("click",c),window.matchMedia("(min-width: 768px)").addEventListener("change",(function(e){e.matches&&(o.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})),function(){var e={openModalBtn:document.querySelector("[buy-modal-open]"),closeModalBtn:document.querySelector("[buy-modal-close]"),modal:document.querySelector("[buy-modal]")};function o(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)}(),function(){var e={openModalBtn:document.querySelector("[ingredients1-modal-open]"),closeModalBtn:document.querySelector("[ingredients1-modal-close]"),modal:document.querySelector("[ingredients1-modal]")};function o(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)}(),function(){var e={openModalBtn:document.querySelector("[ingredients2-modal-open]"),closeModalBtn:document.querySelector("[ingredients2-modal-close]"),modal:document.querySelector("[ingredients2-modal]")};function o(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)}(),function(){var e={openModalBtn:document.querySelector("[ingredients3-modal-open]"),closeModalBtn:document.querySelector("[ingredients3-modal-close]"),modal:document.querySelector("[ingredients3-modal]")};function o(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)}(),function(){var e={openModalBtn:document.querySelector("[made-modal-open]"),closeModalBtn:document.querySelector("[made-modal-close]"),modal:document.querySelector("[made-modal]")};function o(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)}()}();
//# sourceMappingURL=index.3cba85da.js.map
