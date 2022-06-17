import React, {useCallback, useEffect} from 'react';
import styles from './App.module.css';
import Settings from "./Settings/Settings";
import Display from "./Display/Display";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./Redux/store";
import {
    disabledSetBtnAC,
    setErrorAC,
    setMaxValueAC,
    setStartValueAC,
    settingsStateType
} from "./Redux/settings-reducer";
import {
    displayStateType,
    setCounterAC, setCounterStyleAC,
    setDisableIncBtnAC, setDisableResetBtnAC,
    setFlagAC,
    setFlagMaxValueAC
} from './Redux/display-reducer';

function App() {

    let settingsState = useSelector<AppStateType, settingsStateType>(store => store.settings);
    let displayState = useSelector<AppStateType, displayStateType>(store => store.display);
    let dispatch = useDispatch();

    const setToLocalStorageHandler =useCallback( () => {
        localStorage.setItem('startValue', JSON.stringify(settingsState.startValue));
        localStorage.setItem('maxValue', JSON.stringify(settingsState.maxValue));
    },[settingsState.startValue,settingsState.maxValue]);

    const getFromLocalStorageHandler = () => {
        let valueStartAsString = localStorage.getItem('startValue');
        let valueMaxAsString = localStorage.getItem('maxValue');
        if (valueStartAsString) {
            let newStartValue = JSON.parse(valueStartAsString);
            dispatch(setStartValueAC(newStartValue));
        }
        if (valueMaxAsString) {
            let newMaxValue = JSON.parse(valueMaxAsString);
            dispatch(setMaxValueAC(newMaxValue));
        }
    };

    const onChangeMaxValue = useCallback((maxValue: number) => {
        if (maxValue <= settingsState.startValue) {
            dispatch(setFlagMaxValueAC(true));
            dispatch(disabledSetBtnAC(true));
            dispatch(setMaxValueAC(maxValue));
            return
        } else if (maxValue > settingsState.startValue) {
            dispatch(setFlagAC(true));
            dispatch(setFlagMaxValueAC(false));
        }
        dispatch(setMaxValueAC(maxValue));
        dispatch(disabledSetBtnAC(false));
    }, [dispatch,settingsState.startValue]);

    const onChangeStartValue = useCallback((startValue: number) => {
        if (startValue >= settingsState.maxValue) {
            dispatch(setFlagMaxValueAC(true));
            dispatch(setStartValueAC(startValue));
            dispatch(disabledSetBtnAC(true));
            return
        } else {
            dispatch(setFlagMaxValueAC(false));
        }
        if (startValue < 0) {
            dispatch(setErrorAC(true));
            dispatch(setFlagMaxValueAC(true));
            dispatch(setStartValueAC(startValue));
            dispatch(disabledSetBtnAC(true));
            return
        } else if (startValue >= 0) {
            if (!settingsState.error) {
                dispatch(setStartValueAC(startValue));
                dispatch(disabledSetBtnAC(false));
                return
            }
            dispatch(setErrorAC(false));
        }
        dispatch(setStartValueAC(startValue));
        dispatch(disabledSetBtnAC(false));
    }, [dispatch,settingsState.maxValue, settingsState.error])

    const onClickSetBtn = useCallback(() => {
        setToLocalStorageHandler();
        dispatch(setFlagAC(false));
        dispatch(disabledSetBtnAC(true));
        dispatch(setDisableIncBtnAC(false));
        dispatch(setDisableResetBtnAC(false));
        dispatch(setCounterAC(settingsState.startValue));
    }, [setToLocalStorageHandler,dispatch,settingsState.startValue]);

    const onClickResetBtn = useCallback(() => {
        dispatch(disabledSetBtnAC(false));
        dispatch(setDisableIncBtnAC(true));
        dispatch(setDisableResetBtnAC(true));
        dispatch(setCounterStyleAC(false));
        dispatch(setCounterAC(settingsState.startValue));
    }, [dispatch,settingsState.startValue]);

    const onClickIncBtn = useCallback(() => {
        if (displayState.counter < settingsState.maxValue) {
            let newCounter = displayState.counter + 1;
            if (newCounter === settingsState.maxValue) {
                dispatch(setDisableIncBtnAC(true));
                dispatch(setCounterStyleAC(true));
            } else {
                dispatch(setCounterStyleAC(false))
            }
            dispatch(setCounterAC(newCounter));
        }
    }, [dispatch,displayState.counter, settingsState.maxValue]);

    const onChangeFlag = useCallback((flag: boolean) => {
        dispatch(setFlagAC(flag));
    }, [dispatch])

    useEffect(() => {
        getFromLocalStorageHandler();
    },[])
    return (
        <div className={styles.App}>
            <Settings maxValue={settingsState.maxValue}
                      error={settingsState.error}
                      startValue={settingsState.startValue}
                      disabledSetBtn={settingsState.disabledSetBtn}
                      onChangeFlag={onChangeFlag}
                      onChangeMaxValue={onChangeMaxValue}
                      onChangeStartValue={onChangeStartValue}
                      onClickSetBtn={onClickSetBtn}
            />
            <Display
                flag={displayState.flag}
                flagMaxValue={displayState.flagMaxValue}
                counter={displayState.counter}
                counterStyle={displayState.counterStyle}
                disableIncBtn={displayState.disableIncBtn}
                disableResetBtn={displayState.disableResetBtn}
                onClickResetBtn={onClickResetBtn}
                onClickIncBtn={onClickIncBtn}
            />
        </div>
    );
}

export default App;
