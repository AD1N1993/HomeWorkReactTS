import {setThemeAC, themeReducer, ThemeReducerType} from "./themesReducer";


test("should changed theme", () => {
    const startState: ThemeReducerType = {
        theme: "white"
    }

    const action = setThemeAC("black")

    const endState = themeReducer(startState,action)

    expect(endState.theme).toBe("black")
})