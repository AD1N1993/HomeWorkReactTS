import React, {ChangeEvent, KeyboardEvent} from "react";
import {HelloUsersType} from "../../App";

type InputNameProps = {
    inputState: string
    changeInputName: (name:string) => void;
    quantityUsers: Array<HelloUsersType>
    changeQuantity: (user:string)=> void
}

function HelloInput(props:InputNameProps) {

 function changeInputValue(e: ChangeEvent<HTMLInputElement>) {
    props.changeInputName(e.currentTarget.value)
 }

 function HelloUser() {
      if(props.inputState !==""){
         alert(`Hello dear ${props.inputState}`);
         props.changeQuantity(props.inputState.toString())

     }

    props.changeInputName("")
 }

 function sendKeyPressEnter(e:KeyboardEvent<HTMLInputElement>) {
    if(e.key === "Enter"){
        HelloUser();
    }
 }

    return (
        <>
            <input
                type="text"
                value={props.inputState}
                onChange={changeInputValue}
                onKeyPress={sendKeyPressEnter}
            />
            <button className={'btn'} onClick={HelloUser}>
                Hello
            </button>

            <div>Quantity Users: <b>{props.quantityUsers.length}</b></div>

        </>
    );
}

export default HelloInput;