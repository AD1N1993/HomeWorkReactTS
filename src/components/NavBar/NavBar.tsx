import React, {useState} from "react";
import {Burger} from "./Burger/Burger";
import {FlyMenu} from "./FlyMenu/FlyMenu";


export function NavBar() {

    let [active, setActive] = useState(false);

    function onClickChangeState() {
        setActive(!active);
    }

    return (
        <>
            <Burger active={active} onClick={onClickChangeState}/>
            <FlyMenu status={active} onClickHide={onClickChangeState}/>
        </>
    );
}