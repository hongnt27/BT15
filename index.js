// selector all element

const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const pendingTask = document.querySelector(".pendingTask");
const clearAll = document.querySelector(".footer button");
const edit = document.querySelector(".todoList li");
// local storage
showTask();
inputBox.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    add();
  }
})
addBtn.onclick = () => {
  add();
};
clearAll.onclick = deleteAll;

function showTask() {
  let getLocalStorage = localStorage.getItem("Newtodo");
  if (!getLocalStorage) {
    listArray = [];
  } else {
    listArray = JSON.parse(getLocalStorage);
  }
  let newTask = "";
  listArray.forEach((item, index) => {
    newTask += `<li onclick ="editTask(${index})"> ${item} <span onclick="deleteTask(${index})" class="icon"><i class="fa-solid fa-trash"></i></span>  </li>`;
  });
  todoList.innerHTML = newTask;
  inputBox.value = "";
  pendingTask.textContent = listArray.length;
}
function add() {
    let userEnterValue = inputBox.value;
    let getLocalStorage = localStorage.getItem("Newtodo");
    if (!getLocalStorage) {
      listArray = [];
    } else {
      listArray = JSON.parse(getLocalStorage);
    }
    console.log(listArray);
    if(userEnterValue == "")  alert("Nhap noi dung"); 
    else listArray.push(userEnterValue);
    localStorage.setItem("Newtodo", JSON.stringify(listArray));
    showTask();
}
function deleteAll() {
  listArray = [];
  localStorage.setItem("Newtodo", JSON.stringify(listArray));
  showTask();
}
function deleteTask(index) {
  listArray.splice(index, 1);
  localStorage.setItem("Newtodo", JSON.stringify(listArray));
  showTask();
}
function editTask(index){
  let getLocalStorage = localStorage.getItem("Newtodo");
  if (!getLocalStorage) {
    listArray = [];
  } else {
    listArray = JSON.parse(getLocalStorage);
  }
  // let eText = edit.innerHTML;
  alert("ok");
  // listArray.push(userEnterValue);
  // localStorage.setItem("Newtodo", JSON.stringify(listArray));
  // showTask();
}

// - double click -> xuất hiện ô input để edit 
// - có ô checkbox để check task đã hoàn thành hay chưa