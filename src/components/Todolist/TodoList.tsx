import React, {ChangeEvent} from "react";
import {TasksType} from "../../App";
import {Button} from "../../common/Button/Button";
import {InputCheckBox} from "../../common/InputCheckbox/InputCheckbox";

type TodolistPropsType = {
    title: string
    tasks: Array<TasksType>
    removeTask: (taskId: number) => void
    changeFilter: (value: "All" | "High" | "Middle" | "Low") => void
    changeStatus: (status: boolean, id: number) => void

}

export function Todolist(props: TodolistPropsType) {

    const changeFilterValueAll = () => { props.changeFilter("All")};
    const changeFilterValueHigh = () => { props.changeFilter("High")};
    const changeFilterValueMiddle = () => { props.changeFilter("Middle")};
    const changeFilterValueLow = () => { props.changeFilter("Low")};
    return (
        <div className={"wrapper"}>
            <h3>{props.title}</h3>
            <ul>
                {props.tasks.map(task => {
                    return (
                        <li key={task.id}>
                            <InputCheckBox value={task.titleTask}
                                           checked={task.isDone}
                                           changeStatus={props.changeStatus}
                                           id={task.id}/>
                            <Button value={"x"} action={() => {
                                props.removeTask(task.id)
                            }}/>
                        </li>
                    );
                })}

            </ul>
            <div>
                <Button value={"All"} action={ changeFilterValueAll}/>
                <Button value={"High"} action={ changeFilterValueHigh}/>
                <Button value={"Middle"} action={ changeFilterValueMiddle}/>
                <Button value={"Low"} action={ changeFilterValueLow}/>
            </div>

        </div>
    );

}