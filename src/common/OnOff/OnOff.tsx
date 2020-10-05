import React, {MouseEvent} from "react";
import s from "./OnOff.module.scss";
import {useDispatch} from "react-redux";
import {setThemeAC} from "../../state/reducers/themesReducer";

type OnOffPropsType = {
    mode: "black"|"white"
}

export const OnOff = (props:OnOffPropsType) => {
    const dispatch = useDispatch();
    const onClickHandler = (e:MouseEvent<HTMLDivElement>) =>{
        dispatch(setThemeAC(e.currentTarget.id as "white" | "black"))
    }
    return (
        <>
            <div id={"white"} className={`${s.btnW} ${props.mode ==="white"? s.white: s.black}`} onClick={e=>onClickHandler(e)}>White mode</div>
            <div id={"black"} className={`${s.btnB} ${props.mode ==="white"? s.black: s.white}`} onClick={e=>onClickHandler(e)}>Black mode</div>
        </>
    )
}