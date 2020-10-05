import React from "react";
import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";
import {themeReducer, ThemeReducerType} from "../state/reducers/themesReducer";

const rootReducer = combineReducers({
    theme: themeReducer
})

const initialGlobalState:ThemeReducerType = {
    theme:"black"
}

export const storyBookStore = createStore(rootReducer)

export const ReduxStoreProviderDecorators = (storyFn:any) => (
    <Provider store={storyBookStore}>{storyFn()}</Provider>
)