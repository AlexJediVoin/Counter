import React from 'react';
import './Display.css';
import SuperButton from "../SuperButton/SuperButton";
type DisplayPropsType = {
    counter:number
    flag:boolean
    flagMaxValue: boolean
    counterStyle: boolean
    disableIncBtn: boolean
    disableResetBtn: boolean
    onClickResetBtn: ()=>void
    onClickIncBtn: ()=>void
}

function Display(props:DisplayPropsType) {

    const message1 = "Введите значения параметров";
    const message2 = "Некорректное значение!";
    let flag = props.flag ? message1 : props.counter;
    let result = props.flagMaxValue ? message2 : flag;
    return (
        <div className="Display">
            <div className={"Wrapper"}>
                <div className={"Counter"}>
                    <div>
                         <h3 className={props.counterStyle || props.flagMaxValue ? "red_counter" : ""}>{result}</h3>
                    </div>
                </div>
                <div className={"Button"}>
                    <SuperButton title={'inc'} disabled={props.disableIncBtn} onClickBtn={props.onClickIncBtn}/>
                    <SuperButton title={'reset'} disabled={props.disableResetBtn} onClickBtn={props.onClickResetBtn}/>
                </div>
            </div>
        </div>
    );
}

export default Display;