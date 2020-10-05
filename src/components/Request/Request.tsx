import React, {useEffect, useState} from "react";
import {Button} from "../../common/Button/Button";
import {InputCheckBox} from "../../common/InputCheckbox/InputCheckbox";
import {useDispatch, useSelector} from "react-redux";
import {setErrorAC, setSuccessTC} from "../../state/reducers/hwReducer";
import {AppRootStateType} from "../../state/store";


export const Request = () => {
    const [optionValue, setOptionValue] = useState(false)
    const error = useSelector<AppRootStateType, string | null>(state => state.state.error)
    const dispatch = useDispatch()
    const sendValue = () => {
        dispatch(setSuccessTC(optionValue))
    }
    useEffect(() => {
        let errorID = setTimeout(() => {
            dispatch(setErrorAC(""))
        }, 3000);
        return function cleanup() {
            clearInterval(errorID);
        };
    }, [error])
    return (
        <>
            <InputCheckBox checked={optionValue} changeStatus={setOptionValue} value={"option"}/>
            <Button value={"request"} action={sendValue}/>
            <span>{error}</span>
        </>
    )
}