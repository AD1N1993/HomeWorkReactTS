import React, {ChangeEvent} from "react";
import s from "./InputCheckbox.module.scss"

type inputCheckboxTypeProps = {
    checked: boolean
    changeStatus: (status: boolean, id: number) => void
    value: string;
    id?: number
}

export const InputCheckBox = (props: inputCheckboxTypeProps) => {

    const changeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        let id = props.id || +e.currentTarget.id;
        props.changeStatus(e.currentTarget.checked, id);
    }
    return (
        <>
            <label className={`${s.checkbox} ${props.checked ? s.active : ""}`}>
                <input className={s.input} type="checkbox" value={"1"} checked={props.checked} onChange={changeStatus}/>
                <span>{props.value}</span>
            </label>
        </>
    );
}