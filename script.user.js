// ==UserScript==
// @name         FixYoutube
// @namespace    https://sowa705.tk/
// @version      0.1
// @description  Fixes youtube layout
// @author       sowa705
// @match        https://www.youtube.com/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function set(){
        document.getElementById("primary").style.margin="0 8%"; //proper margins on main video grid
        document.getElementsByTagName("ytd-rich-grid-renderer")[0].style="--ytd-rich-grid-items-per-row: "+localStorage.xd+";";
    }

    window.setInterval(set, 1000);
})();
