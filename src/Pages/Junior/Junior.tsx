import React, {useState} from "react";
import s from "./Junior.module.scss"
import {EditAbleSpan} from "../../components/EditAbleSpan/EditAbleSpan";
import {EditAbleSpanLC} from "../../components/EditAbleSpanLC/EditAbleSpan";
import {Select} from "../../common/Select/Select";
import {RadioButton} from "../../common/RadioButton/RadioButton";
import {hwReducerType, PersonType} from "../../reducers/hwReducer";
import {Sort} from "../../components/Sort/ArraySort";

export type InputSettingsType = {
    id: string
    title: string
    isDone: boolean
}

export function Junior() {
    let radioSettings: Array<InputSettingsType> = [
        {id: "1", title: "Beer", isDone: false},
        {id: "2", title: "Milk", isDone: false},
        {id: "3", title: "Jin", isDone: true},
        {id: "4", title: "Tequila", isDone: false},
    ];
    const [people,setPeople] = useState<hwReducerType>([
        {id:'1', name:"Alex", age: 32},
        {id:'2', name:"Viktor", age: 16},
        {id:'3', name:"Den", age: 25},
        {id:'4', name:"Bork", age: 17},
        {id:'5', name:"Igor", age: 52},
        {id:'6', name:"Helen", age: 12},
        {id:'7', name:"Julia", age: 100}
    ]);

    let [radioState, setRadioState] = useState(radioSettings);

    let [inputValue1, setInputValue1] = useState<string>("Your name");

    let [inputValue2, setInputValue2] = useState<string>("Your name");

    let optionsValue = ["Minsk", "Moscow", "London", "Bon"];

    let [selectValue, setSelectValue] = useState("Choice...");

    const onChangeInputValue1 = (newInputValue: string) => {
        setInputValue1(newInputValue)
    }

    const onChangeInputValue2 = (newInputValue: string) => {
        setInputValue2(newInputValue)
    }


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

    const sortHumans = (sortHumans:hwReducerType) =>{
        setPeople([...sortHumans]);
    }

    return (
        <div className={s.wrapper}>
            <h2>Home Task 6</h2>
            <EditAbleSpan value={inputValue1} onChange={onChangeInputValue1}/>
            <h4>Home Task 6 with *</h4>
            <EditAbleSpanLC value={inputValue2} onChange={onChangeInputValue2}/>
            <h2>Home Task7</h2>
            <Select value={selectValue} options={optionsValue} onChange={onChangeSelectOption}/>
            <RadioButton values={radioState} name={"Drinks"} onChange={onChangeRadioInputStatus}/>
            <h2>Home Task8</h2>
            <Sort  humans={people} sort={sortHumans}/>
        </div>
    );
}