/*
 * (c) Copyright Muhammad As Sundawy (Aku Manusia Biasa) Official
 * https://github.com/aj3546800/
 */
 
 (function() {
    'use strict';
    const threshold = 160;
    const nondevtools = ({ DTevents = true } = {}) => {
        const widthThreshold = window.outerWidth - window.innerWidth > threshold;
        const heightThreshold = window.outerHeight - window.innerHeight > threshold;
        if (!(heightThreshold && widthThreshold) &&
            ((window.Firebug && window.Firebug.chrome && window.Firebug.chrome.isInitialized) || widthThreshold || heightThreshold)
        ) {
            setInterval(function() {
                document.head.remove();
                document.body.remove();
                console.clear();
            });
        }
    };
    nondevtools({ DTevents: false });
    setInterval(nondevtools, 500);
})();

// jika pengguna mencoba membuka devtool, hancurkan dokumen
document.onkeydown = function(e) {
    if (event.keyCode == 123 || e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0) || e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0) || e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0) || e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        document.head.remove();
        document.body.remove();
        console.clear();
        return false;
    }
}
