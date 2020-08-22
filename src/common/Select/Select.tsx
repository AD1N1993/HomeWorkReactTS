import React, {MouseEvent, KeyboardEvent, useState} from "react";
import s from "./Select.module.scss"

type SelectTypeProps = {
    options: Array<string>
    value: string
    onChange: (option: string) => void
}


export const Select = (props: SelectTypeProps) => {
    let [active, setActive] = useState(false);

    const onShowOption = () => {
        setActive(!active)
    }
    const handlerOnChange = (event: MouseEvent<HTMLOptionElement>) => {
        props.onChange(event.currentTarget.value)
        setHoverElement(event.currentTarget.value);
    }
    let [hoverElement, setHoverElement] = useState(props.value);

    const onKey = (event: KeyboardEvent<HTMLDivElement>) => {
        for (let i = 0; i < props.options.length; i++) {
            if (props.options[i] === hoverElement) {
                if (event.key === "ArrowDown") {
                    if (!props.options[i + 1]) break
                    props.onChange(props.options[i + 1]);
                    setHoverElement(props.options[i + 1])
                } else if (event.key === "ArrowUp") {
                    if (!props.options[i - 1]) break
                    props.onChange(props.options[i - 1]);
                    setHoverElement(props.options[i - 1])
                }
            }
        }
        if (event.key === "Escape") setActive(false);
        if (event.key === "Enter") setActive(!active);
    }

    return (
        <>

            <div onKeyUp={(event) => onKey(event)} tabIndex={0} className={s.selectTitle}
                 onClick={onShowOption}>{props.value}
                {active ? <div className={s.optionWrapper}>
                    {props.options.map(option => {

                            return (

                                <option className={`${s.option} ${hoverElement === option ? s.selected : ""}`}
                                        key={option}
                                        value={option}
                                        label={option}
                                        onClick={(event) => handlerOnChange(event)}
                                        onMouseEnter={(e) => {
                                            setHoverElement(e.currentTarget.value)
                                        }}
                                >{option}
                                </option>)
                        }
                    )}
                </div> : ""}
            </div>


        </>
    );

}