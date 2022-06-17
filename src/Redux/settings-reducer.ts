export type settingsStateType = {
    maxValue: number,
    error: boolean,
    startValue: number,
    disabledSetBtn: boolean
}

let initialState: settingsStateType = {
    maxValue: 10,
    error: false,
    startValue: 1,
    disabledSetBtn: false
}

type setMaxValueACType = {
    type: "SET_MAX_VALUE",
    payload: {
        newMaxValue: number
    }
}
type setErrorACType = {
    type: "SET_ERROR",
    payload: {
        newError: boolean
    }
}

export type setStartValueACType = {
    type: "SET_START_VALUE"
    payload: {
        newStartValue: number
    }
}

type disabledSetBtnACType = {
    type: "DISABLED_SET_BTN",
    payload: {
        newValueBtn: boolean
    }
}

type ActionType = setMaxValueACType | setErrorACType | setStartValueACType | disabledSetBtnACType;

export const settingsReducer = (state = initialState, action: ActionType): settingsStateType => {
    switch (action.type) {
        case "SET_START_VALUE":
            return {...state, startValue: action.payload.newStartValue};
        case "SET_MAX_VALUE":
            return {...state, maxValue: action.payload.newMaxValue};
        case "SET_ERROR":
            return {...state, error: action.payload.newError};
        case "DISABLED_SET_BTN":
            return {...state, disabledSetBtn: action.payload.newValueBtn};
        default:
            return state;
    }
}

export const setMaxValueAC = (newMaxValue: number): setMaxValueACType => {
    return ({
        type: "SET_MAX_VALUE",
        payload: {newMaxValue},
    })
}
export const setErrorAC = (newError: boolean): setErrorACType => {
    return ({
        type: "SET_ERROR",
        payload: {newError},
    })
}
export const setStartValueAC = (newStartValue: number): setStartValueACType => {
    return ({
        type: "SET_START_VALUE",
        payload: {newStartValue},
    })
}
export const disabledSetBtnAC = (newValueBtn: boolean): disabledSetBtnACType => {
    return ({
        type: "DISABLED_SET_BTN",
        payload: {newValueBtn},
    })
}