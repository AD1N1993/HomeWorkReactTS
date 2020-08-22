import React from "react";
import {InputSettingsType} from "../../Pages/Junior/Junior";


type RadioButtonPropsType = {
    radioSettings: Array<InputSettingsType>
    name: string
    // onChange: () => void
}


export const RadioButton = (props: RadioButtonPropsType) => {

    return (
        <>
            <h3>{props.name}</h3>
            {props.radioSettings.map(i => {
                return<><input type="radio" value={i.title} /> <span>{i.title}</span></>
            })}
        </>
    );


};