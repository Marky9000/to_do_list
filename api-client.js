
const baseUrl = "https://jsonbox.io/box_d5a377da1bb14fb9510a";

const listOfThings = async()=>{
  try{ const res =
    await fetch(baseUrl, {method : 'GET'});
    return await res.json();
}
  catch(error){
  console.log(error)} 
};
  
//add post to API
const addPost = async ()=> {
  let title = document.getElementById('title').value;
  const myPost = {
    description: title,
}
  try{await fetch (baseUrl, {
    method: 'POST',
    headers: {'Content-Type': 'application/json',},
    body: JSON.stringify(myPost),
  })
 } 
  catch(error){
console.log(error)} 
};

//delete item from API 
const deleteItemFromList = async () =>{
    let id =  event.target.innerText;
  try { 
    const res = await fetch (baseUrl +'/'+ id, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    }})
  return await res.json();
  } 
  catch (error){
  console.log(error);} 
};