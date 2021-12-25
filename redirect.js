const url = window.location.href;
const re = /([0-9]{4}\/[0-9]{2}\/[0-9]{2})\/(.*)\/$/;
const newstr = url.replace(re, 'blog/items/$2/');
window.location.href = newstr;