import React, {useState} from "react";
import s from "./Junior.module.scss"
import {EditAbleSpan} from "../../components/EditAbleSpan/EditAbleSpan";
import {EditAbleSpanLC} from "../../components/EditAbleSpanLC/EditAbleSpan";

export function Junior() {
    let [inputValue1, setInputValue1] = useState<string>("Your name");

    const onChangeInputValue1 = (newInputValue: string) => {
        setInputValue1(newInputValue)
    }

    let [inputValue2, setInputValue2] = useState<string>("Your name");

    const onChangeInputValue2 = (newInputValue: string) => {
        setInputValue2(newInputValue)
    }



    return (
        <div className={s.wrapper}>


                <h2>Home Task 6</h2>
                <EditAbleSpan value={inputValue1} onChange={onChangeInputValue1}/>

                <h4>Home Task 6 with *</h4>

                <EditAbleSpanLC value={inputValue2} onChange={onChangeInputValue2}/>
        </div>
    );
}