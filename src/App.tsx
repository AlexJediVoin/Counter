import React, {useState} from 'react';
import './App.css';
import Settings from "./Settings/Settings";
import Display from "./Display/Display";


function App() {

    let [maxValue, setMaxValue] = useState<number>(10);
    let [startValue, setStartValue] = useState<number>(0);
    let [counter, setCounter] = useState<number>(startValue);
    let [counterStyle, setCounterStyle] = useState<boolean>(false);
    let [error, setError] = useState<boolean>(false);
    let [flag, setFlag] = useState<boolean>(false);
    let [flagMaxValue, setFlagMaxValue] = useState<boolean>(false);


    let [disableSetBtn, setDisableSetBtn] = useState<boolean>(false);
    let [disableIncBtn, setDisableIncBtn] = useState<boolean>(false);
    let [disableResetBtn, SetDisableResetBtn] = useState<boolean>(false);

    const setToLocalStorageHandler = () => {
        localStorage.setItem('startValue', JSON.stringify(startValue));
        localStorage.setItem('maxValue', JSON.stringify(maxValue));
    }
    const getFromLocalStorageHandler = () => {
        let valueStartAsString = localStorage.getItem('startValue');
        let valueMaxAsString = localStorage.getItem('maxValue');
        if (valueStartAsString) {
            let newStartValue = JSON.parse(valueStartAsString);
            setStartValue(newStartValue);
        }
        if (valueMaxAsString) {
            let newMaxValue = JSON.parse(valueMaxAsString);
            setStartValue(newMaxValue);
        }
    }

    const onChangeMaxValue = (maxValue: number) => {
        if (maxValue <= startValue) {
            setFlagMaxValue(true);
            setDisableSetBtn(true);
            setMaxValue(maxValue)
            return
        } else if (maxValue > startValue) {
            setFlag(true);
            setFlagMaxValue(false);
        }
        setMaxValue(maxValue)
        setDisableSetBtn(false);
    }
    const onChangeStartValue = (startValue: number) => {
        if (startValue >= maxValue) {
            setFlagMaxValue(true);
            setStartValue(startValue);
            setDisableSetBtn(true);
            return
        } else {
            setFlagMaxValue(false);
        }
        if (startValue < 0) {
            setError(true);
            setFlagMaxValue(true);
            setStartValue(startValue);
            setDisableSetBtn(true);
            return
        } else if (startValue >= 0) {
            if (!error) {
                setStartValue(startValue);
                setDisableSetBtn(false);
                return
            }
            setError(false);
        }
        setStartValue(startValue);
        setDisableSetBtn(false);
    }

    const onClickSetBtn = () => {
        setToLocalStorageHandler();
        getFromLocalStorageHandler();
        setFlag(false);
        setFlagMaxValue(false);
        setDisableSetBtn(true);
        setCounter(startValue);
    }
    const onClickResetBtn = () => {
        setDisableSetBtn(false);
        setDisableIncBtn(false);
        setCounterStyle(false);
        setCounter(startValue);
    }

    const onClickIncBtn = () => {
        if (counter < maxValue) {
            counter++;
            if (counter === maxValue) {
                setDisableIncBtn(true);
                setCounterStyle(true);
            } else {
                setCounterStyle(false)
            }
            setCounter(counter);
        }
    }
    const onChangeFlag = (flag: boolean) => {
        setFlag(flag);
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
