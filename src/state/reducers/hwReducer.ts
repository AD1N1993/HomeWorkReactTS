import {hwApi} from "../../api/RequestsAPI";
import {Dispatch, useEffect} from "react";

const SET_PRELOADER = "SET_PRELOADER";
const SORT_ARRAY_HUMAN = "SORT_ARRAY_HUMAN";
const CHECK_ARRAY_HUMAN = "CHECK_ARRAY_HUMAN";
const SET_ERRORS = "SET_ERRORS";


export type PersonType = { id: string, name: string, age: number }
export type hwReducerType = {
    person: Array<PersonType>
    loading: boolean
    error: string | null
}

type SortHumanAcType = {
    type: "SORT_ARRAY_HUMAN";
    payload: "up" | "down"
}
type CheckHumanAcType = {
    type: "CHECK_ARRAY_HUMAN";
    payload: 18
}
type SetPreloaderAcType = {
    type: "SET_PRELOADER";
}

type ActionsType = SortHumanAcType | CheckHumanAcType | SetPreloaderAcType | ReturnType<typeof setErrorAC>

let initialState: hwReducerType = {
    person: [
        {id: '1', name: "Alex", age: 32},
        {id: '2', name: "Viktor", age: 16},
        {id: '3', name: "Den", age: 25},
        {id: '4', name: "Bork", age: 17},
        {id: '5', name: "Igor", age: 52},
        {id: '6', name: "Helen", age: 12},
        {id: '7', name: "Julia", age: 100}
    ],
    loading: false,
    error: null
}

export const hwReducer = (state: hwReducerType = initialState, action: ActionsType): hwReducerType => {
    switch (action.type) {
        case SORT_ARRAY_HUMAN:
            if (action.payload === "up") {
                return {
                    ...state, person: [...state.person.sort(function (a, b) {
                        if (a.name > b.name) {
                            return 1;
                        }
                        if (a.name < b.name) {
                            return -1;
                        }
                        return 0;
                    })]
                };
            } else if (action.payload === "down") {
                return {
                    ...state, person: [...state.person.sort(function (a, b) {
                        if (a.name < b.name) {
                            return 1;
                        }
                        if (a.name > b.name) {
                            return -1;
                        }
                        return 0;
                    })]
                }
            } else return state

        case CHECK_ARRAY_HUMAN:
            return {
                ...state,
                person: state.person.filter(p => p.age > 18)
            }
        case SET_PRELOADER:
            return {
                ...state, loading: !state.loading
            }
        case SET_ERRORS:
            return {
                ...state, error: action.errorMessage
            }
        default:
            return state;
    }


}

export const sortHumanAC = (payload: "up" | "down"): SortHumanAcType => {
    return {type: SORT_ARRAY_HUMAN, payload: payload};
}
export const checkHumanAC = (payload: 18): CheckHumanAcType => {
    return {type: CHECK_ARRAY_HUMAN, payload: payload};
}
export const setPreloaderAC = (): SetPreloaderAcType => {
    return {type: SET_PRELOADER};
}
export const setErrorAC = (errorMessage: string) => ({type: SET_ERRORS, errorMessage} as const)


export const setSuccessTC = (success: boolean) => {

    return (dispatch: Dispatch<ActionsType>) => {
        dispatch(setPreloaderAC())
        hwApi.sendValue(success)
            .then((res) => {
                dispatch(setErrorAC(res.data.errorText))

            })
            .catch(res => {
                dispatch(setErrorAC("ошибка 500 - обычно означает что что-то сломалось на сервере, например база данных)"))
            })
            .finally(() => {
                dispatch(setPreloaderAC())
            })
    }

}