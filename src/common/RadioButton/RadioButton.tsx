import React, {  MouseEvent} from "react";
import {InputSettingsType} from "../../Pages/Junior/Junior";
import s from "./RadioButton.module.scss"


type RadioButtonPropsType = {
    values: Array<InputSettingsType>
    name: string
    onChange: (radioItemId: string, isDone: boolean) => void
}


export const RadioButton = (props: RadioButtonPropsType) => {
    const onChangeRadioButton = (event: MouseEvent<HTMLInputElement>) => {
        props.onChange(event.currentTarget.id, event.currentTarget.checked);
    }
    return (
        <>
            <h3 className={s.radioButtonTitle}>{props.name}</h3>
            {props.values.map(i => {

                return <>
                    <label  className={s.radioItem}>
                        <input  className={s.radioInput}
                               type="radio"
                               value={i.title}
                               onClick={onChangeRadioButton}
                               id={i.id}
                               checked={i.isDone}
                        />
                        <span className={`${s.radioItemTitle} ${i.isDone? s.active:""}`}>{i.title}</span>
                    </label>
                </>
            })}
        </>
    );


};