import React, {ChangeEvent, KeyboardEvent} from "react";
import {Button} from "../../common/Button/Button";
import {InputText} from "../../common/InputText/InputText";
import {HelloUsersType} from "../../Pages/Prejunior/PreJunior";



type InputNameProps = {
    inputState: string
    changeInputName: (name:string) => void;
    quantityUsers: Array<HelloUsersType>
    changeQuantity: (user:string)=> void
}

function HelloInput(props:InputNameProps) {


    const onChange = (inputValue: string) => {
        props.changeInputName(inputValue)
    };


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

            <InputText value={props.inputState} onChange={onChange} actionEnter={ HelloUser}/>
            <Button value={"Hello"} action={HelloUser}/>

            <div>Quantity Users: <b>{props.quantityUsers.length}</b></div>

        </>
    );
}

export default HelloInput;