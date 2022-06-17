import React from 'react';
import './SuperButton.module.css';

type SuperButtonPropsType = {
    title: string
    disabled: boolean
    onClickBtn: () => void
}

const  SuperButton = React.memo((props: SuperButtonPropsType) =>{
    const OnClickHandler = () => {
        if (props.title === "Set") {
            props.onClickBtn();
        }
        if (props.title === "inc") {
            props.onClickBtn();
        }
        if (props.title === "reset") {
            props.onClickBtn();
        }
    }
debugger;
    return (
        <div>
            <button disabled={props.disabled} onClick={OnClickHandler}>{props.title}</button>
        </div>
    );
})

export default SuperButton;