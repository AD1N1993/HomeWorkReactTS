import React, {useState} from "react";

import {v1} from "uuid";
import {Todolist} from "../../components/Todolist/TodoList";
import HelloInput from "../../components/HelloInput/HelloInput";
import {SchowRoom} from "../../components/ShowRoom/ShowRoom";
import Message from "../../components/Message/Message";
import s from "./PreJunior.module.scss";
import {EditAbleSpan} from "../../components/EditAbleSpan/EditAbleSpan";
import {EditAbleSpanLC} from "../../components/EditAbleSpanLC/EditAbleSpan";

export type TasksType = {
    id: number
    titleTask: string
    priority: string
    isDone: boolean
}
type FilterType = "All" | "High" | "Middle" | "Low";

export type HelloUsersType = {
    id: string
    name: string
}


export function PreJunior() {


    let [tasks, setTasks] = useState<Array<TasksType>>(
        [
            {id: 1, titleTask: "Work", priority: "High", isDone: true},
            {id: 2, titleTask: "Study", priority: "High", isDone: true},
            {id: 3, titleTask: "Rest", priority: "Middle", isDone: true},
            {id: 4, titleTask: "Movies", priority: "Low", isDone: false},
        ]
    );
    let [filter, setFilter] = useState<FilterType>("All")

    let [inputState, setInput] = useState("");

    let [usersHello, setUsersHello] = useState<Array<HelloUsersType>>([]);


    function removeTask(taskId: number) {
        tasks = tasks.filter((t: TasksType) => t.id !== taskId)
        setTasks(tasks);
    }

    function changeFilter(value: "All" | "High" | "Middle" | "Low") {
        setFilter(value)
    }

    function enterName(name: string) {
        setInput(name);
    }

    function changeQuantityUsers(userName: string) {
        let newUser: HelloUsersType = {id: v1(), name: userName};
        let newUsers = [newUser, ...usersHello]
        setUsersHello(newUsers)

    }

    const changeStatus = (status: boolean, id: number) => {
        let task = tasks.find(t => t.id === id);
        console.log(status, id)
        if (task) {
            task.isDone = status;
            setTasks([...tasks]);
        }
    }


    let tasksForTodolist = tasks;
    if (filter === "High") {
        tasksForTodolist = tasks.filter((t) => t.priority === "High");
    }
    if (filter === "Middle") {
        tasksForTodolist = tasks.filter((t) => t.priority === "Middle");
    }
    if (filter === "Low") {
        tasksForTodolist = tasks.filter((t) => t.priority === "Low");
    }


    return (

        <>
            <h2 className={s.title}>Home Task 1</h2>
            <Message nickName={"Artem"}
                     text={"npm start нажимал?"}
                     avatar={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4XSv8zvv1XvIvvz8PFg8hRwUTQJjbis-CJg&usqp=CAU"}
                     hours={20}
                     minutes={0}
            />
            <h2>Home Task 2</h2>
            <Todolist title={"To-do list"}
                      tasks={tasksForTodolist}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
                      changeStatus={changeStatus}


            />
            <h2>Home Task 3</h2>
            <HelloInput inputState={inputState}
                        changeInputName={enterName}
                        quantityUsers={usersHello}
                        changeQuantity={changeQuantityUsers}

            />
            <h2>Home Task 4</h2>
            <SchowRoom/>



        </>
    );

}