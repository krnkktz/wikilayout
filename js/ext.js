/* remove internal css */
document.querySelectorAll('style').forEach(el => el.parentNode.removeChild(el));

/* remove linked stylesheets */
document.querySelectorAll('link[rel="stylesheet"]').forEach(el => el.parentNode.removeChild(el));

/* remove inline css for font-size */
document.querySelectorAll('[style]').forEach(el => {
    if (el.style['font-size']) {
        el.style['font-size'] = '';
    }
});


console.log('wikilayout: ' + window.performance.now() + ' css removed');

/* using directly the x2 images sizes
 * if i'm not mistaken, this takes ~4x more internet, so don't do that on
 * mobile data? though we're not there yet... ideally, just don't do that if
 * 80vw is <= image width */

function get2x(src, srcset) {
    if (srcset) {
        l = srcset.split(',');
        for (var i = 0; i < l.length; i++) {
            var e1 = l[i].trim();
            if (e1.endsWith('2x')) {
                return e1.split(' ')[0];
            }
        }
    }
    return src;
}

browser.runtime.sendMessage('unblock');


document.querySelectorAll(':not(.tmulti) .tnone .thumbinner, :not(.tmulti) .tleft .thumbinner, :not(.tmulti) .tright .thumbinner').forEach(el => {
    if (el.firstChild && el.firstChild.firstChild && el.firstChild.firstChild.style) {
        var tc = el.firstChild.firstChild;
        var s = tc.src.split('/');
        if (s.length > 0) {
            var w = parseInt(s[s.length - 1].split('px')[0]);
            tc.style['max-width'] = w * 2 + 'px';
            el.style['max-width'] = w * 2 + 'px';
            el.style['width'] = '';
            tc.src = get2x(tc.src, tc.srcset);
        }
    } else {
        console.log('unknown .thumbinner: ');
        console.log(el);
    }
});


document.querySelectorAll('img:not(.thumbimage)').forEach(el => {
    el.src = el.src;
});

console.log('wikilayout: ' + window.performance.now() + ' src replaced');

