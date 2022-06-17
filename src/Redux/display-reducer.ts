export type displayStateType = {
    flag: boolean,
    flagMaxValue: boolean,
    counter: number,
    counterStyle: boolean,
    disableIncBtn: boolean,
    disableResetBtn: boolean,
}

let initialState: displayStateType = {
    flag: true,
    flagMaxValue: false,
    counter: 3,
    counterStyle: false,
    disableIncBtn: true,
    disableResetBtn: true,
}

type setFlagACType = {
    type: "SET_FLAG",
    payload: {
        newFlag: boolean
    }
}
type setFlagMaxValueACType = {
    type: "SET_FLAG_MAX_VALUE",
    payload: {
        newFlagMaxValue: boolean
    }
}

type setCounterACType = {
    type: "SET_COUNTER"
    payload: {
        newCounter: number
    }
}

type setCounterStyleACType = {
    type: "SET_COUNTER_STYLE",
    payload: {
        newCounterStyle: boolean
    }
}
type setDisableIncBtnACType = {
    type: "SET_DISABLE_INC_BTN",
    payload: {
        newDisableIncBtn: boolean
    }
}
type setDisableResetBtnACType = {
    type: "SET_DISABLE_RESET_BTN",
    payload: {
        newDisabledResetBtn: boolean
    }
}

type ActionType = setFlagACType
    | setFlagMaxValueACType
    | setCounterACType
    | setCounterStyleACType
    | setDisableIncBtnACType
    | setDisableResetBtnACType;

export const displayReducer = (state = initialState, action: ActionType): displayStateType => {
    switch (action.type) {
        case "SET_COUNTER":
            return {...state, counter: action.payload.newCounter};
        case "SET_COUNTER_STYLE":
            return {...state, counterStyle: action.payload.newCounterStyle};
        case "SET_DISABLE_INC_BTN":
            return {...state, disableIncBtn: action.payload.newDisableIncBtn};
        case "SET_DISABLE_RESET_BTN":
            return {...state, disableResetBtn: action.payload.newDisabledResetBtn};
        case "SET_FLAG":
            return {...state, flag: action.payload.newFlag};
        case "SET_FLAG_MAX_VALUE":
            return {...state, flagMaxValue: action.payload.newFlagMaxValue};
        default:
            return state;
    }
}

export const setFlagAC = (newFlag: boolean): setFlagACType => {
    return ({
        type: "SET_FLAG",
        payload: {newFlag},
    })
}
export const setFlagMaxValueAC = (newFlagMaxValue: boolean): setFlagMaxValueACType => {
    return ({
        type: "SET_FLAG_MAX_VALUE",
        payload: {newFlagMaxValue},
    })
}
export const setCounterAC = (newCounter: number): setCounterACType => {
    return ({
        type: "SET_COUNTER",
        payload: {newCounter},
    })
}
export const setCounterStyleAC = (newCounterStyle: boolean): setCounterStyleACType => {
    return ({
        type: "SET_COUNTER_STYLE",
        payload: {newCounterStyle},
    })
}
export const setDisableIncBtnAC = (newDisableIncBtn: boolean): setDisableIncBtnACType => {
    return ({
        type: "SET_DISABLE_INC_BTN",
        payload: {newDisableIncBtn},
    })
}
export const setDisableResetBtnAC = (newDisabledResetBtn: boolean): setDisableResetBtnACType => {
    return ({
        type: "SET_DISABLE_RESET_BTN",
        payload: {newDisabledResetBtn},
    })
}