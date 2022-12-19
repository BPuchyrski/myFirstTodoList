let todoInput;
let errorInfo;
let addBtn;
let ulList;
let newTodo;

let popup;
let popupInfo;
let todoToEdit;
let popupInput;
let popupAddBtn;
let popupCloseBtn;

const main = () => {
  prepareDOMElements();
  prepareDOMEvents();
};

const prepareDOMElements = () => {
  todoInput = document.querySelector(".todo-input");
  errorInfo = document.querySelector(".error-info");
  addBtn = document.querySelector(".btn-add");
  ulList = document.querySelector("ul");

  popup = document.querySelector(".popup");
  popupInfo = document.querySelector(".popup-info");
  popupInput = document.querySelector(".popup-input");
  popupAddBtn = document.querySelector(".accept");
  popupCloseBtn = document.querySelector(".cancel");
};

const prepareDOMEvents = () => {
  addBtn.addEventListener("click", addNewTask);
  ulList.addEventListener("click", chceckClick);
  popupCloseBtn.addEventListener("click", closePopup);
  popupAddBtn.addEventListener("click", edit);
  todoInput.addEventListener("keyup", enterClick);
};

const addNewTask = () => {
  if (todoInput.value !== "") {
    ulList.insertAdjacentHTML(
      "beforeend",
      `<li data-id="item_nr">
    ${todoInput.value}
    <div class="tools">
      <button class="complete">✓</button>
      <button class="edit">EDIT</button>
      <button class="delete">X</button>
    </div>
  </li>`
    );
    todoInput.value = "";
    errorInfo.textContent = "";
  } else {
    errorInfo.textContent = "Wpisz jakie zadanie chcesz dodać na listę";
  }
};

const chceckClick = (e) => {
  if (e.target.matches(".complete")) {
    e.target.closest("li").classList.toggle("completed");
    e.target.classList.toggle("completed");
  } else if (e.target.matches(".edit")) {
    todoToEdit = e.target.closest("li");
    popupInput.value = todoToEdit.firstChild.textContent.trim();
    popup.style.display = "flex";
  } else if (e.target.matches(".delete")) {
    e.target.closest("li").remove();
  }
};
const closePopup = () => {
  popup.style.display = "none";
  popupInfo.textContent = "";
};

const edit = (e) => {
  if (popupInput.value !== "") {
    todoToEdit.firstChild.textContent = popupInput.value;
    popup.style.display = "none";
  } else {
    popupInfo.textContent = "Aby edytować musisz coś wpisać";
  }
};
const enterClick = (e) => {
  if (e.key === "Enter") {
    addNewTask();
  }
};
document.addEventListener("DOMContentLoaded", main);
