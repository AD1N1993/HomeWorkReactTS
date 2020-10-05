import React, {useState} from "react";
import {Burger} from "./Burger/Burger";
import {FlyMenu} from "./FlyMenu/FlyMenu";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";
import {ThemeReducerType} from "../../state/reducers/themesReducer";


export function NavBar() {

    let [active, setActive] = useState(false);

    function onClickChangeState() {
        setActive(!active);
    }
    const theme = useSelector<AppRootStateType, ThemeReducerType>(state => state.theme)
    return (
        <>
            <Burger active={active} onClick={onClickChangeState} mode={theme.theme}/>
            <FlyMenu status={active} onClickHide={onClickChangeState}/>
        </>
    );
}