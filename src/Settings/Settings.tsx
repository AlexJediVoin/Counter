import React, {ChangeEvent} from 'react';
import SuperButton from '../SuperButton/SuperButton';
import './Settings.css';

type SettingsPropsType = {
    maxValue: number
    startValue: number
    disabledSetBtn: boolean
    onChangeFlag: (flag: boolean)=>void
    onChangeMaxValue: (value: number)=>void
    onChangeStartValue: (value: number)=>void
    onClickSetBtn: () => void
    error: boolean;
}

function Settings(props:SettingsPropsType) {

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChangeMaxValue(e.currentTarget.valueAsNumber)
        props.onChangeFlag(true);
    }
    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChangeStartValue(e.currentTarget.valueAsNumber)
        props.onChangeFlag(true);
    }
    return (
        <div className="Settings">
            <div className={"Wrapper"}>
                <div className={"Set"}>
                    <div>
                        <span className={"max_value"}>max value:</span>
                        <input type="number" value={props.maxValue} onChange={onChangeMaxValue}/>
                    </div>
                    <div>
                        <span>start value:</span>
                        <input type="number" className={props.error ? "error" : ""} value={props.startValue} onChange={onChangeStartValue}/>
                    </div>
                </div>
                <div className={"Button"}>
                    <SuperButton title={'Set'} disabled={props.disabledSetBtn}  onClickBtn={props.onClickSetBtn}/>
                </div>
            </div>
        </div>
    );
}

export default Settings;