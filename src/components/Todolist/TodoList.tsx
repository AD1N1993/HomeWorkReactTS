import React from "react";
import {TasksType} from "../../App";

type TodolistPropsType = {
      title: string
      tasks: Array<TasksType>
      removeTask: (taskId:number) => void
      changeFilter: (value:"All"| "High" | "Middle" | "Low")=> void

}
export function Todolist(props:TodolistPropsType) {
    return(
        <div className={"wrapper"}>
            <h3>{props.title}</h3>
            <ul>
                {props.tasks.map(task => {
                    return (
                        <li key={task.id}>
                            <input type="checkbox" checked={task.isDone}/>
                            <span>{task.titleTask}</span>
                            <button onClick={()=>{props.removeTask(task.id)}}>x</button>
                        </li>
                    );
                })}

            </ul>
            <div>
                <button onClick={()=> {props.changeFilter("All")}}>All</button>
                <button onClick={()=>{props.changeFilter("High")}}>High</button>
                <button onClick={()=>{props.changeFilter("Middle")}}>Middle</button>
                <button onClick={()=>{props.changeFilter("Low")}}>Low</button>
            </div>

        </div>
    );

}