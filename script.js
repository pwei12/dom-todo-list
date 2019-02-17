const tasks = ["buy milk", "eat dinner", "nail javascript", "give feedback"];

let input = document.getElementsByTagName("input");
// let body = document.querySelector("body");
// let input = document.createElement("input");
// input.setAttribute("type","text");
// body.appendChild(input);

let buttonAdd = document.querySelector("button");
let ul = document.getElementById("todo-list");

//func to create individual li with button Remove
function addLi(task) {
  //do nothing if input is empty string
  if (task !== "") {
    //Create li element
    const li = document.createElement("li");
    li.textContent = task;
    //toggle class done when li is clicked
    li.addEventListener("click", event => {
      //event.target.classList.toggle('done')
      li.classList.toggle("done");
    });
    ul.appendChild(li);

    //create button Remove
    let buttonRemove = document.createElement("button");
    buttonRemove.textContent = "Remove";
    li.appendChild(buttonRemove);

    //remove li when Remove button is clicked
    buttonRemove.addEventListener("click", () => {
      li.remove();
    });
    input[0].value = "";
  }
}

tasks.forEach(addLi);

//button Add to add task from input to li
buttonAdd.addEventListener("click", () => {
  addLi(input[0].value);
});

//add task from input when 'enter' is pressed
input[0].addEventListener("keyup", e => {
  if (e.keyCode === 13) {
    //e.key === 'Enter'
    addLi(input[0].value);
  }
});
