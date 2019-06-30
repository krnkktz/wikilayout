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
    l = srcset.split(',');
    for (var i = 0; i < l.length; i++) {
        var e1 = l[i].trim();
        if (e1.endsWith('2x')) {
            return e1.split(' ')[0];
        }
    }
    return src;
}


document.querySelectorAll('.tleft .thumbimage, .tright .thumbimage').forEach(el => {
    var ti = el.parentElement.parentElement;
    el.style['min-width'] = el.width + 'px';
    el.style['max-width'] = el.width * 2 + 'px';
    ti.style['min-width'] = el.width + 'px';
    ti.style['max-width'] = el.width * 2 + 'px';
    ti.style['width'] = '';
    el.src = get2x(el.src, el.srcset);
});

document.querySelectorAll('.tnone .thumbimage').forEach(el => {
    var ti = el.parentElement.parentElement;
    el.style['max-width'] = el.width * 2 + 'px';
    ti.style['max-width'] = el.width * 2 + 'px';
    ti.style['width'] = '';
    el.src = get2x(el.src, el.srcset);
});

console.log('wikilayout: ' + window.performance.now() + ' src replaced');

