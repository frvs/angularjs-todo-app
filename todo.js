angular.module('myApp', [])
    .controller('TodoListController', function() {
        var todoList = this;
        todoList.undoneTodos = [];
        todoList.doneTodos = [];

        todoList.markAsDone = function(id) {
            var todo = todoList.undoneTodos.find(x => x.id == id);
            var todoIndex = todoList.undoneTodos.indexOf(todo);

            if(todoIndex == -1) {
                return;
            }

            todoList.undoneTodos.splice(todoIndex, 1);
            todo.done = true;
            todoList.doneTodos.push(todo);
        }   
        
        todoList.markAsUndone = function(id) {
            var todo = todoList.doneTodos.find(x => x.id == id);
            var todoIndex = todoList.doneTodos.indexOf(todo);

            if(todoIndex == -1) {
                return;
            }

            todoList.doneTodos.splice(todoIndex, 1);
            todo.done = false;
            todoList.undoneTodos.push(todo);
        }

        todoList.addTodo = function() {
            todoList.undoneTodos.push({id: todoList.total() + 1, text: todoList.newTodoText, done: false});
            todoList.newTodoText = '';
        }

        todoList.remaining = function() {
            return todoList.undoneTodos.length;
        }

        todoList.total = function() {
            return todoList.undoneTodos.length + todoList.doneTodos.length;
        }
    });