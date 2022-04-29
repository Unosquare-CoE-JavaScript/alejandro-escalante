"use strict";

var userPosts;

async function getPosts(userId){
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts').then(data => data.json());
    return posts.filter(post => { return post.userId === userId });
}

getPosts(2).then((data) => { userPosts = data });