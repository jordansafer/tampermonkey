// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    //var elems = document.body.getElementsByTagName("*");

    //for(const elem of elems) {
    //    if(elem.innerText != "" && elem.tagName.toLowerCase != "script") {
    //        elem.innerText = elem.innerText.replace(/more/g, "less");
    //    }
    //}

    document.body.innerHTML = document.body.innerHTML.replace(/ cat /g, " dog ");
    document.body.innerHTML = document.body.innerHTML.replace(/ cats /g, " dogs ");
    document.body.innerHTML = document.body.innerHTML.replace(/Cat/g, "Dog");
    document.body.innerHTML = document.body.innerHTML.replace(/ CAT /g, " DOG ");
    document.body.innerHTML = document.body.innerHTML.replace(/ cat\./g, " dog.");
})();