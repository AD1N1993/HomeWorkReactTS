import React, {useEffect, useState} from "react";
import s from "./Junior.module.scss"
import {EditAbleSpan} from "../../components/EditAbleSpan/EditAbleSpan";
import {EditAbleSpanLC} from "../../components/EditAbleSpanLC/EditAbleSpan";
import {Select} from "../../common/Select/Select";
import {RadioButton} from "../../common/RadioButton/RadioButton";
import {PersonType, setPreloaderAC} from "../../state/reducers/hwReducer";
import {Sort} from "../../components/Sort/ArraySort";
import {Clock} from "../../common/Clock/Clock";
import {Preloader} from "../../common/preloader/preloader";
import {Button} from "../../common/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";

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

    const people = useSelector<AppRootStateType, Array<PersonType>>(state => state.state.person);
    const preloader = useSelector<AppRootStateType, boolean>(state => state.state.loading);
    let dispatch = useDispatch();


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

    const setPreloader = () => {
        dispatch(setPreloaderAC())
    }
    useEffect(()=>{
        if(preloader)  setTimeout(()=>{ setPreloader()},3000);
    },[preloader]);

    if (preloader) return <Preloader/>
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
                <Sort humans={people}/>
                <h2>Home Task9</h2>
                <Clock/>
                <h2>Home Task10</h2>
                <Button value={"Show Preloader"} action={setPreloader}/>
            </div>
        );
}