"use strict";
function getArrayN(arr) {
    document.write(`<ul>`);
    for (const item of arr) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);
}
;
getArrayN([1, 2, true, 1565, 'asd', false]);
