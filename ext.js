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



/* using directly the x2 images sizes
 * if i'm not mistaken, this takes ~4x more internet, so don't do that on
 * mobile data? though we're not there yet... ideally, just don't do that if
 * 80vw is <= image width */
document.querySelectorAll('.tnone .thumbinner').forEach(el => { el.style['max-width'] = el.style['width']; el.style['width'] = ''; });


document.querySelectorAll('.tleft .thumbimage, .tright .thumbimage').forEach(el => {
    var ti = el.parentElement.parentElement;
    el.style['min-width'] = el.width + 'px';
    el.style['max-width'] = el.width * 2 + 'px';
    ti.style['min-width'] = el.style['width'];
    ti.style['max-width'] = el.width * 2 + 'px';
    ti.style['width'] = '';
    el.srcset.split(',').forEach(e => {
        var e1 = e.trim();
        if (e1.endsWith('2x')) {
            el.src = e.split(' ')[0];
        }
    });
    ;});


/* inject our own css */
var style = document.createElement("STYLE");
var text = document.createTextNode(css);
style.appendChild(text);
document.head.appendChild(style);

/* and this is where the browser should start querying other stuff,
 * interpreting css and running scripts.. */
