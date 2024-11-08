/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todos = []; // Initialize the todos array
  }

  // Method to add a new todo to the list
  add(todo) {
    this.todos.push(todo);
  }

  // Method to remove a todo by index
  remove(indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
      this.todos.splice(indexOfTodo, 1); // Remove 1 element at the given index
    } else {
      throw new Error("index does not exist"); // Throw error if index is invalid
    }
  }

  // Method to update a todo by index
  update(index, updatedTodo) {
    if (index >= 0 && index < this.todos.length) {
      this.todos[index] = updatedTodo; // Update the todo at the given index
    } else {
      throw new Error("index does not exist"); // Throw error if index is invalid
    }
  }

  // Method to return all todos
  getAll() {
    return this.todos;
  }

  // Method to get a single todo by index
  get(indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
      return this.todos[indexOfTodo]; // Return the todo at the given index
    } else {
      return null; // Return null if the index is invalid
    }
  }

  // Method to clear all todos
  clear() {
    this.todos = []; // Reset the todos array
  }
}

module.exports = Todo;
