"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTodo = void 0;
const todo_1 = require("../models/todo");
const todos = [];
const createTodo = (req, res, next) => {
    try {
        const task = req.body.task;
        const newTodo = new todo_1.Todo(Math.random().toString(), task);
        todos.push(newTodo);
        res.status(201).json({
            message: 'Created the todo.',
            createdTask: newTodo
        });
    }
    catch (error) {
        next(error);
        console.log(error);
    }
};
exports.createTodo = createTodo;
