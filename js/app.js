const taskItem = document.getElementById("task");
const btn = document.getElementById("submit-button");
const list = document.getElementById("todo-list");

btn.addEventListener("click", function(evt){
  const newLi = document.createElement("li")
  const inp = document.querySelector("input")
  newLi.textContent = inp.value
  if(inp.value !== ""){
    document.querySelector("ul").appendChild(newLi)
    inp.value = "";
    console.log(inp);
  }
});

