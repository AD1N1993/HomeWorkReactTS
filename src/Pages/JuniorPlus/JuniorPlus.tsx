import React from "react";
import s from "./JuniorPlus.module.scss"
import {OnOff} from "../../common/OnOff/OnOff";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";
import {ThemeReducerType} from "../../state/reducers/themesReducer";
import {Request} from "../../components/Request/Request";
import {Preloader} from "../../common/preloader/preloader";

export function JuniorPlus() {
    const theme = useSelector<AppRootStateType, ThemeReducerType>(state => state.theme)
    const loading = useSelector<AppRootStateType>(state => state.state.loading)

    return (

        <div className={`${s.wrapper} ${theme.theme === "white" ? s.white : s.black}`}>
            {loading && <Preloader/>}
            <h2>Home Work 12</h2>
            <OnOff mode={theme.theme}/>
            <h2>Home Work 13</h2>
            <Request/>
        </div>
    );
}