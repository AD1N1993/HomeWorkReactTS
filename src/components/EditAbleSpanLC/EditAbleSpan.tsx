import React, {ChangeEvent,KeyboardEvent, useState} from "react";
import s from "./EditAbleSpan.module.scss"
import {Button} from "../../common/Button/Button";

type EditAbleSpanPropsType = {
    value: string
    onChange: (newInputValue: string) => void
}

export function EditAbleSpanLC(props: EditAbleSpanPropsType) {
    let [editMode, setEdditMode] = useState(false)

    const activateMode = () => {
        setEdditMode(true)
    }
    const deactivateMode = () => {
        setEdditMode(false)
    }

    const onChangeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChange(e.currentTarget.value)
    }
    function changeTitleOnKeyPressed(e: KeyboardEvent<HTMLInputElement>) {
        if (e.key === 'Enter') {
            deactivateMode();
        }
    }

    function saveState<T>(key: string, state: T) {
        const stateAsString = JSON.stringify(state);
        localStorage.setItem(key, stateAsString)
    }

    function restoreState<T>(key: string, defaultState: T) {
        const stateAsString = localStorage.getItem(key);
        if (stateAsString !== null) defaultState = JSON.parse(stateAsString);
        return defaultState;
    }
    type StateType = {
        x: string
        y: number
    }
    const valueFromLC = () =>{
        let newValue = restoreState<StateType>("first", {x:"",y:0});
        console.log(newValue.x)
        props.onChange(newValue.x)
    }

    return (
        <div className={s.wrapper}>
            {
                editMode
                    ?
                    <input  className={s.input}
                            value={props.value}
                            autoFocus={true}
                            onBlur ={deactivateMode}
                            onChange={onChangeInputValue}
                            onKeyPress={changeTitleOnKeyPressed}
                    />
                    : <span className={s.span} onDoubleClick={activateMode}>{props.value}</span>
            }
            <Button value={"save"} action={()=>{saveState("first",{x:props.value,y:0})}}/>
            <Button value={"restore"} action={valueFromLC}/>
        </div>
    );
}