    
let postsData = [
    { id: 1, author: 'John', content: 'Hello, Instagram!', likes: 10, comments: ['Great post!', 'Nice photo!'], image: 'https://files.codingninjas.in/image2-28694.jpg' },
    { id: 2, author: 'Jane', content: 'This is a great post!', likes: 15, comments: [], image: 'https://files.codingninjas.in/oip-28704.jpg' },
    { id: 3, author: 'Alice', content: 'Another post', likes: 8, comments: [], image: 'https://files.codingninjas.in/th-2-28706.jpg' },
    { id: 4, author: 'Bob', content: 'Check out this photo!', likes: 20, comments: [], image: 'https://files.codingninjas.in/image1-28708.jpg' },
  ];

  const likedPosts = new Set();
  function renderEle(){
    const postContainer = document.getElementById(`posts`);
 
    postContainer.innerHTML='';
    postsData.forEach((post)=>{
        const postEle = document.createElement('div');
        postEle.className='post';
        
        const author = document.createElement('h3');
        author.textContent=post.author;
       
        const img = document.createElement(`img`);
        img.src=post.image;
        img.alt="postImg";

        const desc = document.createElement(`p`);
        desc.textContent=post.content;

        const likeButton= document.createElement(`button`);
        likeButton.className='like-btn';
        likeButton.innerHTML=`Like`;
        likeButton.addEventListener(`click`,()=>{
          if (!likedPosts.has(post.id)) {
            likePost(post.id);
            likedPosts.add(post.id);
            likeButton.disabled = true;  
            for(let ind of likedPosts){
                const button = document.querySelectorAll('.like-btn')[ind-1];
                button.style.backgroundColor = 'red';
        
            }
    }
        })

        const commentIp = document.createElement(`input`);
        commentIp.type='text';
        commentIp.placeholder='write your comment....';
        commentIp.className='comment-ip';

        const commentButton = document.createElement('button');
        commentButton.className='commentBtn';
        commentButton.textContent='comment';
        commentButton.addEventListener('click',()=>{
          let comment = commentIp.value.trim();
          if(comment.length>0){
            addComment(post.id,comment);
          }
        })

        const footerDiv = document.createElement('div');
        footerDiv.className='footer';
        footerDiv.textContent=`Likes:${post.likes} Comments:${post.comments.length}`;

        const commentContainer = document.createElement(`div`);
        commentContainer.classList.add(`comment-container`);
        commentContainer.style.display = `none`;
        post.comments.forEach((comment)=>{
          const commentEle = document.createElement(`p`);
          commentEle.textContent=comment;
          commentContainer.appendChild(commentEle);
        })

        
        postEle.append(author,img,desc,likeButton,commentIp,commentButton,footerDiv,commentContainer);
        postContainer.append(postEle);

        footerDiv.addEventListener('click',()=>{
          if(commentContainer.style.display===`none`){
            commentContainer.style.display=`block`;
          } else{
            commentContainer.style.display =`none`;
          }
        })
    })
   
  }

  // function to handle the addition of comment

  function addComment(postId,commentVale){
    postsData.forEach((data)=>{
      if(data.id==postId){
        data.comments.push(commentVale);
      }
      renderEle();
    })
 }
 
 // Create your function here to handle post creation and adding Post to the postsData.
const formPage = document.getElementById('post-form');
function addPostData(){
    let ipCap = document.querySelector('#postInput');
    let ipImg = document.querySelector('#img-ip');
    imageUrl = ipImg.value;
    let data =     { id: postsData.length+1, author: 'You', content: ipCap.value, likes: 0, comments: [], image: imageUrl }
    postsData.push(data);
}

formPage.addEventListener('submit',(evt)=>{
  evt.preventDefault();
 addPostData();
 renderEle();
});
    // function to handle like post
    function likePost(postId){
      const post = postsData.find(post => post.id === postId);
      if (post) {
        post.likes++;
        renderEle();
      }
    }

    
  renderEle();





















   
