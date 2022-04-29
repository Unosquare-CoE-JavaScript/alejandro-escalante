var MAINAPP = (function(nsp) {
    "use strict";

    let url = 'https://jsonplaceholder.typicode.com/';

    let posts = fetch(url + 'posts/')
        .then(response1 => response1.json());

    let comments = fetch(url + 'comments/')
        .then(response2 => response2.json());

    let todos = fetch(url + 'todos/')
        .then(response3 => response3.json());

    Promise.all([posts, comments, todos]).then( msg => {
        nsp.posts = msg[0];
        nsp.comments = msg[1];
        nsp.todos = msg[2];
        console.log("Data received");
    }).catch(err => { console.log(`Error ${err}`); });
    return nsp;
})(MAINAPP || {});
