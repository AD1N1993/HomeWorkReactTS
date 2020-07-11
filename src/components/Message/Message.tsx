import React from 'react';
import s from "./Message.module.scss"

type MessageType = {
    nickName: string,
    text: string,
    avatar: string,
    hours: number,
    minutes: number
}

const Message:React.FC<MessageType>= (props) => {
    return(
        <div className={s.bg}>
            <img className={s.avatar} src={props.avatar} alt="avatar"/>
            <div className={s.block}>
                <div className={s.wrapper}>
                    <span className={s.nickName}>{props.nickName}</span>
                    <span className={s.text}>{props.text}</span>
                </div>
                <div className={s.time}>{`${props.hours}:0${props.minutes}`}</div>
            </div>

        </div>
    );
}

export default Message