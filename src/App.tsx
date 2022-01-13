import React, {useState} from 'react';
import './App.css';
import Settings from "./Settings/Settings";
import Display from "./Display/Display";


function App() {

    let [maxValue, SetMaxValue] = useState<number>(10);
    let [startValue, SetStartValue] = useState<number>(0);
    let [counter, SetCounter] = useState<number>(startValue);
    let [counterStyle, SetCounterStyle] = useState<boolean>(false);
    let [error, SetError] = useState<boolean>(false);
    let [flag, SetFlag] = useState<boolean>(false);
    let [flagMaxValue, SetFlagMaxValue] = useState<boolean>(false);

    let [disableSetBtn, SetDisableSetBtn] = useState<boolean>(false);
    let [disableIncBtn, SetDisableIncBtn] = useState<boolean>(false);
    let [disableResetBtn, SetDisableResetBtn] = useState<boolean>(false);

    const onChangeMaxValue = (maxValue: number) => {
        if (maxValue <= startValue) {
            SetFlagMaxValue(true);
            SetDisableSetBtn(true);
            SetMaxValue(maxValue)
            return
        } else if (maxValue > startValue) {
            SetFlag(true);
            SetFlagMaxValue(false);
        }
        SetMaxValue(maxValue)
        SetDisableSetBtn(false);
    }
    const onChangeStartValue = (startValue: number) => {
        if (startValue >= maxValue) {
            SetFlagMaxValue(true);
            SetStartValue(startValue);
            SetDisableSetBtn(true);
            return
        }
        else {
            SetFlagMaxValue(false);
        }
        if (startValue < 0) {
            SetError(true);
            SetFlagMaxValue(true);
            SetStartValue(startValue);
            SetDisableSetBtn(true);
            return
        } else if (startValue >= 0) {
            if (!error) {
                SetStartValue(startValue);
                SetDisableSetBtn(false);
                return
            }
            SetError(false);
        }
        SetStartValue(startValue);
        SetDisableSetBtn(false);
    }

    const onClickSetBtn = () => {
        SetFlag(false);
        SetFlagMaxValue(false);
        SetDisableSetBtn(true);
        SetCounter(startValue);
    }
    const onClickResetBtn = () => {
        SetDisableSetBtn(false);
        SetDisableIncBtn(false);
        SetCounterStyle(false);
        SetCounter(startValue);
    }

    const onClickIncBtn = () => {
        if (counter < maxValue) {
            counter++;
            if (counter === maxValue) {
                SetDisableIncBtn(true);
                SetCounterStyle(true);
            } else {SetCounterStyle(false)}
            SetCounter(counter);
        }
    }
    const onChangeFlag = (flag: boolean) => {
       SetFlag(flag);
    }
    return (
        <div className="App">
            <Settings maxValue={maxValue}
                      error={error}
                      startValue={startValue}
                      onChangeFlag={onChangeFlag}
                      onChangeMaxValue={onChangeMaxValue}
                      onChangeStartValue={onChangeStartValue}
                      disabledSetBtn={disableSetBtn}
                      onClickSetBtn={onClickSetBtn}
            />
            <Display
                flag={flag}
                flagMaxValue={flagMaxValue}
                counter={counter}
                counterStyle={counterStyle}
                disableIncBtn={disableIncBtn}
                disableResetBtn={disableResetBtn}
                onClickResetBtn={onClickResetBtn}
                onClickIncBtn={onClickIncBtn}
            />
        </div>
    );
}

export default App;
