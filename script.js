
const listTotalUpdate = async()=>{
  const data = await listOfThings();
    let output = '<ul>';
  data.forEach(function (item) {
        output += `<li id="remove">
        ${item.description} 
        <button class="deleteThis" onclick="deleteThisItemFrom2DoList()">
        <i class="fas fa-trash">
        <h3>${item._id}</h3></i>
        </button></li>`;
}
);
output += '</ul>';
document.getElementById("response").innerHTML = output;    
};

listTotalUpdate();

//create new post
const makeNewPost = async ()=> {
  event.preventDefault();
  const data =  await addPost();
  const li = document.createElement("li");
    li.innerHTML= `<li id="remove">${title}</li>`
    response.append(li);
    listTotalUpdate();
};

document.getElementById("addPostForm").addEventListener('submit', makeNewPost);
document.getElementById("addToList").addEventListener('click', listTotalUpdate);

//check items by class
const list = document.querySelector('ul');

list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
    }}, 
    false);

//delete item 
const deleteThisItemFrom2DoList = async () =>{
  let id =  event.target.innerText;
//test for target ID:  
  console.log(id);
  const removeThis = await deleteItemFromList ();
//reload list 
  listTotalUpdate();
};