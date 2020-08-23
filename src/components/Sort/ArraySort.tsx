import React from "react";
import {Button} from "../../common/Button/Button";
import {checkHumanAC, hwReducer, hwReducerType, sortHumanAC} from "../../reducers/hwReducer";
import s from "./ArraySort.module.scss"


type SortPropsType = {
    humans: hwReducerType;
    sort: (sortHumans: hwReducerType) => void
}

export const Sort = (props: SortPropsType) => {
    const peopleUp = () => {
        let action = sortHumanAC("up");
        let sortHumans = hwReducer(props.humans, action);
        if (sortHumans) props.sort(sortHumans);
    }
    const peopleDown = () => {
        let action = sortHumanAC("down");
        let sortHumans = hwReducer(props.humans, action);
        if (sortHumans) props.sort(sortHumans);
    }
    const checkOld = () => {
        let action = checkHumanAC(18);
        let sortHumans = hwReducer(props.humans, action);
        if (sortHumans) props.sort(sortHumans);
    }
    return (
        <div className={s.wrapper}>
            <table className={s.table}>
                <caption className={s.title}>people</caption>
                <tbody>
                <tr>
                    <th className={s.subTitle}>Name</th>
                    <th className={s.subTitle}>Old</th>
                </tr>
                {props.humans.map(p => {
                    return (
                        <tr key={p.id} className={s.dataRow}>
                            <td className={s.columnOne}>{p.name}</td>
                            <td className={s.columnTwo}> {p.age}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
            <div className={s.btnWrapper}>
                <Button value={"Up"} action={peopleUp}/>
                <Button value={"Down"} action={peopleDown}/>
                <Button value={"Only 18+"} action={checkOld}/>
            </div>
        </div>
    );

}