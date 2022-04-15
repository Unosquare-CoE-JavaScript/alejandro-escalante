var MAINAPP = (function(nsp) {
    "use strict";

    let url = 'https://jsonplaceholder.typicode.com/';

    (async function() {
        try {
            const posts = fetch(url + 'posts/').then(data => data.json());
            const comments = fetch(url + 'comments/').then(data => data.json());
            const todos = fetch(url + 'todos/').then(data => data.json());
            
            const allData = await Promise.all([posts, comments, todos]);
           
            nsp.posts = allData[0];
            nsp.comments = allData[1];
            nsp.todos = allData[2];
            console.log("Data received");
       
        } catch (error) {
            console.log(error);
        }
    })();

    return nsp;
    
})(MAINAPP || {});

console.log('Another code...');
