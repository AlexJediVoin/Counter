import React, {ChangeEvent} from 'react';

import styles from './Settings.module.css';
import SuperButton from "../SuperButton/SuperButton";

type SettingsPropsType = {
    maxValue: number
    startValue: number
    disabledSetBtn: boolean
    onChangeFlag: (flag: boolean) => void
    onChangeMaxValue: (value: number) => void
    onChangeStartValue: (value: number) => void
    onClickSetBtn: () => void
    error: boolean;
}

const Settings = React.memo((props: SettingsPropsType) => {

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChangeMaxValue(e.currentTarget.valueAsNumber)
        props.onChangeFlag(true);
    }
    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChangeStartValue(e.currentTarget.valueAsNumber)
        props.onChangeFlag(true);
    }
    return (
        <div className={styles.Settings}>
            <div className={styles.Wrapper}>
                <div className={styles.Set}>
                    <div>
                        <span className={styles.max_value}>max value:</span>
                        <input type="number" value={props.maxValue} onChange={onChangeMaxValue}/>
                    </div>
                    <div>
                        <span className={styles.start_value}>start value:</span>
                        <input type="number" className={props.error ? styles.error : ""} value={props.startValue}
                               onChange={onChangeStartValue}/>
                    </div>
                </div>
                <div className={styles.Button}>
                    <SuperButton title={'Set'} disabled={props.disabledSetBtn} onClickBtn={props.onClickSetBtn}/>
                </div>
            </div>
        </div>
    );
})

export default Settings;