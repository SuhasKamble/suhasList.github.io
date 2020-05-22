

let add = document.getElementById('add')
add.addEventListener("click",(e)=>{
    e.preventDefault()
        console.log(123)
    let item = document.getElementById("item").value ;
    console.log(item)
    let ul = document.getElementById('ul')
    let li = document.createElement('li')
    let html = `<div class="alert alert-primary my-4" role="alert">
   ${item}
  </div>  <button class="btn btn-danger" onclick='hello(this)'>Delete</button>`
  li.innerHTML+=html

  ul.appendChild(li)
  document.getElementById('item').value=''
 
 
  
})


function hello(abs){
let ele = abs.parentNode

ele.remove()

// ele.remove()
}
