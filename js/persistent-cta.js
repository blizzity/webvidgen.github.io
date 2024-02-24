"use strict";window.addEventListener("DOMContentLoaded",function persistentDownload(){var isVisible=function isVisible(elem){return elem.offsetParent!==null};var persistentCta=document.querySelector("#persistent-cta");var headerCtas=document.querySelectorAll(".hero .btn, .hero .leoButton, .hero .download");var visibleHeaderCtas=Array.from(headerCtas).filter(isVisible);if(!window.IntersectionObserver){/**
     * If IntersectionObserver doesn't exist (like in IE), simply show the CTA.
     * Note: .remove in IE doesn't accept multiple params, so we can't use
     * hidePersistentCTA if in IE.
     */persistentCta.classList.remove("opacity-0");persistentCta.classList.remove("translate-y-20");return}var options={root:null,rootMargin:"0px",threshold:1};if(visibleHeaderCtas){var observer=new IntersectionObserver(function(entries){entries.forEach(function(entry){if(entry.isIntersecting){hidePersistentCTA()}else{showPersistentCTA()}})},options);visibleHeaderCtas.forEach(function(headerCta){observer.observe(headerCta)})}else{showPersistentCTA()}function showPersistentCTA(){persistentCta.classList.remove("opacity-0","translate-y-20")}function hidePersistentCTA(){persistentCta.classList.add("opacity-0","translate-y-20")}});
