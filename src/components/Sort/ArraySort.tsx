import React from "react";
import {Button} from "../../common/Button/Button";
import {checkHumanAC, hwReducer,  PersonType, sortHumanAC} from "../../state/reducers/hwReducer";
import s from "./ArraySort.module.scss"
import {useDispatch} from "react-redux";


type SortPropsType = {
    humans: Array<PersonType>;
}

export const Sort = (props: SortPropsType) => {
    let dispatch = useDispatch();
    const peopleUp = () => {
       dispatch(sortHumanAC("up"));
    }
    const peopleDown = () => {
       dispatch(sortHumanAC("down"));
    }
    const checkOld = () => {
       dispatch(checkHumanAC(18));
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