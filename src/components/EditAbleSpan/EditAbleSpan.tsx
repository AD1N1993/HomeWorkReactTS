import React, {ChangeEvent,KeyboardEvent, useState} from "react";
import s from "./EditAbleSpan.module.scss"

type EditAbleSpanPropsType = {
    value: string
    onChange: (newInputValue: string) => void

}


export function EditAbleSpan(props: EditAbleSpanPropsType) {
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
        </div>
    );
}