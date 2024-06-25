const inputtext = document.getElementById("inputext");
const tasklist = document.getElementById("task-list");

loadEventListenr();
function loadEventListenr() {}

function additem() {
  // e.preventDefault();

  if (inputtext.value === "") {
    alert("please enter list ");
  } else {
    // console.log(inputtext.value);
    // createelemnt of li
    const li = document.createElement("li");
    // console.log(li);
    // createelemnt of span
    const spanttext = document.createElement("span");
    // createelemnt of textnode
    const textnode = document.createTextNode(inputtext.value);
    spanttext.appendChild(textnode);

    // createelemnt of button
    const deletebtn = document.createElement("button");
    deletebtn.classList.add("delete-item");
    deletebtn.innerHTML = "Delete";

    //Remove item
    deletebtn.addEventListener("click", function (e) {
      console.log(e.target);
      const parantlist = e.target.parentElement;
      parantlist.parentElement.removeChild(parantlist);
    });
    // deletebtn.innerHTML = "<button></button>";
    li.appendChild(spanttext);
    li.appendChild(deletebtn);
    // console.log(deletebtn);
    tasklist.appendChild(li);
    // console.log(tasklist);
    inputtext.value = "";
  }
}

function cleardata() {
  const lists = document.querySelectorAll("li");
  console.log(lists);
  lists.forEach(function (list) {
    list.remove();
  });
}
