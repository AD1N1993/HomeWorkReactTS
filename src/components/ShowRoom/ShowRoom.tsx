import React, {ChangeEvent, useState} from "react";
import {InputText} from "../../common/InputText/InputText";
import {InputCheckBox} from "../../common/InputCheckbox/InputCheckbox";
import {Button} from "../../common/Button/Button";
import s from "./ShowRoom.module.scss"


export const SchowRoom = () => {
    let [inputValue, setInputValue] = useState<string>("");
    let [isDone, setIsDone] = useState<boolean>(true)

    const onChange = (inputValue: string) => {
        setInputValue(inputValue)
    };

    const changeStatus = (status: boolean) => {
        setIsDone(status)
    }

    const buttonAction = () => {
        alert("Button work");
    }

    const actionEnter = () => {
        alert("Enter action");
        setInputValue("");
    }
    return (
        <div className={s.wrapper}>
            <h3>1</h3>
            <InputText value={inputValue} onChange={onChange} actionEnter={actionEnter} error={true}/>
            <h3>2</h3>
            <InputCheckBox checked={isDone} changeStatus={changeStatus} value={"Name"}/>
            <h3>3</h3>
            <Button value={"Button"} action={buttonAction} mode={"red"}/>
        </div>
    );
}