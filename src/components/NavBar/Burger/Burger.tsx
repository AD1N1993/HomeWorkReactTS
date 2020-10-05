import React, {useState} from "react";
import s from "./Burger.module.scss"

type PropsType = {
    active:boolean
    onClick: () => void
    mode: "black" | "white"
}

export function Burger(props:PropsType) {

    return (
        <div className={s.wrapper} onClick={props.onClick}>
            <span className={`${s.item} ${props.active ? s.active : ""} ${props.mode==="white"? s.white : s.black}`} > </span>
        </div>
    );
}