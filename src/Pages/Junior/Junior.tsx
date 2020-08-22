import React, {useState} from "react";
import s from "./Junior.module.scss"
import {EditAbleSpan} from "../../components/EditAbleSpan/EditAbleSpan";
import {EditAbleSpanLC} from "../../components/EditAbleSpanLC/EditAbleSpan";
import {Select} from "../../common/Select/Select";
import {RadioButton} from "../../common/RadioButton/RadioButton";

export type InputSettingsType = {
    id: string
    title: string
    isDone: boolean
}

export function Junior() {
    let radioSettings: Array<InputSettingsType> = [
        {id: "1", title: "Beer", isDone: false},
        {id: "2", title: "Milk", isDone: false},
        {id: "3", title: "Jin", isDone: false},
        {id: "4", title: "Tequila", isDone: false},
    ]

    let [radioState, setRadioState] = useState(radioSettings);

    let [inputValue1, setInputValue1] = useState<string>("Your name");


    const onChangeInputValue1 = (newInputValue: string) => {
        setInputValue1(newInputValue)
    }

    let [inputValue2, setInputValue2] = useState<string>("Your name");

    const onChangeInputValue2 = (newInputValue: string) => {
        setInputValue2(newInputValue)
    }

    let optionsValue = ["Minsk", "Moscow", "London", "Bon"]
    let [selectValue, setSelectValue] = useState(optionsValue[0])

    const onChangeSelectOption = (option: string) => {
        setSelectValue(option);
    }

    const onChangeRadioInputStatus = (radioItemId: string, isDone: boolean) => {
        console.log(radioItemId, isDone)
        let clickItem = radioState.find(i => i.id === radioItemId);
        if (clickItem) {
            clickItem.isDone = !clickItem.isDone
            setRadioState([...radioState]);
        }

    }


    return (
        <div className={s.wrapper}>

            <h2>Home Task 6</h2>
            <EditAbleSpan value={inputValue1} onChange={onChangeInputValue1}/>

            <h4>Home Task 6 with *</h4>

            <EditAbleSpanLC value={inputValue2} onChange={onChangeInputValue2}/>

            <h2>Home Task7</h2>
            <Select value={selectValue} options={optionsValue} onChange={onChangeSelectOption}/>
            <hr/>
            <RadioButton values={radioState} name={"Drinks"} onChange={onChangeRadioInputStatus}/>
        </div>
    );
}