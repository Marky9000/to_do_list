
const baseUrl = "https://jsonbox.io/box_d5a377da1bb14fb9510a";

//load cuurent list and attach id to it 
const listTotalUpdate = async()=>{
  fetch(baseUrl)
  .then(response => response.json())
  .then(users => {
      let
        output = '<ul>';
      users.forEach(function (user) {
        output += `<li id="remove" >
            ${user.description} 
    <button class="deleteThis" onclick="deleteThisItemFrom2DoList()">
    <i class="fas fa-trash" ><h3 >${user._id}</h3></i>
    </button></li>`;
      });
      output += '</ul>';
      document.getElementById("response").innerHTML = output;
    });

}   

function addPost(event) {
  event.preventDefault();
  let title = document.getElementById('title').value;
  const myPost = {
    description: title,
  }
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },

    body: JSON.stringify(myPost),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))

    const li = document.createElement("li");
    li.innerHTML= ` <li id="remove" > ${title}  </li> `
    response.append(li);

    listTotalUpdate();
}


const deleteThisItemFrom2DoList = async () =>{

let id =  event.target.innerText;
//test for target ID:  
console.log(id);

await fetch(baseUrl +'/'+ id, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(res => res.json())   
    .then(() => { console.log('removed'); }
    )

  listTotalUpdate();
 
};
