import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div class="container">
    <h1>Hello Todo!</h1>
    <form id="todo-form">
      <input id="todo-input" type="text" placeholder="Add something" required/>
      <button id="add-todo-btn" type="submit">Add</button>
    </form>
    <ul id="todo-list">
    </ul>
    <!-- <div class="card">
      <button id="counter" type="button"></button>
    </div> -->

  </div>
`

// setupCounter(document.querySelector('#counter'))


const addBtn = document.getElementById('add-todo-btn')
const todoForm = document.getElementById('todo-form')
const todoList = document.getElementById('todo-list')

// const todoInput = document.getElementById('todo-form')

// const listItem = document.createElement('li')
let todos = []

function createNewTaskElem(taskString) {
  let listItem = document.createElement("li")
  let label = document.createElement("label")
  label.innerText = taskString
  listItem.appendChild(label)
  return listItem
}


function addTodo(element) {

  element.addEventListener('submit', function (event) {
    event.preventDefault()
    const todo = document.getElementById('todo-input').value
    if (todo) {
      // after clicking add -> reset the field to blank
      if (!todos.length) {
        const todoTransform = {
          id: 0,
          data: todo,
          complete: false
        }
        todos.push(todoTransform)
        const elem = createNewTaskElem(todo)
        todoList.appendChild(elem)
        // todoList.appendChild(listItem.append("1"))
        // listItem.append('1')
        // console.log(listItem)
        // renderTodoList(todoList)
      } else {
        const currentIndex = todos.length
        const prevTodoId = todos[currentIndex - 1].id
        const todoTransform = {
          id: prevTodoId + 1,
          data: todo,
          complete: false
        }
        todos.push(todoTransform)
        const elem = createNewTaskElem(todo)
        todoList.appendChild(elem)
        // listItem.append('2')
        // todoList.appendChild(listItem.append("2"))
        // console.log(listItem)
        // renderTodoList(todoList)
      }
      // console.log('todos: ', todos)
      document.getElementById('todo-input').value = null
    } else {
      todo.setCustomValidity("This is required")

      // show invalid outline
    }
  })
}

function renderTodoList(element) {
  // const todoListElem = document.createElement('li')
  // const todoListElemMarkup = 
  //   `
  //     <li></li>
  //   `
  const listElem = todos.forEach((todo, i) => {
    // console.log(data)
    element.innerHTML = `
      <li>${todo.data}</li>
    `
  })
  console.log(listElem)
}

// renderTodoList(todoList)
addTodo(todoForm)
