import React, {useState} from "react";
import s from "./Burger.module.scss"

type PropsType = {
    active:boolean
    onClick: () => void
}

export function Burger(props:PropsType) {

    return (
        <div className={s.wrapper} onClick={props.onClick}>
            <span className={`${s.item} ${props.active ? s.active : ""} `} > </span>
        </div>
    );
}