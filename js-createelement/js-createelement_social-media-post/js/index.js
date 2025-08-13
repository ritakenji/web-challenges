console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

function newPost() {
  const newContainer = document.createElement("article");
  newContainer.classList.add("post");

  const newParag = document.createElement("p");
  newParag.textContent =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
  newParag.classList.add("post__content");

  const newFooter = document.createElement("footer");
  newFooter.classList.add("post__footer");

  const newSpan = document.createElement("span");
  newSpan.textContent = "@username";
  newSpan.classList.add("post__username");

  const newLikeButton = document.createElement("button");
  newLikeButton.textContent = "♥ Like";
  newLikeButton.classList.add("post__button");
  newLikeButton.addEventListener("click", handleLikeButtonClick);

  newFooter.append(newSpan, newLikeButton);
  newContainer.append(newParag, newFooter);

  //const theBody = document.getElementsByTagName("body")[0];//body is an array, i didn't have the [0] before, thats why it wasnt showing
  //console.log(theBody); //if i use this i see body is an array
  //theBody.append(newContainer);
  document.body.append(newContainer);
}

newPost();
newPost();
newPost();
newPost();
