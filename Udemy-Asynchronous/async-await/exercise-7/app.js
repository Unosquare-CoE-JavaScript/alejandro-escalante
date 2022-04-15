var MAINAPP = (function(nsp) {
    "use strict";

    let url = 'https://jsonplaceholder.typicode.com/';

    (async function() {
        try {
            let data = await fetch(url + 'posts/').then(data => data.json());
            nsp.posts = data;
        } catch(e) {
            console.log(`Error: ${e}`);
        }
    })();
    return nsp;
})(MAINAPP || {});


