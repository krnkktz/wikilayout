/* remove all inline css, breaks a lot of stuff.. */
/*document.querySelectorAll('[style]').forEach(el => el.removeAttribute('style')); */

/* remove inline css for font-size */
document.querySelectorAll('[style]').forEach(el => {
    if (el.style['font-size']) {
        el.style['font-size'] = '';
    }
});

/* remove linked stylesheets */
document.querySelectorAll('link[rel="stylesheet"]').forEach(el => el.parentNode.removeChild(el));

/* remove internal css */
document.querySelectorAll('style').forEach(el => el.parentNode.removeChild(el));

/* inject our own css */
var style = document.createElement("STYLE");
var text = document.createTextNode(css);
style.appendChild(text);
document.head.appendChild(style);


/* using directly the x2 images sizes
 * if i'm not mistaken, this takes ~4x more internet, so don't do that on
 * mobile. */
document.querySelectorAll('.thumbinner').forEach(el => { el.style['min-width'] = el.style['width']; el.style['width'] = '20vw'; });

document.querySelectorAll('.thumbimage').forEach(el => {
    max_factor = 2; // is it sometimes different?
    el.style['min-width'] = el.width + 'px';
    el.style['max-width'] = el.width * max_factor + 'px';
    el.style['width'] = '20vw';
    el.style['height'] = 'auto';
    el.src = el.srcset.split(',')[1].split(' ')[1];
    el.width = undefined, el.height = undefined;});
