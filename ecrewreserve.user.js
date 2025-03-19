// ==UserScript==
// @name        eCrew Reserve Highligher
// @version     1.2
// @grant       none
// @require     https://code.jquery.com/jquery-3.6.3.min.js
// @include     https://ecrew.horizonair.com/docs/creditsort/*
// @downloadURL https://github.com/scottsturges/userscripts/raw/main/ecrewreserve.user.js
// ==/UserScript==

// https://ecrew.horizonair.com/docs/creditsort/

var waitForJQuery = setInterval(function () {
    if (typeof $ != 'undefined') {
        $("table tr td:contains('Horizon')").next().html('<a href="https://ecrew.horizonair.com/docs/creditsort/SEA_FD_STBRP.htm">SEA</a> <a href="https://ecrew.horizonair.com/docs/creditsort/ANC_FD_STBRP.htm">ANC</a> <a href="https://ecrew.horizonair.com/docs/creditsort/PDX_FD_STBRP.htm">PDX</a> <a href="https://ecrew.horizonair.com/docs/creditsort/PAE_FD_STBRP.htm">PAE</a> <a href="https://ecrew.horizonair.com/docs/creditsort/GEG_FD_STBRP.htm">GEG</a> <a href="https://ecrew.horizonair.com/docs/creditsort/BOI_FD_STBRP.htm">BOI</a> <a href="https://ecrew.horizonair.com/docs/creditsort/MFR_FD_STBRP.htm">MFR</a>');
        $("table tr td:contains(\"CA-\")").css("background-color","#b5ffb0");
        $("table tr td:contains(\"STURGES\")").parent().children().css("background-color","#ffda99").css("font-weight","bold");
        $("table tr td:contains(\"YES\")").css("background-color","#fffea6");
        $("table tr td:contains(\"AIRPORT\")").css("background-color","#ff7171");

        clearInterval(waitForJQuery);
    }
}, 10);