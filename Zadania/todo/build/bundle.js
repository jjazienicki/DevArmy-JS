(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (factory());
}(this, (function () { 'use strict';

  document.addEventListener('DOMContentLoaded', initialize);

  function initialize() {
    document.querySelector('.newTodo button').addEventListener('click', onAddTodo);
  }

  function onAddTodo() {
    var addInput = document.querySelector('.newTodo input');
    var newTodoText = addInput.value;
    if (newTodoText.length > 0) {
      createNewTodo(newTodoText);
      addInput.value = "";
    } else {
      alert("Wypełnij pole!");
    }
  }

  function createNewTodo(newTodoText) {
    var newList = document.createElement('li');
    var newLabel = document.createElement('label');
    var todoList = document.querySelector('.todo-list ul');

    newList.appendChild(newLabel);

    createInput(newLabel);
    createTextElement(newLabel, newTodoText);
    createEditBtn(newLabel);
    createRemoveBtn(newLabel);

    todoList.appendChild(newList);
  }

  function createTextElement(newLabel, text) {
    var newSpan = document.createElement('span');
    newSpan.innerText = text;
    newLabel.appendChild(newSpan);
  }

  function createInput(newLabel) {
    var newInput = document.createElement('input');
    newInput.setAttribute("type", "checkbox");
    newLabel.appendChild(newInput);
    newInput.addEventListener('change', sendToProperList);
  }

  function createIcon(classes) {
    var icon = document.createElement('i');
    icon.classList = classes;  return icon;
  }

  function createEditBtn(newLabel) {
    var newButton = document.createElement('button');
    var newIcon = createIcon("fas fa-edit");

    newButton.appendChild(newIcon);
    newLabel.appendChild(newButton);
    newButton.addEventListener('click', editTodo);
  }

  function createRemoveBtn(newLabel) {
    var newButton = document.createElement('button');
    var newIcon = createIcon("fas fa-trash-alt");

    newButton.appendChild(newIcon);
    newLabel.appendChild(newButton);
    newButton.addEventListener('click', deleteTodo);
  }

  function sendToProperList(event) {
    var currentInput = event.currentTarget;
    var todoList = document.querySelector('.todo-list ul');
    var doneList = document.querySelector('.done-list ul');
    var currentElement = currentInput.parentElement.parentElement;

    if (currentInput.checked) {
      doneList.appendChild(currentElement);
    } else {
      todoList.appendChild(currentElement);
    }
  }

  function editTodo(createNewTodo) {
    var currentInput = event.currentTarget;
    var currentElement = currentInput.parentElement.parentElement;
    var newValue = prompt("Please add text", currentElement.querySelector("span").innerText);
    if (newValue) {
      currentElement.querySelector("span").innerText = newValue;
    }
  }

  function deleteTodo(createNewTodo) {
    var currentInput = event.currentTarget;
    var currentElement = currentInput.parentElement.parentElement;
    currentElement.remove();
  }

})));
//# sourceMappingURL=bundle.js.map
