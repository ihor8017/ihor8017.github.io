import playVideo from"./video.js";import{showPlan}from"./show-plans.js";import swiper from"./slider.js";import swiperReviews from"./slider.js";import{initTabs}from"./vendor/init-tabs.js";import{initAccordions}from"./vendor/init-accordion.js";import formValidate from"./validate.js";playVideo(),showPlan(),formValidate(),window.addEventListener("DOMContentLoaded",(()=>{window.addEventListener("load",(()=>{initTabs()}))})),window.addEventListener("DOMContentLoaded",(()=>{window.addEventListener("load",(()=>{initAccordions()}))})),document.addEventListener("click",(o=>{const i=o.target;i.closest('[data-accordion="button"]')&&i.blur()}));