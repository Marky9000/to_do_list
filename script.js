document.getElementById("addToList").addEventListener('click', listTotalUpdate);
document.getElementById("addPostForm").addEventListener('submit', addPost);

listTotalUpdate();

const list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);



