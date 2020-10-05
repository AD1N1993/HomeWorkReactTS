const SET_THEME = "SET_THEME";

export type ThemeReducerType = {
    theme: "white" | "black"
}

type ActionsType = ReturnType<typeof setThemeAC>

const initialState: ThemeReducerType =
    {
        theme: "white"
    }

export const themeReducer = (state: ThemeReducerType = initialState, action: ActionsType): ThemeReducerType => {
    switch (action.type) {
        case SET_THEME:
            return {
                ...state, theme: action.theme
            }
        default:
            return state;
    }
}

export const setThemeAC = (theme: "white" | "black") => {
    return {type: SET_THEME, theme} as const;
}
