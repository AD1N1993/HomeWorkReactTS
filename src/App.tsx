import './App.scss';
import React, {useState} from "react";
import Message from "./components/Message/Message";
import {Todolist} from "./components/Todolist/TodoList";
import HelloInput from "./components/HelloInput/HelloInput";
import {v1} from "uuid";
import {SchowRoom} from "./components/ShowRoom/ShowRoom";


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

function App() {
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
        <div className="App">
            <h2>Home Task 1</h2>
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


        </div>


    );
}

export default App;
// (TypeScript) домашка от меня №4:
// - добавьте в проект домашек папку common - в ней мы будем хранить универсальные компоненты
// <MyInput value={value} onChange={onChange}/> // это универсальная компонента
// <Hello name={name} sayHello={sayHello}/> // это НЕ универсальная компонента, так как работает только с именами, ...на работе так же будут непонятные таски - научитесь спрашивать если что-то не понятно, иначе на работе будете страдать из-за необходимости всё переделывать за "спасибо" из-за того что вы не правильно поняли задание!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// - на работе часто вместо стандартных хтмл тегов используют готовые компоненты с красивыми стилями, нужно сделать 3 компоненты: инпут, чекбокс и кнопку
// - эти компоненты должны быть УНИВЕРСАЛЬНЫМИ и иметь красивые стили (создать самому или найти в интернете)
// - добавьте в проект компоненту, в которой отрисуйте эти универсальные компоненты для демонстрации
// - замените в предыдущих домашках стандартные кнопки и инпуты вашими универсальными компонентами, в последующих домашках используйте свои универсальные компоненты вместо стандартных
// задачи со звёздочками:
//     * сделайте так чтоб onChange ваших компонент сразу давал нужное значение (value/checked), а не объект ивента
// * добавьте в инпуту пропс для функции, которая будет выполняться по нажатию кнопки Enter
// * добавьте в свою кнопку необязательный пропс для выбора типа кнопки: стандартный (выбран изначально) или красный (для кнопок удаления/отмены/выхода/...), стили для разных типов должны быть разные
// * добавить необязательный пропс error в инпут, в случае передачи в него значения нужно менять стиль инпута на красный