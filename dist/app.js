"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todos_1 = __importDefault(require("./routes/todos"));
const app = (0, express_1.default)();
app.use('/todos', todos_1.default);
app.use((error, req, res, next) => {
    res.status(500).json({ message: error.message });
});
app.listen(3011, () => {
    console.log('Server started on http://localhost:3011');
});
