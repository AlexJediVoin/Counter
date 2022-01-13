import React from 'react';
import './SuperButton.css';

type SuperButtonPropsType = {
    title: string
    disabled: boolean
    onClickBtn: () => void
}



function SuperButton(props: SuperButtonPropsType) {

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

    return (
        <div className="SuperButton">
            <button disabled={props.disabled} onClick={OnClickHandler}>{props.title}</button>
        </div>
    );
}

export default SuperButton;