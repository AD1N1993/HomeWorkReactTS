import React from "react";
import s from "./FlyMenu.module.scss";
import {NavLink} from "react-router-dom";

type PropsType = {
    status: boolean
}

export function FlyMenu(props: PropsType) {
    return (
        <>
            <div className={`${s.flyMenu} ${props.status ? s.show : ""}`}>
                <ul className={s.flyMenuList}>
                    <NavLink className={s.flyMenuLink} to="prejunior">
                        <li className={s.flyMenuItem}> PreJunior</li>
                    </NavLink>

                    <NavLink className={s.flyMenuLink} to="junior">
                        <li className={s.flyMenuItem}> Junior</li>
                    </NavLink>
                    <NavLink className={s.flyMenuLink} to="juniorplus">
                        <li className={s.flyMenuItem}> Junior+</li>
                    </NavLink>
                </ul>
            </div>
        </>
    );
}