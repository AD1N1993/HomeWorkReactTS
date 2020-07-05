import './App.css';
import React, {useState} from "react";
import Message from "./components/Message/Message";
import {Todolist} from "./components/Todolist/TodoList";


export type TasksType = {
    id: number
    titleTask: string
    priority: string
    isDone: boolean
}

type FilterType = "All"| "High" | "Middle" | "Low";
function App() {
    let [tasks, setTasks] = useState<Array<TasksType>>(
        [
            {id:1,titleTask:"Work", priority:"High",isDone: true},
            {id:2,titleTask:"Study", priority:"High",isDone: false},
            {id:3,titleTask:"Rest", priority:"Middle",isDone: true},
            {id:4,titleTask:"Movies", priority:"Low",isDone: false},
        ]
    );
    let [filter, setFilter] = useState<FilterType>("All")

function removeTask(taskId: number) {
        tasks = tasks.filter((t:TasksType) => t.id !== taskId)
        setTasks(tasks);
}

function changeFilter (value:"All"| "High" | "Middle" | "Low") {
       setFilter(value)
}

let tasksForTodolist = tasks;
if(filter === "High"){
    tasksForTodolist = tasks.filter((t) => t.priority === "High");
}
if(filter === "Middle"){
    tasksForTodolist = tasks.filter((t) => t.priority === "Middle");
}
if(filter === "Low"){
    tasksForTodolist = tasks.filter((t) => t.priority === "Low");
}

    return (
        <div className="App">
            <h2>Home Task 1</h2>
            <Message nickName={"Artem"}
                     text={"npm start нажимал?"}
                     avatar={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4XSv8zvv1XvIvvz8PFg8hRwUTQJjbis-CJg&usqp=CAU"}
                     hours={20}
                     minutes={0}
            />
            <h2>Home Task 2</h2>
            <Todolist title={"To-do list №1"}
                      tasks = {tasksForTodolist}
                      removeTask = {removeTask}
                      changeFilter = {changeFilter}

            />
        </div>
    );
}

export default App;
