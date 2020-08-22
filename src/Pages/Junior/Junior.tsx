import React, {useState} from "react";
import s from "./Junior.module.scss"
import {EditAbleSpan} from "../../components/EditAbleSpan/EditAbleSpan";
import {EditAbleSpanLC} from "../../components/EditAbleSpanLC/EditAbleSpan";
import {Select} from "../../common/Select/Select";
import {RadioButton} from "../../common/RadioButton/RadioButton";

export type InputSettingsType ={
    id:number
    title:string
}
export function Junior() {
    let [inputValue1, setInputValue1] = useState<string>("Your name");

    const onChangeInputValue1 = (newInputValue: string) => {
        setInputValue1(newInputValue)
    }

    let [inputValue2, setInputValue2] = useState<string>("Your name");

    const onChangeInputValue2 = (newInputValue: string) => {
        setInputValue2(newInputValue)
    }

    let optionsValue = ["Minsk","Moscow","London","Bon"]
    let [selectValue, setSelectValue] = useState(optionsValue[0])

    const onChangeSelectOption = (option:string) =>{
        setSelectValue(option);
    }


    let radioSettings:Array<InputSettingsType> = [
        {id:1, title: "Beer"},
        {id:1, title: "Milk"},
        {id:1, title: "Jin"},
        {id:1, title: "Tequila"},
    ]



    return (
        <div className={s.wrapper}>

                <h2>Home Task 6</h2>
                <EditAbleSpan value={inputValue1} onChange={onChangeInputValue1}/>

                <h4>Home Task 6 with *</h4>

                <EditAbleSpanLC value={inputValue2} onChange={onChangeInputValue2}/>

            <h2>Home Task7</h2>
            <Select value={selectValue} options={optionsValue} onChange={onChangeSelectOption}/>
            <hr/>
            <RadioButton radioSettings={radioSettings}  name={"Drinks"}  />
        </div>
    );
}