import React from "react";
import s from "./FlyMenu.module.scss";
import {NavLink} from "react-router-dom";

type PropsType = {
    status: boolean
    onClickHide: ()=> void
}

export function FlyMenu(props: PropsType) {
    return (
        <div className={s.wrapper} >
            <div className={`${s.outside} ${props.status ? s.show : ""}`} onClick={props.onClickHide}></div>
            <div className={`${s.flyMenu} ${props.status ? s.show : ""}`}>
                <ul className={s.flyMenuList}>
                    <NavLink className={s.flyMenuLink} to="prejunior" activeClassName={s.activeLink}>
                        <li className={s.flyMenuItem}> PreJunior</li>
                    </NavLink>

                    <NavLink className={s.flyMenuLink} to="junior" activeClassName={s.activeLink}>
                        <li className={s.flyMenuItem}> Junior</li>
                    </NavLink>
                    <NavLink className={s.flyMenuLink} to="juniorplus" activeClassName={s.activeLink}>
                        <li className={s.flyMenuItem}> Junior+</li>
                    </NavLink>
                </ul>
            </div>
        </div>
    );
}