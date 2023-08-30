function loadPosts(){

    fetch ( 'https://jsonplaceholder.typicode.com/posts ')
.then(res => res.json())
.then ( data =>displayPosts( data))

}
/**
 * get the container element where you want to add the new element 
 * create child element 
 * appendchid
 * 
 * 
 * 
 */

function displayPosts( posts ){
    const postContainer = document.getElementById('posts-container')
for ( const post of posts){

const postDiv = document.createElement('div')
postDiv.classList.add('post')
postDiv.innerHTML = `    
<h4>User-${post.userId}</h4>
<h5> post : ${post.title}</h5>
<p>post description :${post.body}</p>


`;
postContainer.appendChild( postDiv);

    
}


}


loadPosts();